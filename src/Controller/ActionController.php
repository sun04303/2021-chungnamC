<?php
    namespace Controller;

    use App\DB;
use stdClass;

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

        static function member_login() {
            $login_id = $_POST['login_id'];
            $login_pass = $_POST['login_pass'];
            $code = $_POST['code'];

            $user = DB::fetch("SELECT * FROM users WHERE user_id = ? AND pass = ? AND code = ?", [$login_id, $login_pass, $code]);

            $user->status = 'yes';

            if($user) {
                $_SESSION['user'] = $user;
                go('로그인 되었습니다.', '/');
            } else {
                back('일치하는 회원정보가 없습니다.');
            }
        }

        static function nomember_login() {
            $login_id = $_POST['login_name'];
            $login_tel = $_POST['login_tel'];

            $user = new stdClass();

            $user->user_name = $login_id;
            $user->phone_num = $login_tel;
            $user->status = 'no';

            if($user) {
                $_SESSION['user'] = $user;
                go('로그인 되었습니다.', '/');
            }
        }

        static function logout() {
            unset($_SESSION['user']);
            go('로그아웃 되었습니다.', '/');
        }

        static function order_ok() {
            $product = $_POST['product'];
            $cnt = $_POST['cnt'];
            $date = $_POST['date'];
            $time = $_POST['time'];
            $name = $_POST['name'];
            $phone = $_POST['phone'];
            $type = $_POST['type'];

            DB::query("INSERT INTO ordertable (name, phone, product, cnt, orderdate, ordertime, type) VALUES (?, ?, ?, ?, ?, ?, ?)", [$name, $phone, $product, $cnt, $date, $time, $type]);
        }

        static function updatecnt() {
            $name = $_POST['name'];
            $cnt = (int)$_POST['cnt'];

            DB::query("UPDATE ordercnt SET cnt=cnt+? WHERE name = ?", [$cnt, $name]);
        }

        static function search() {
            $val = $_POST['val'];
            $type = $_POST['type'];
            $start = $_POST['start'];
            $end = $_POST['end'];
            $list = [];

            switch ($type) {
                case 'my':
                    # code...
                    break;

                case 'bread':
                    # code...
                    break;
                
                case 'date':
                    $list = DB::fetchAll("SELECT * FROM ordertable WHERE orderdate BETWEEN ? AND ?", [$start, $end]);
                    break;
            }

            echo json_encode($list);
        }
    }