<!DOCTYPE html>
<html>
    <?php
    include './head.php';
    ?>
    <body>
        <?php
        include './bill-header.php';
        ?>
        <section id="page-content" class="w3-right w3-padding-large" style="width: 84%;margin-top: 70px;"> 
        </section>
        <script src="./js/side-nav-active-link.js" type="text/javascript"></script>
        <script src="./js/cookie-functions.js" type="text/javascript"></script>
        <script src="./js/dynamic-props.js" type="text/javascript"></script>
        <script type="text/javascript">
            checkCookie();
            activeLink(getCookie("activeLink"));
            loadDoc(getCookie("url"), loadPage);

            function callFun(n, url)
            {
                setCookie("activeLink", n);
                setCookie("url",url);
                activeLink(getCookie("activeLink"));
                loadDoc(url, loadPage);
            }
        </script>
    </body>
</html>
