jQuery(document).ready(function () {
    jQuery('.slider-company').slick({
        infinite: true,
        slidesToShow: 5,
        slidesToScroll: 5,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            },
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                }
            }
        ]
    });
    jQuery('.slider-customer').slick({
        infinite: true,
        slidesToShow: 2,
        slidesToScroll: 2,
        dots: true,
        responsive: [
            {
                breakpoint: 767,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });

    /*jQuery('.content-product-page .list-product').slick('unslick');*/

    if($(document).width()<=991){
        $('.logo-left').prependTo('.move-logo-ipad');

        $('.button-menu-mobile .icon-menu').click(function () {
            $('.menu').addClass('active');
            $('body').append('<div class="bg-popup"><span class="close-menu">&times;</span></div>');
            $('body').css('overflow','hidden');
        });

        $(document).on('click','.bg-popup',function () {
            $('.bg-popup').remove();
            $('.menu').removeClass('active');
            $('body').css('overflow','unset');
        });
        $('.parrent-menu > a, .parrent-submenu > a').click(function (e) {
            e.preventDefault();
           $(this).next().toggle();
        });
    }
    if($(document).width()<=767) {
    }

    /*new code*/
    $('.slider-banner').slick();

    $(document.body).on('click', function (event) {
        if (!$(event.target).closest('.popup-search-menu, .search-menu a').length) {
            $('.popup-search-menu').removeClass('active');
            console.log('dasd')
        }
    });

    $('.search-menu a').click(function (e) {
        e.preventDefault();
        $(this).next().toggleClass('active');
    });

    $('.date-from input').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
    });
    $('.date-to input').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        locale: {
            format: 'DD/MM/YYYY'
        }
    });
    $('.date-update-to input').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        locale: {
            format: 'DD/MM/YYYY'
        }
    });
    $('.date-update-from input').daterangepicker({
        singleDatePicker: true,
        showDropdowns: true,
        locale: {
            format: 'DD/MM/YYYY'
        }
    });
});