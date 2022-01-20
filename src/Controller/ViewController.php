<?php
    namespace Controller;

    class ViewController {
        static function main() {
            view_main();
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
    }