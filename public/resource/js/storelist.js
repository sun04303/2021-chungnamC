let goodsList = []
let selectGoods = []
let stat = false

window.addEventListener('keydown', e => {
    if(e.shiftKey) {
        stat = true
    }
})

window.addEventListener('keyup', e => {
    if(e.key == 'Shift') {
        stat = false
    }
})

fetch('./resource/js/data.json')
.then(res => res.json())
.then(data => {
    data.forEach((item, idx) => {
        const {name, etc} = item

        let card = `<div class="card" style="width: 18rem;">
                        <img src="./resource/img/빵집/${name}/1.jpg" class="card-img-top" alt="shop-image">
                        <div class="card-body">
                            <h5 class="card-title">${name}</h5>
                            <p class="card-text">${etc}</p>
                            <button class="btn btn-secondary view__store" data-id="${idx}" data-bs-toggle="modal" data-bs-target="#storeModal">빵집 보기</button>
                            <button class="btn btn-primary view__goods">상품 보기</button>
                        </div>
                    </div>`
        $('.shop .box').append(card)
    })

    document.querySelectorAll('.view__store').forEach(item => {
        item.addEventListener('click', e => {
            const {name, etc, location, time, sale} = data[e.target.dataset.id]

            $('.modal-title').html(name)

            let content = `
                <img src="./resource/img/빵집/${name}/1.jpg" alt="store-image">
                <div class="text">
                    <p>${etc}</p>
                    <p>${location}</p>
                    <p>영업 시간 : ${time}</p>
                    <p>누적 예약 판매 수 : ${sale}</p>
                </div>`

            $('.modal-body').html("")
            $('.modal-body').append(content)
        })
    })
})

fetch('./resource/js/menus.json')
.then(res => res.json())
.then(data => {
    makegoods(data, "전체")

    document.querySelectorAll('.view__goods').forEach(item => {
        item.addEventListener('click', e => {
            makegoods(data, e.path[1].children[0].innerHTML)
        })
    })

    document.querySelector('.view__all').addEventListener('click', e => {
        makegoods(data, "전체")
    })
})

function makegoods(data, target) {
    let cart = document.querySelector('.cart .box')
    let eventTarget, startPoint

    $('.goods .box').html("")
    
    data.forEach((item, idx) => {
        if(target != '전체' && item.name !== target)
        return
        
        const {image, menuname, name, price} = item
        
        let card = `<div class="card" style="width: 18rem;">
                        <img src="./resource/img/menus/${image}" data-id="${idx}" class="card-img-top" alt="shop-image">
                        <div class="card-body">
                            <h5 class="card-title">${menuname}</h5>
                            <p class="card-text">${name} / ${Number(price).toLocaleString()}\\</p>
                        </div>
                    </div>`
        
        $('.goods .box').append(card)
    })

    document.querySelectorAll('.goods img').forEach(item => {
        item.addEventListener('dragstart', e => {
            e.preventDefault()

            eventTarget = e.target
            startPoint = [e.pageX, e.pageY]

            eventTarget.style.opacity = '.5'
            eventTarget.style.zIndex = '1500'
            eventTarget.style.transition = 'null'
            return false
        })

        item.addEventListener('mouseup', e => {
            let left = Math.abs(Number(e.target.style.left.split('p')[0]))
            let top = Math.abs(Number(e.target.style.top.split('p')[0]))

            if(left + top < 1 && !stat) {
                let id = Number(e.target.dataset.id)
                let product = data.find(item => item.image.split('.')[0] == id + 1)

                localStorage.setItem('product', JSON.stringify(product))
                location.href = '/view.html'
            } else if(stat && selectGoods.length < 5) {
                e.target.classList.toggle("select")
                selectGoods.push(e.target)
            }
        })
    })

    window.addEventListener('mousemove', e => {
        if(!eventTarget || !startPoint) return

        let x = e.pageX - startPoint[0]
        let y = e.pageY - startPoint[1]

        $(eventTarget).css({
            left: x +'px',
            top: y +'px',
        })
    })

    window.addEventListener('mouseup', e => {
        if(!eventTarget || !startPoint) return

        let width = $(cart).width()
        let height = $(cart).height()
        let {left, top} = $(cart).offset()

        if(left <= e.pageX && e.pageX <= left + width && top <= e.pageY && e.pageY <= top + height) {

            let _target = eventTarget
            let id = Number(_target.dataset.id)
            let product = data.find(item => item.image.split('.')[0] == id + 1)
            let exist = goodsList.some(item => item == product)

            if(exist) {
                $(eventTarget).animate({
                    left: 0,
                    top: 0,
                }, 350, function() {
                    this.style.zIndex = '0';
                    this.style.opacity = '1'
                })
            } else {
                $(_target).css({
                    left:0,
                    top:0,
                    zIndex:0,
                    transform:"scale(0.1)"
                })

                setTimeout(() => {
                    _target.style.transition = '.35s'
                    _target.style.opacity = '1'
                    _target.style.transform = 'scale(1)'
                })

                goodsList.push(product)
                updateCart(goodsList, data, cart)
            }
        } else {
            $(eventTarget).animate({
                left:0,
                top:0,
            }, 350, function() {
                this.style.zIndex = '0'
                this.style.opacity = '1'
            })
        }

        eventTarget = null
        startPoint = null
    })
}

function updateCart(arr, data, cart) {
    let eventTarget, startPoint

    $('.cart .box').html("")
    arr.forEach((item, idx) => {
        let goods = `<div class="item" data-id="${idx}">
                        <img src="./resource/img/menus/${item.image}" alt="goods-image" data-id="${idx}">
                    </div>`

        $('.cart .box').append(goods)
    })

    document.querySelectorAll('.cart img').forEach(item => {
        item.addEventListener('dragstart', e => {
            e.preventDefault()

            eventTarget = e.target
            startPoint = [e.pageX, e.pageY]

            eventTarget.style.opacity = '.5'
            eventTarget.style.zIndex = '1500'
            eventTarget.style.transition = 'null'
            return false
        })

        item.addEventListener('click', e => {
            let left = Math.abs(Number(e.target.style.left.split('p')[0]))
            let top = Math.abs(Number(e.target.style.top.split('p')[0]))
            if(left + top < 1) {
                let id = Number(e.target.src.split('/').reverse()[0].split('.')[0])
                let product = data.find(item => item.image.split('.')[0] == id)
                localStorage.setItem('product', JSON.stringify(product))
                location.href = '/view.html'
            }
        })
    })

    window.addEventListener('mousemove', e => {
        if(!eventTarget || !startPoint) return

        let x = e.pageX - startPoint[0]
        let y = e.pageY - startPoint[1]

        $(eventTarget).css({
            left: x +'px',
            top: y +'px',
        })
    })

    $(window).on('mouseup', e => {
        if(!eventTarget || !startPoint) return

        let width = $(cart).width();
        let height = $(cart).height();
        let {left, top} = $(cart).offset();
        
        if(left >= e.pageX || e.pageX >= left + width || top >= e.pageY || e.pageY >= top + height) {
            let _target = eventTarget
            let image = _target.src.split('/')
            image = image[image.length - 1]
            let product = data.find(item => item.image == image)
            
            if(goodsList.indexOf(product) >= 0) {
                goodsList.splice(goodsList.indexOf(product), 1)
                
                eventTarget = null
                startPoint = null
                updateCart(goodsList, data, cart)
            }
        }
    })
}