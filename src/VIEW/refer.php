    <section class="refer container">
        <h2 class="my-5">조회하기</h2>

        <div class="search mb-5">
            <select name="cond" id="cond">
                <option value="my" selected>나의 예약정보 보기</option>
                <option value="bread">상품명으로 검색하기</option>
                <option value="date">예약 날짜로 검색하기</option>
            </select>

            <input type="text" class="form-control" name="search" id="search">

            <div class="date">
                <label for="start">시작일</label>
                <input type="date" name="start" id="start">
                ~
                <label for="end">종료일</label>
                <input type="date" name="end" id="end">
            </div>

            <button class="btn btn-cus">검색하기</button>
        </div>

        <h3>조회결과</h3>
        <div class="orderList">
            <table class="table table-bordered text-center">
                <thead>
                    <tr>
                        <th>순번</th>
                        <th>상호</th>
                        <th>상품 사진</th>
                        <th>상품 명</th>
                        <th>수량</th>
                        <th>가격</th>
                        <th>이름</th>
                        <th>연락처</th>
                        <th>방문 예정 일시</th>
                        <th>예약 일시</th>
                        <th></th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>

                </tbody>
            </table>
        </div>
    </section>

    <script src="./resource/js/refer.js"></script>