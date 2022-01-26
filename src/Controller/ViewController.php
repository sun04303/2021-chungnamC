<?php
    namespace Controller;

    use App\DB;

    class ViewController {
        static function main() {
            $data = DB::fetchAll("SELECT * FROM ordercnt ORDER BY cnt DESC LIMIT 4");

            view_main($data);
        }

        static function basket() {
            view('basket');
        }

        static function register() {
            view('register');
        }

        static function storelist() {
            view('storelist');
        }

        static function view_view() {
            view('view');
        }

        static function order() {
            if(!isset($_SESSION['user'])) {
                go('로그인 후 사용해주세요.', '/');
                return;
            }

            view('order');
        }

        static function refer() {
            if(!isset($_SESSION['user'])) {
                go('로그인 후 사용해주세요.', '/');
                return;
            }

            view('refer');
        }
    }