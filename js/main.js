// Lenis
const lenis = new Lenis({
    wrapper: document.querySelector('.scroll-container'),
    lerp: 0.1,
    duration: 1.2,
    smoothTouch: true
});
lenis.on('scroll', e => {
    console.log(e);
});
function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
// Animate on Scroll
const animatedElements = document.querySelectorAll('.animate-on-scroll');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};
const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
        } else {
            entry.target.classList.remove('is-visible');
        }
    });
});
animatedElements.forEach(el => observer.observe(el));

// Tab
function initTabs(containerSelector) {
    $(containerSelector).each(function () {
        const $container = $(this);
        $container.find('.tabBtn').on('click', function () {
            const target = $(this).data("target");
            $container.find('.tabBtn').removeClass("active");
            $container.find('.tabBlock').removeClass("active");
            $(this).addClass("active");
            $container.find("#" + target).addClass("active");
        });
    });
}
initTabs('.tabContainer');
// Header Fixed
$(window).on('scroll', function () {
    $(".header").toggleClass("fixed", $(this).scrollTop() > 50);
});

// Header Burgir
$(".header__burgir").on('click', function () {
    $(this).toggleClass("active");
    $(".header").toggleClass("active");
    $("body").toggleClass("hide");
});

$(".header__navbar li a").on('click', function () {
    $(".header__burgir, .header").removeClass("active");
    $("body").removeClass("hide");
});

// Accordeon
$(".asked__btn").on('click', function () {
    $(this).toggleClass("active");
});

$(".help__open").click(function() {
    $(this).toggleClass("open");
});

const toggle = document.getElementById("toggleSwitch");
const status = document.getElementById("status");
const body = document.body;
toggle.addEventListener("change", function () {
    if (this.checked) {
    body.classList.add("dark-mode");
    status.textContent = "Ночной режим";
    } else {
    body.classList.remove("dark-mode");
    status.textContent = "Светлый режим";
    }
});

// Modal
// $(".open-modal").on('click', function () {
//     $(".modal").addClass("active");
//     setTimeout(() => $(".modal").addClass("opacity"), 100);
//     $("body").addClass("hide");
// });

// $(".modal__close").on('click', function () {
//     $(".modal").removeClass("opacity");
//     setTimeout(() => $(".modal").removeClass("active"), 300);
//     $("body").removeClass("hide");
// });

// Header Link Smooth Scrolll Down
$('.header__navbar li a, .header__logo').on('click', function (e) {
    e.preventDefault();
    const target = $(this).attr('href');
    if (target && $(target).length) {
        $('html, body').animate({
            scrollTop: $(target).offset().top
        }, 800);
    }
});

// Checkbox Product
$(".services__block, .addmore__block").on('click', function () {
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
        const value = parseInt(input.value);
        if (value > 0) input.value = value - 1;
    });
});

// Slick Slider
$('.befaft__slider').slick({
    infinite: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 800,
    dots: false,
    arrows: true,
    draggable: false,
    swipe: false
});

$('.clean__slider').slick({
    infinite: false,
    speed: 600,
    slidesToShow: 3,
    slidesToScroll: 1,
    dots: false,
    arrows: false,
    responsive: [
        {
            breakpoint: 1025,
            settings: { slidesToShow: 2 }
        },
        {
            breakpoint: 992,
            settings: { slidesToShow: 1 }
        }
    ]
});

$('.addmore__slider').slick({
    infinite: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    dots: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 1025,
            settings: { slidesToShow: 3 }
        },
        {
            breakpoint: 768,
            settings: { slidesToShow: 1 }
        }
    ]
});

// After Before
$(document).ready(function () {
    $(".beforeafter").twentytwenty({
        default_offset_pct: 0.5,
        orientation: 'horizontal',
        before_label: 'before',
        after_label: 'after',
        no_overlay: false,
        move_slider_on_hover: false,
        move_with_handle_only: true,
        click_to_move: false
    });
});