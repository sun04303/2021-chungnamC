<?php
    function view_main($data) {
        require VIEW."/main_header.php";
        require VIEW."/main.php";
        require VIEW."/footer.php";
        exit;
    }

    function view($page) {
        require VIEW."/header.php";
        require VIEW."/$page.php";
        require VIEW."/footer.php";
        exit;
    }

    function go($msg, $url) {
        echo "<script>";
        echo "alert('$msg');";
        echo "location.href = '{$url}';";
        echo "</script>";
        exit;
    }

    function back($msg) {
        echo "<script>";
        echo "alert('$msg');";
        echo "history.back();";
        echo "</script>";
    }