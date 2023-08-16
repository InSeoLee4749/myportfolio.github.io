$(document).ready(function () {
    $(".nav-link").click(function () {
        $(".nav-link").removeClass("act");
        $(this).addClass("act");
    });

    $(window).scroll(function () {
        //스크롤을 하면
        if ($(window).scrollTop() > 80) {
            //스크롤의 위치가 80보다 커지면
            $("body").addClass("scroll"); //body에 scroll클래스 삽입하라
        } else {
            $("body").removeClass("scroll");
        }
    });
});

var swiper = new Swiper(".mySwiper", {
    spaceBetween: 30,
    centeredSlides: true,
    // autoplay: {
    //     delay: 2500,
    //     disableOnInteraction: false,
    // },
    pagination: {
            el: ".swiper-pagination",
            clickable: true,
            },
            navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
            },
});
