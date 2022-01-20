    <section class="register">
        <div class="container">
            <h2 class="my-5">회원가입</h2>
            <form class="user_info">
                <div class="mb-3">
                    <label for="id" class="label-control">아이디(*) <span class="warning"></span></label>
                    <input type="text" name="id" id="id" class="form-control" placeholder="아이디를 입력해주세요. (영어또는 숫자만 가능. 20자)" maxlength="20" autocomplete="off" required>
                    <button class="bnt btn-cus mt-2 dup">중복 확인</button>
                </div>
                <div class="mb-3">
                    <label for="pass">비밀번호(*) <span class="warning"></span></label>
                    <input type="password" name="pass" class="form-control" id="pass" placeholder="비밀번호를 입력해주세요. (영문, 숫자, 특수문자만 가능 최소 하나의 숫자또는 특수문자가 들어가야 함. 연속해서 3개 이상의 문자가 올 수 없음)" autocomplete="off" required>
                </div>
                <div class="mb-3">
                    <label for="name" class="label-control">이름(*) <span class="warning"></span></label>
                    <input type="text" name="name" id="name" class="form-control" placeholder="이름을 입력해주세요. (한글또는 영어만 가능. 20자)" maxlength="20" autocomplete="off" required>
                </div>
                <div class="mb-3">
                    <label for="phone" class="label-control">전화번호(*) <span class="warning"></span></label>
                    <input type="tel" name="phone" id="phone" class="form-control" placeholder="전화번호를 입력해주세요. (-없이 숫자만 입력)" maxlength="11" autocomplete="off" required>
                </div>
                <div class="mb-3">
                    <label for="email">E-mail(*) <span class="warning"></span></label>
                    <input type="email" name="email" id="email" class="form-control" placeholder="E-mail을 입력해주세요. (100자)" maxlength="100" autocomplete="off" required>
                </div>
                <div class="mb-3">
                    <label for="num" class="label-control">인증번호(*) <span class="warning"></span></label>
                    <input type="text" name="num" id="num" class="form-control" placeholder="인증번호를 입력해주세요. (6자리)" autocomplete="off" required>
                </div>

                <button class="btn-cus mb-5 check">확인</button>
            </form>


            <div class="keyboard">
                
            </div>
        </div>
    </section>
    <script src="./resource/js/register.js"></script>