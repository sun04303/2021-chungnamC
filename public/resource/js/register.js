const id_pattern = /[a-zA-Z0-9]/gi
const phone_pattern = /[0-9]{11}/g
const phone_pattern1 = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/
const name_pattern = /[가-힣a-zA-Z]/gi
const email_pattern = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
const code_pattern = /[0-9]{6}/g

let id_chk = false
let dup_chk = false
let pass_chk = false
let name_chk = false
let phone_chk = false
let email_chk = false
let code_chk = false

function pass_pattern(str, max) {
    if(!str.trim()) return

    const charStr = [...str].map(x => x.charCodeAt())
    let preStr = chr = 0

    charStr.forEach(item => {
        if(Math.abs(preStr - item) == 1) chr++

        preStr = item
    })

    return chr > max
}


$('#num').on('keydown', e => {
    e.preventDefault()
})

$('#num').on('focus', e => {
    makeKeyboard()
})

window.addEventListener('click', e => {
    if(!e.target.classList.contains('keyboard') && e.target != document.querySelector('#num') && !e.target.classList.contains('btn')) {
        let str = $('#num').val()

        document.querySelector('.keyboard').style.display = 'none'

        if(code_pattern.test(str)) {
            $('label[for="num"] .warning').html('')
            code_chk = true
        } else if(str) {
            $('label[for="num"] .warning').html('입력하신 정보를 확인해주세요.')
            code_chk = false
        }

        code_pattern.test(str)
    }
})

document.querySelector('.keyboard').addEventListener('click', e => {
    e.preventDefault()
    if($(e.target).prop('tagName') == 'DIV') return
    let val = $('#num').val()
    
    if(e.target.classList.contains('del')) {
        $('#num').val(val.substr(0, val.length-1))
    } else if(e.target.classList.contains('reset')) {
        makeKeyboard()
    } else if(val.length < 6) {
        $('#num').val($('#num').val()+e.target.innerHTML)
    }
})

function makeKeyboard() {
    let html = ''
    let arr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    $('.keyboard').css({
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
    $('.keyboard').html(html)
}


$('.check').on('click', e => {
    setTimeout(()=>{})
    if(id_chk && dup_chk && pass_chk && name_chk && phone_chk && email_chk && code_chk) {
        e.preventDefault()
        
        $.ajax({
            url:`/register_ok`,
            method:'post',
            data : {
                user_id : $('#id').val(),
                pass : $('#pass').val(),
                user_name : $('#name').val(),
                phone_num : $('#phone').val(),
                email : $('#email').val(),
                code : $('#num').val()
            },
            success : res => {
                alert(res)

                id_chk = dup_chk = pass_chk = name_chk = phone_chk = email_chk = code_chk = false
                $('#id').val('')
                $('#pass').val('')
                $('#name').val('')
                $('#phone').val('')
                $('#email').val('')
                $('#num').val('')
                
                $('#loginModal').modal('show')
            }
        })
    } else if(!$('#id').val() || !$('#pass').val() || !$('#name').val() || !$('#phone').val() || !$('#email').val() || !$('#num').val()) {
        e.preventDefault()
        alert('모든 정보를 입력해주세요.')
        console.log(id_chk, dup_chk, pass_chk, name_chk, phone_chk, email_chk, code_chk)
        console.log($('#id').val(), $('#pass').val(), $('#name').val(), $('#phone').val(), $('#email').val(), $('#num').val())
    } else if(!dup_chk) {
        e.preventDefault()
        alert('아이디 증복 확인을 해주세요.')
    } else {
        e.preventDefault()
    }
})

$('#id').on('blur', e => {
    dup_chk = false
    let str = e.target.value
    
    if(id_pattern.test(str)) {
        $('label[for="id"] .warning').html('')
        id_chk = true
    } else {
        $('label[for="id"] .warning').html('입력하신 정보를 확인해주세요.')
        id_chk = false
    }
})

$('.dup').on('click', e => {
    e.preventDefault()
    if(!id_chk) return

    $.ajax({
        url:`/id_chk`,
        method:'post',
        data : {
            id:$('#id').val()
        },
        dataType:'json',
        success : res => {
            if(!res) {
                alert("사용가능한 아이디입니다.")
                dup_chk = true
            }
            else {
                alert("이미 사용중인 아이디입니다.")
                dup_chk = false
            }
        }
    })
})

$('#pass').on('blur', e => {
    let str = e.target.value

    if(!pass_pattern(str, 1)) {
        $('label[for="pass"] .warning').html('')
        pass_chk = true
    } else {
        $('label[for="pass"] .warning').html('입력하신 정보를 확인해주세요.')
        pass_chk = false
    }
})

$('#name').on('blur', e => {
    let str = e.target.value

    if(name_pattern.test(str)) {
        $('label[for="name"] .warning').html('')
        name_chk = true
    } else {
        $('label[for="name"] .warning').html('입력하신 정보를 확인해주세요.')
        name_chk = false
    }
})

$('#phone').on('blur', e => {
    let str = e.target.value

    if(phone_pattern.test(str)) {
        e.target.value = `${str.substr(0, 3)}-${str.substr(3, 4)}-${str.substr(7)}`
        $('label[for="phone"] .warning').html('')
        phone_chk = true
    } else if(!phone_pattern1.test(str)){
        $('label[for="phone"] .warning').html('입력하신 정보를 확인해주세요.')
        phone_chk = false
    }
})

$('#email').on('blur', e => {
    let str = e.target.value

    if(email_pattern.test(str)) {
        $('label[for="email"] .warning').html('')
        email_chk = true
    } else {
        $('label[for="email"] .warning').html('입력하신 정보를 확인해주세요.')
        email_chk = false
    }
})