$('.yes').on('click', e => {
    if($('#login_id').val() && $('#login_pass').val() && $('#code').val()) {

    } else {
        e.preventDefault()
        alert('입력사항을 모두 입력해주세요.')
    }
})

$('.no').on('click', e => {
    if($('#login_name').val() && $('#login_tel').val()) {
        
    } else {
        e.preventDefault()
        alert('입력사항을 모두 입력해주세요.')
    }
})

$('#code').on('keydown', e => {
    e.preventDefault()
})

$('#code').on('focus', e => {
    makeKeyboard()
})

window.addEventListener('click', e => {
    if(!e.target.classList.contains('login_keyboard') && e.target != document.querySelector('#code') && !e.target.classList.contains('btn')) {
        document.querySelector('.login_keyboard').style.display = 'none'
    }
})

document.querySelector('.login_keyboard').addEventListener('click', e => {
    e.preventDefault()
    console.log(123)
    if($(e.target).prop('tagName') == 'DIV') return
    let val = $('#code').val()
    
    if(e.target.classList.contains('del')) {
        $('#code').val(val.substr(0, val.length-1))
    } else if(e.target.classList.contains('reset')) {
        makeKeyboard()
    } else if(val.length < 6) {
        $('#code').val($('#code').val()+e.target.innerHTML)
    }
})

function makeKeyboard() {
    let html = ''
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    $('.login_keyboard').css({
        display:'grid'
    })

    while(arr.length > 1) {
        let idx = Math.floor(Math.random() * arr.length)
        html+=`<button class="btn btn-primary">${arr[idx]}</button>`
        arr.splice(idx, 1)
    }
    html+=` <button class="btn btn-secondary del">&lt;-</button>
            <button class="btn btn-primary">${arr[0]}</button>
            <button class="btn btn-secondary reset">reset</button>`
    $('.login_keyboard').html(html)
}
