<!DOCTYPE html>
<html lang="ko">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <script src="./resource/js/jquery-3.4.1.min.js"></script>
    <script src="./resource/bootstrap-5.0.2-dist/js/bootstrap.js"></script>
    <link rel="stylesheet" href="./resource/fontawesome-free-5.15.3-web/css/all.css">
    <link rel="stylesheet" href="./resource/bootstrap-5.0.2-dist/css/bootstrap.css">
    <link rel="stylesheet" href="./resource/css/style.css">
</head>
<body>
    <header>
        <div class="logo">
            <a href='/'><img src="./resource/img/logo.png" alt="logo" title="logo"></a>
        </div>

        <nav>
            <ul style="margin: 0; padding: 0;">
                <li><a href="/basket">장바구니</a></li>
                <li><a href="#">조회하기</a></li>
                <li><a href="#" data-bs-toggle="modal" data-bs-target="#loginModal">로그인</a></li>
                <li><a href="/register">회원가입</a></li>
            </ul>
        </nav>

        <div class="modal fade login_modal" tabindex="-1" id="loginModal" aria-labelledby="loginModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">로그인</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <input type="radio" name="regi_sta" id="regi_member" hidden checked>
                        <input type="radio" name="regi_sta" id="regi_nomember" hidden>

                        <label class="login-label" for="regi_member">회원 로그인</label><label class="login-label" for="regi_nomember">비회원 로그인</label>

                        <div class="form_box mt-4">
                            <form action="/member_login" class="regi_member">
                                <div class="mb-3">
                                    <label for="login_id" class="form-label">아이디</label>
                                    <input type="text" name="login_id" id="login_id" class="form-control" placeholder="아이디를 입력해주세요.">
                                </div>
                                <div class="mb-3">
                                    <label for="login_pass" class="form-label">비밀번호</label>
                                    <input type="password" name="login_pass" id="login_pass" class="form-control" placeholder="비밀번호를 입력해주세요.">
                                </div>
                                <div class="mb-3">
                                    <label for="code" class="form-label">인증번호</label>
                                    <input type="text" name="code" id="code" class="form-control" placeholder="인증번호를 입력해주세요.">
                                </div>
                                <button class="btn btn-cus yes" type="submit">로그인</button>
                            </form>
    
                            <form action="/nomember_login" class="regi_nomember">
                                <div class="mb-3">
                                    <label for="login_name" class="form-label">예약자 이름</label>
                                    <input type="text" name="login_name" id="login_name" class="form-control" placeholder="예약자 이름을 입력해주세요.">
                                </div>
                                <div class="mb-3">
                                    <label for="login_tel" class="form-label">예약자 전화번호</label>
                                    <input type="tel" name="login_tel" id="login_tel" class="form-control" placeholder="예약자 전화번호를 입력해주세요.">
                                </div>
                                <button class="btn btn-cus no" type="submit">로그인</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>