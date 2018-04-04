//<?php
//        if (null !== filter_input(INPUT_COOKIE, "activeLink")) {
//            $page_to_load = filter_input(INPUT_COOKIE, "activeLink");
//        } else {
//            $page_to_load = 1;
//        }
//        switch ($page_to_load) {
//            case 1:
//                include './pages/dashboard.php';
//                break;
//            case 2:
//                include './pages/clients.php';
//                break;
//            case 3:
//                include './pages/vendors.php';
//                break;
//            case 4:
//                include './pages/items.php';
//                break;
//            case 5:
//                include './pages/invoices.php';
//                break;
//            case 6:
//                include './pages/quotes.php';
//                break;
//            case 7:
//                include './pages/delivery-notes.php';
//                break;
//            case 8:
//                include './pages/credit-notes.php';
//                break;
//            case 9:
//                include './pages/purchase-orders.php';
//                break;
//            case 10:
//                include './pages/bills.php';
//                break;
//            case 11:
//                include './pages/preferences.php';
//                break;
//            default:
//                include './pages/dashboard.php';
//                break;
//        }
//        ?>