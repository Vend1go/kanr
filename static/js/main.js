$(document).ready(function () {
  svg4everybody({});

  var switchImages = function () {
    $(document).on('click', '.project-btn__all', function () {
      var projectAll = $('.project-all');
      projectAll.addClass('active');
      projectAll.siblings().removeClass('active');
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    });
    $(document).on('click', '.project-btn__build', function () {
      var projectBuild = $('.project-build');
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
      projectBuild.addClass('active');
      projectBuild.siblings().removeClass('active');
    });
    $(document).on('click', '.project-btn__design', function () {
      var projectDesign = $('.project-design');
      projectDesign.addClass('active');
      projectDesign.siblings().removeClass('active');
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    });
    $(document).on('click', '.project-btn__isolation', function () {
      var projectIsolation = $('.project-isolation');
      projectIsolation.addClass('active');
      projectIsolation.siblings().removeClass('active');
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    });
    $(document).on('click', '.project-btn__plumb', function () {
      var projectPlumb = $('.project-plumb');
      projectPlumb.addClass('active');
      projectPlumb.siblings().removeClass('active');
      $(this).siblings().removeClass('active');
      $(this).addClass('active');
    });
  };

  var preloader = function () {
    $(window).on('load', function () {
      var $preloader = $('.preloader'),
        $loader = $preloader.find('.banter-loader__box');
      $loader.delay(100).fadeOut('slow');
      $preloader.delay(450).fadeOut('slow');
    });
  }

  var sidebar = function () {
    $(document).on('click', '.header-main__sandwich', function () {
      $('.sidebar').addClass('open');
      $('html').addClass('fixed');
    });
    $(document).on('click', '.sidebar-top__close', function () {
      $('.sidebar').removeClass('open');
      $('html').removeClass('fixed');
    });
  };

  var toTop = function () {
    if ($(window).width() > 767) {
      $(window).scroll(function () {
        if ($(this).scrollTop() != 0) {
          $('.toTop').fadeIn();
        } else {
          $('.toTop').fadeOut();
        }
      });
      $('.toTop').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
      });
    }
  }

  var slider = function () {
    if ($(window).width() < 768) {
      $('.services-main__slides').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        prevArrow: '.services-nav__btn--prev',
        nextArrow: '.services-nav__btn--next',
        adaptiveHeight: true,
        infinite: false,
        dots: true,
      })
    };
  };

  switchImages();
  preloader();
  sidebar();
  toTop();
  slider();
});