// Header Fixed
$(window).scroll(function(){
    if ( $(this).scrollTop() > 50) {
        $(".header").addClass("fixed");
    } else {
        $(".header").removeClass("fixed");
    }
});
// Header Burgir
$(".header__burgir").click(function() {
    $(this).toggleClass("active");
    $(".header").toggleClass("active");
    $("body").toggleClass("hide");
});
$(".header__navbar li a").click(function() {
    $(".header__burgir").removeClass("active");
    $(".header").removeClass("active");
    $("body").removeClass("hide");
});
// Accordeon
$(".asked__btn").click(function() {
    $(this).toggleClass("active");
});
// Modal
// $(".open-modal").click(function() {
//     $(".modal").addClass("active");
//     setTimeout(function() {
//         $(".modal").addClass("opacity");
//     },100);
//     $("body").addClass("hide");
// });
// $(".modal__close").click(function() {
//     $(".modal").removeClass("opacity");
//     setTimeout(function() {
//         $(".modal").removeClass("active");
//     },300);
//     $("body").removeClass("hide");
// });

// Header Link Smooth Scrolll Down
$('.header__navbar li a, .header__logo').click(function(e){
    e.preventDefault(); // предотвращает переход по ссылке
    var target = $(this).attr('href');

    if (target && $(target).length) {
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    }
});
// Checkbox Product
$(".services__block").click(function () {
    $(this).toggleClass("active");
});
$(".addmore__block").click(function () {
    $(this).toggleClass("active");
});
// Plus Minus
document.querySelectorAll('.counter').forEach(counter => {
    const input = counter.querySelector('input');
    const plus = counter.querySelector('.plus');
    const minus = counter.querySelector('.minus');

    plus.addEventListener('click', () => {
        input.value = parseInt(input.value) + 1;
    });

    minus.addEventListener('click', () => {
        if (parseInt(input.value) > 0) {
        input.value = parseInt(input.value) - 1;
        }
    });
});

// Lenis
const lenis = new Lenis({
    wrapper: document.querySelector('.scroll-container'),
    lerp: 0.1,      // Коэффициент плавности (меньше = плавнее)
    duration: 1.2,  // Длительность анимации (альтернатива lerp)
    smoothTouch: true // Плавный скролл на тач-устройствах
});

lenis.on('scroll', (e) => {
  console.log(e) // Вывод информации о скролле в консоль
})

function raf(time) {
    lenis.raf(time); // Обновляем состояние Lenis
    requestAnimationFrame(raf); // Запрашиваем следующий кадр
}

requestAnimationFrame(raf);

const animatedElements = document.querySelectorAll('.animate-on-scroll');

const observerOptions = {
    root: null,
    rootMargin: '0px', // Отступы вокруг viewport (или root)
    threshold: 0.1     // % видимости элемента для срабатывания
};

const observerCallback = (entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        }
        else {
          entry.target.classList.remove('is-visible');
        }
    });
};

const observer = new IntersectionObserver(observerCallback, observerOptions);

animatedElements.forEach(element => {
    observer.observe(element);
});
// Slick Slider
$('.befaft__slider').slick({
    infinite: false,
    slidesToShow: 1,
    speed: 800,
    slidesToScroll: 1,
    dots: false,
    arrows: true,
    draggable: false,
    swipe: false
});
$('.clean__slider').slick({
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToShow: 3,
    dots: false,
    arrows: false,
    responsive: [
        {
        breakpoint: 1025,
        settings: {
            slidesToShow: 2,
        },
        breakpoint: 992,
        settings: {
            slidesToShow: 1,
        },
        }
    ]
});
$('.addmore__slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    dots: true,
    responsive: [
        {
        breakpoint: 1025,
        settings: {
            slidesToShow: 3,
        },
        breakpoint: 1025,
        settings: {
            slidesToShow: 1,
        },
        }
    ]
});
// Tab
function initTabs(containerSelector) {
    $(containerSelector).each(function () {
        const $container = $(this);

        $container.find('.tabBtn').on("click", function () {
            const target = $(this).data("target");

            $container.find('.tabBtn').removeClass("active");
            $container.find('.tabBlock').removeClass("active");

            $(this).addClass("active");
            $container.find("#" + target).addClass("active");
        });
    });
}
initTabs('.tabContainer');
// After Before
$(document).ready(function() {
    $(".beforeafter").twentytwenty({
        default_offset_pct: 0.5, // сколько показывать 'изображение до' в процентах (максимально 1) сразу после загрузки страницы
        orientation: 'horizontal', // ориентация слайдера ('horizontal' или 'vertical')
        before_label: 'before', // подпись 'до'
        after_label: 'after', // подпись 'после'
        no_overlay: false, // не показывать затемнение с надписями 'до' и 'после'
        move_slider_on_hover: false, // двигать "бегунок" слайдера вместе с курсором мыши
        move_with_handle_only: true, // двигать слайдер только за его "бегунок"
        click_to_move: false // разрешить перемещение "бегунка" слайдера по клику на изображении
    });
});