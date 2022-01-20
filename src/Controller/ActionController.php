<?php
    namespace Controller;

    use App\DB;

    class ActionController {
        static function id_chk() {
            $id = $_POST['id'];

            $res = DB::fetch("SELECT * FROM users WHERE user_id = ?", [$id]);
            echo json_encode($res);
        }

        static function register_ok() {
            $user_id = $_POST['user_id'];
            $pass = $_POST['pass'];
            $user_name = $_POST['user_name'];
            $phone_num = $_POST['phone_num'];
            $email = $_POST['email'];
            $code = $_POST['code'];

            DB::query("INSERT INTO users (user_id, pass, user_name, phone_num, email, code) VALUES (?, ?, ?, ?, ?, ?)", [$user_id, $pass, $user_name, $phone_num, $email, $code]);

            echo '회원가입이 완료되었습니다.';
        }
    }