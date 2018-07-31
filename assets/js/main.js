$(document).ready(function() {
    // Makes the sphlashscreen disappear after 4 seconds
    $(".splashscreen").delay(3000).effect("explode", "slow");

    // Random Splashscreen icon
    var icon = ["1.svg", "2.svg", "3.svg", "4.svg", "5.svg", "6.svg", "7.svg", "8.svg", "9.svg", "10.svg", "11.svg", "12.svg", "13.svg", "14.svg", "15.svg", "16.svg", "17.svg", "18.svg", "19.svg", "20.svg", "21.svg", "22.svg", "23.svg", "24.svg", "25.svg", "26.svg", "26.svg", "27.svg"];
    var random_icon = icon[Math.floor(Math.random() * icon.length)];
    $(".splashscreen__icon").css("background-image", "url('assets/img/icons/splashscreen/"+random_icon+"')");

    // Makes splashscreen icon pulsate
    for (var i = 0; i <= 6; i++) {
        $(".splashscreen__icon").effect("bounce", "slow");
    }

    // Random splashscreen hello message
    var hello = ["Hallo", "Mirë dita", "ታዲያስ", "مَرْحَبًا", "নমস্কার", "Zdravo", "Здрасти", "Bok", "Ahoj", "Hej", "Hello", "Saluton", "Tere", "Bula", "Terve", "Bonjour", "Γεια σου", "Hai", "Dia dhuit", "Ciao", "こんにちは", "안녕", "Salve", "Sveiki", "你好", "Kia ora", "Oi", "Haló", "Hola", "Grüss Gott", "Grüezi", "สวัสดีค่ะ", "Merhaba"];
    var hello_random = hello[Math.floor(Math.random() * hello.length)];
    $(".splashscreen__text").text(hello_random);

    // Service worker functionality
    if ('serviceWorker' in navigator) {
        navigator.serviceWorker.register('service-worker.js').then(function (registration) {
            console.log('Service worker registered successfully', registration);
        }).catch(function (err) {
            console.log('Service worker registration failed: ', err);
        });
    };

    // Page transition
    if (!$("body").hasClass("homepage")) {
        $("body").css("display", "none");
        $("body").fadeIn(1000);
        $("a.transition").click(function (event) {
            event.preventDefault();
            linkLocation = this.href;
            $("body").fadeOut(1000, redirectPage);
        });

        function redirectPage() {
            window.location = linkLocation;
        }
    }

    // Date
    var today = new Date();
    var day_today;
    var day = today.getDay();

    switch(day) {
        case 0:
            day_today = "Sonntag";
            break;
        case 1:
            day_today = "Montag";
            break;
        case 2:
            day_today = "Dienstag";
            break;
        case 3:
            day_today = "Mittwoch";
            break;
        case 4:
            day_today = "Donnerstag";
            break;
        case 5:
            day_today = "Freitag";
            break;
        case 6:
            day_today = "Samstag";
            break;
    }
    // create date string
    var date_today = day_today + ", " + today.getDate() + "." +(today.getMonth() + 1) + "." + today.getFullYear();
    // add date string
    $(".date").text(date_today);

    // Time
    var clock = setInterval(function(){
        var date = new Date();
        var current_hour = date.getHours();
        current_hour = current_hour < 10 ? "0" + current_hour : current_hour;
        var current_minute = date.getMinutes();
        current_minute = current_minute < 10 ? "0" + current_minute : current_minute;
        var current_time = current_hour + ":" + current_minute + " Uhr";
        $(".time").html(current_time);
    }, 1000);

    // Scroll-to-top button
    window.onscroll = function () { scrollFunction() };

    function scrollFunction() {
        if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
            document.getElementById("scroll_top").style.display = "block";
        } else {
            document.getElementById("scroll_top").style.display = "none";
        }
    }

    // jQuery Accordion Function
    $(function () {
        $("#accordion").accordion({
            heightStyle: "content",
            collapsible: true,
            active: false
        });
    });
});