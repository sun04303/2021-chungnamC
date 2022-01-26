window.addEventListener('load', e => {
    let shop = []
    fetch('./resource/js/menus.json')
    .then(res => res.json())
    .then(data => {
        shop = data
        console.log(shop)
    })

    $('.search button').on('click', e => {
        $.ajax({
            url:`/search`,
            method:'post',
            data: {
                val:$('#search').val(),
                type:$('#cond').val(),
                start:$('#start').val(),
                end:$('#end').val()
            },
            dataType:'json',
            success : async res => {
                console.log(res)
    
                await res.forEach((item, idx) => {
                    let pro =  item.product.split(',')
                    let cnt = item.cnt.split(',')
    
                    pro.forEach((item1, idx1) => {
                        let tr = `
                                <tr>
                                    <td class="on">${idx+1}</td>
                                    <td class="sh">${shop[item1].name}</td>
                                    <td><img src="./resource/img/menus/${shop[item1].image}" alt="bread-iamge"></td>
                                    <td>${shop[item1].menuname}</td>
                                    <td>${cnt[idx1]}</td>
                                    <td>${(cnt[idx1] * shop[item1].price).toLocaleString()}\\</td>
                                    <td class="nm">${item.name}</td>
                                    <td class="ph">${item.phone}</td>
                                    <td class="dt">${item.orderdate} ${item.ordertime}</td>
                                    <td class="ti">${item.at_date}</td>
                                    <td class="bt"><button class="btn btn-danger"><i class="fas fa-times"></i></button></td>
                                    <td></td>
                                </tr>`

                        $('tbody').append(tr)
                    })
                });

                $('.on').each(function() {
                    let rows = $(`.on:contains('` + $(this).text() + "')");
                    let idx1 = rows.siblings('.ph')
                    let idx2 = rows.siblings('.nm')
                    let idx3 = rows.siblings('.dt')
                    let idx4 = rows.siblings('.ti')
                    let idx5 = rows.siblings('.bt')

                    if(rows.length > 1) {
                        rows.eq(0).attr('rowspan', rows.length)
                        idx1.eq(0).attr('rowspan', rows.length)
                        idx2.eq(0).attr('rowspan', rows.length)
                        idx3.eq(0).attr('rowspan', rows.length)
                        idx4.eq(0).attr('rowspan', rows.length)
                        idx5.eq(0).attr('rowspan', rows.length)

                        rows.not(":eq(0)").remove()
                        idx1.not(":eq(0)").remove()
                        idx2.not(":eq(0)").remove()
                        idx3.not(":eq(0)").remove()
                        idx4.not(":eq(0)").remove()
                        idx5.not(":eq(0)").remove()
                    }
                })
            }
        })
    })
    
    $('select').on('change', e => {
        let val = e.target.value
    
        if(val == 'date') {
            $('input[type="text"]').css({
                display:'none'
            })
    
            $('.date').css({
                display:'block'
            })
        } else {
            $('input[type="text"]').css({
                display:'block'
            })
    
            $('.date').css({
                display:'none'
            })
        }
    })
})
