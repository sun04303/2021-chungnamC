    <section class="order container">
        <h2 class="my-5">예약하기</h2>
        <h4>상품목록</h4>
        <table class="table text-center">
            <thead>
                <tr>
                    <th scope="col">번호</th>
                    <th scope="col">상품 사진</th>
                    <th scope="col">상품명</th>
                    <th scope="col">수량</th>
                    <th scope="col">가격</th>
                    <th scope="col" style="width: 12.8%;">소계</th>
                </tr>
            </thead>
            <tbody>

            </tbody>
        </table>
        <div class="ect">
            <div class="total-price text-end"></div>
        </div>

        <h4 class="my-5">예약 정보</h4>
        <form action="">
            <div class="mb-3">
                <label for="date" class="label-control">방문 예정 날짜</label>
                <input type="date" name="date" id="date" class="form-control">
            </div>
            <div class="mb-3">
                <label for="time" class="label-control">방문 예정 시간</label>
                <input type="time" name="time" id="time" class="form-control">
            </div>
            <div class="mb-3">
                <label for="name" class="label-control">이름</label>
                <input type="text" name="name" id="name" value="<?= $_SESSION['user']->user_name ?>" class="form-control">
            </div>
            <div class="mb-3">
                <label for="phone" class="label-control">연락처</label>
                <input type="tel" name="phone" id="phone" value="<?= $_SESSION['user']->phone_num ?>" class="form-control">
            </div>
            <h6>결제 방법</h6>
            <div class="mb-3 how">
                <input type="radio" name="type" id="card" class="form-check-input" value="card" hidden checked>
                <input type="radio" name="type" id="money" class="form-check-input" value="money" hidden>
                <label for="card" class="form-check-label" checked>
                    <i class="fas fa-credit-card"></i>
                    <span>신용카드</span>
                </label>
                <label for="money" class="form-check-label">
                    <i class="fas fa-money-bill"></i>
                    <span>현금</span>
                </label>
            </div>

            <button class="btn btn-cus order-btn mb-5">예약하기</button>
        </form>
    </section>
    <script src="./resource/js/order.js"></script>