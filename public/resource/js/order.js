if(location.href.split('=')[1] == 'view') {
    let data = JSON.parse(localStorage.getItem('product'))

    if(data == false) {
        alert('선택된 상품이 없습니다.')
        location.href = '/storelist'
    }

    let tot = (Number(data.cnt) * Number(data.price)).toLocaleString()

    let tr = `
            <tr>
                <td>1</td>
                <td><img src="./resource/img/menus/${data.image}" alt="bread-image"></td>
                <td>${data.menuname}</td>
                <td>${data.cnt}</td>
                <td>${Number(data.price).toLocaleString()}\\</td>
                <td>${tot}\\</td>
            </tr>`

    $('tbody').append(tr)
    $('.total-price').html(`총 ${tot}\\`)

    $('.order-btn').on('click', async e => {
        e.preventDefault()

        if($('#date').val() && $('#time').val() && $('#name').val() && $('#phone').val()) {
            let box = {
                product : data.id + 1,
                cnt : data.cnt,
                date : $('#date').val(),
                time : $('#time').val(),
                name : $('#name').val(),
                phone : $('#phone').val(),
                type : $('#card').prop('checked') ? 'card' : 'money'
            }

            updatecnt([{
                name : data.name,
                cnt : data.cnt
            }])
            order(box)
        } else {
            alert('정보를 모두 입력해주세요.')
        }
    })
} else if(location.href.split('=')[1] == 'basket') {
    let data = JSON.parse(localStorage.getItem('basket'))

    if(data == false) {
        alert('장바구니에 상품이 없습니다.')
        location.href = '/storelist'
    }

    $('tbody').html('')
    data.forEach((item, idx) => {
        let tr = `
                <tr>
                    <td>${idx+1}</td>
                    <td><img src="./resource/img/menus/${item.image}" alt="bread-image"></td>
                    <td>${item.menuname}</td>
                    <td>${item.cnt}</td>
                    <td>${Number(item.price).toLocaleString()}\\</td>
                    <td>${(item.cnt*item.price).toLocaleString()}\\</td>
                </tr>`

        $('tbody').append(tr)
    });

    $('.order-btn').on('click', e => {
        e.preventDefault()

        if($('#date').val() && $('#time').val() && $('#name').val() && $('#phone').val()) {
            let box = {
                product : data.map(it => it.id).join(','),
                cnt : data.map(it => it.cnt).join(','),
                date : $('#date').val(),
                time : $('#time').val(),
                name : $('#name').val(),
                phone : $('#phone').val(),
                type : $('#card').prop('checked') ? 'card' : 'money'
            }

            localStorage.removeItem('basket')

            let arr = data.map(item => {
                let ob = {
                    name:item.name,
                    cnt:item.cnt
                }
            
                return ob
            })

            updatecnt(arr)
            order(box)
        } else {
            alert('정보를 모두 입력해주세요.')
        }
    })
}

function order(box) {
    $.ajax({
        url: `/order_ok`,
        method: 'post',
        data: box,
        success : () => {
            alert('예약이 완료되었습니다')
            location.href = '/'
        }
    })
}

function updatecnt(box) {
    box.forEach(item => {
        $.ajax({
            url : `/updatecnt`,
            method: 'post',
            data: {
                name : item.name,
                cnt : item.cnt
            },
            success : () => {
    
            }
        })
    })
}