window.addEventListener('load', e => {
    let basket = JSON.parse(localStorage.getItem('basket'))
    
    if(basket) {
        makeList(basket)
        total(basket)
    }
})

function makeList(arr) {
    let tbody = document.querySelector('tbody')
    tbody.innerHTML = ""

    arr.forEach((item, idx) => {
        const {image, menuname, cnt} = item
        let price = Number(item.price)

        let tr = document.createElement('tr')

        tr.innerHTML = `<td>${idx+1}</td>
                        <td><img src="./resource/img/menus/${image}" alt=""></td>
                        <td>${menuname}</td>
                        <td style="width:20%;"><input class="form-control" type="number" name="${idx}" id="${idx}" value="${cnt}" step="1" min="1"></td>
                        <td>${price.toLocaleString()}\\</td>
                        <td class="last${idx} price">${(price*Number(cnt)).toLocaleString()}\\</td>
                        <td><button class="btn btn-danger" data-id="${idx}"><i class="fas fa-times"></i></button></td>`

        tr.querySelector('input').addEventListener('change', e => {
            arr[idx].cnt = e.target.value
            $(`.last${idx}`).html(`${(Number(e.target.value) * price).toLocaleString()}\\`)
            total(arr)
        })

        tr.querySelector('button').addEventListener('click', e => {
            arr.splice(idx, 1)
            localStorage.setItem('basket', JSON.stringify(arr))
            makeList(arr)
            total(arr)
        })
        
        tbody.appendChild(tr)
    });
}

function total(arr) {
    let tot = 0
    arr.forEach(i => {
        tot += Number(i.cnt) * Number(i.price)
    })

    $('.total-price').html(`총 ${tot.toLocaleString()}\\`)
}