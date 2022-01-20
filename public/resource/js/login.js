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