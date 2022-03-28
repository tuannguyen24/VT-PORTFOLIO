/////////////////////////// SCROLL ///////////////////////////////
$(document).ready(function () {
  let header = $('.header'),
    btnMenu = $('.header__btnmenu'),
    screen = {
      mobile: 767,
      tablet: 991,
      desktop: 1199,
    },
    locoScroll;

  // DETECT DEVICE
  let md = new MobileDetect(window.navigator.userAgent);
  function mobileDetect() {
    if (md.mobile() != null || md.tablet() != null) {
      mobile = true;
      tablet = true;
    } else {
      mobile = false;
      tablet = false;
    }
  }
  mobileDetect();

  // BUTTON MENU CLICKED
  function btnMenuClicked() {
    btnMenu.on('click', function () {
      $(this).toggleClass('active');
      $('.nav').toggleClass('active');
    });
  }
  btnMenuClicked();

  function closeMenu() {
    btnMenu.removeClass('active');
    $('.nav').removeClass('active');
  }

  $(window).on('resize', function () {
    let w = $(window).width();
    if (w > 991) {
      closeMenu();
    }
  });

  //CUSTOMIZE CURSOR DRAG
  let cursor = $('.cursordrag'),
    pos = { x: $(window).width() / 2, y: $(window).height() / 2 },
    mouse = { x: pos.x, y: pos.y },
    speed = 0.2,
    xSet = gsap.quickSetter(cursor, 'x', 'px'),
    ySet = gsap.quickSetter(cursor, 'y', 'px');

  gsap.set(cursor, { xPercent: -50, yPercent: -50 });
  function customizeCursor() {
    gsap.ticker.add(() => {
      let dt = 1.0 - Math.pow(1.0 - speed, gsap.ticker.deltaRatio());
      pos.x += (mouse.x - pos.x) * dt;
      pos.y += (mouse.y - pos.y) * dt;
      xSet(pos.x);
      ySet(pos.y);
    });
    if (md.mobile() != null || md.tablet() != null) {
      gsap.to(cursor, { alpha: 0, duration: 0.3 });
    } else {
      gsap.to(cursor, { alpha: 1, duration: 0.3 });
    }
  }
  window.addEventListener('mousemove', (e) => {
    mouse.x = e.x;
    mouse.y = e.y;
  });
  customizeCursor();

  if (md.mobile() != null || md.mobile() != null) {
    cursor.hide();
  } else {
    cursor.show();
  }

  // HOVER ITEM MENU
  function hoverItemMenu() {
    let itemMenu = $('.header__menu>ul>li');
    itemMenu.on('mouseenter', function () {
      itemMenu.first().removeClass('active');
    });
    itemMenu.on('mouseleave', function () {
      itemMenu.first().addClass('active');
    });
  }
  hoverItemMenu();

  // MENU CLICKED MOBILE

  function clickItemMenuMobile() {
    let item = $('.nav .nav__top .item'),
      submenu = $('.nav__main ul');
    item.on('click', function () {
      $(this).addClass('active').siblings().removeClass('active');
      submenu.eq($(this).index()).addClass('active').siblings().removeClass('active');
    });
  }
  clickItemMenuMobile();

  // SLIDER CHARACRER MAIN
  function sliderCharacter() {
    if ($('.character__slider-inner').length) {
      let slider = $('.character__slider-inner'),
        progressBar = $('.character__slider-progress .progressbar'),
        opt = {
          cellAlign: 'center',
          pageDots: false,
          wrapAround: true,
          dragThreshold: 0,
          prevNextButtons: false,
        };
      slider.flickity(opt);

      slider.on('scroll.flickity', function (event, progress) {
        progress = Math.max(0, Math.min(1, progress));
        progressBar.width(progress * 100 + '%');
      });

      slider.on('dragMove.flickity', function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        gsap.to({}, 0, {
          onUpdate: function () {
            gsap.set(cursor, {
              x: mouse.x,
              y: mouse.y,
            });
          },
        });
      });
      slider.on('dragStart.flickity', function () {
        gsap.to(cursor, { scale: 0.76, duration: 0.2 });
      });
      slider.on('dragEnd.flickity', function () {
        gsap.to(cursor, { scale: 1, duration: 0.2 });
      });
      slider.on('mouseenter', function () {
        cursor.addClass('--show');
      });
      slider.on('mouseleave', function () {
        cursor.removeClass('--show');
      });
    }
  }
  sliderCharacter();

  // SLIDER THE HANGER
  function sliderTheHanger() {
    if ($('.thehangar__slider').length) {
      let slider = $('.thehangar__slider'),
        opt = {
          cellAlign: 'center',
          pageDots: false,
          wrapAround: false,
          dragThreshold: 0,
          freeScroll: true,
          prevNextButtons: false,
          // on: {
          //     ready: function () {
          //         slider.find('.item').each(function (index, item) {
          //             console.log(item);
          //             let img = $(this).find('img'),
          //                 wImg = img.width()
          //             $(this).css({
          //                 'width': wImg + 'px'
          //             })
          //         })
          //     }
          // }
        };
      slider.flickity(opt);

      slider.on('dragMove.flickity', function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        gsap.to({}, 0, {
          onUpdate: function () {
            gsap.set(cursor, {
              x: mouse.x,
              y: mouse.y,
            });
          },
        });
      });
      slider.on('dragStart.flickity', function () {
        gsap.to(cursor, { scale: 0.76, duration: 0.2 });
      });
      slider.on('dragEnd.flickity', function () {
        gsap.to(cursor, { scale: 1, duration: 0.2 });
      });
      slider.on('mouseenter', function () {
        cursor.addClass('--show');
      });
      slider.on('mouseleave', function () {
        cursor.removeClass('--show');
      });
    }
  }

  // SLIDER ROADMAP
  function sliderRoadmap() {
    if ($('.roadmap__slider').length) {
      let slider = $('.roadmap__slider'),
        opt = {
          cellAlign: 'center',
          pageDots: false,
          wrapAround: false,
          dragThreshold: 0,
          prevNextButtons: false,
          freeScroll: true,
          contain: true,
        };
      slider.flickity(opt);

      slider.on('dragMove.flickity', function (e) {
        mouse.x = e.clientX;
        mouse.y = e.clientY;
        gsap.to({}, 0, {
          onUpdate: function () {
            gsap.set(cursor, {
              x: mouse.x,
              y: mouse.y,
            });
          },
        });
      });
      slider.on('dragStart.flickity', function () {
        gsap.to(cursor, { scale: 0.76, duration: 0.2 });
      });
      slider.on('dragEnd.flickity', function () {
        gsap.to(cursor, { scale: 1, duration: 0.2 });
      });
      slider.on('mouseenter', function () {
        cursor.addClass('--show');
      });
      slider.on('mouseleave', function () {
        cursor.removeClass('--show');
      });
    }
  }
  sliderRoadmap();

  // SLIDER ADVISORS

  function sliderAdvisors() {
    if ($('.advisors__imgs').length) {
      var $carousel = $('.advisors__imgs').flickity({
        wrapAround: false,
        cellAlign: 'center',
        lazyLoad: 1,
        imagesLoaded: true,
        prevNextButtons: false,
        on: {
          ready: function () {
            let dotsSlide = $('.advisors__imgs .flickity-page-dots');
            let dotsNew = $('.advisors .slidercontrols .dots');
            dotsSlide.appendTo(dotsNew);
          },
          change: function (index) {
            $('.advisors .slidercontent .item')
              .eq(index)
              .addClass('active')
              .siblings()
              .removeClass('active');
          },
        },
      });
      var flkty = $carousel.data('flickity');
      var $imgs = $('.advisors__imgs img');

      $carousel.on('scroll.flickity', function (event, progress) {
        flkty.slides.forEach(function (slide, i) {
          var img = $imgs[i];
          var x = ((slide.target + flkty.x) * -1) / 2;
          img.style.transform = 'translateX( ' + x + 'px)';
        });
      });

      let ctrPrev = $('.advisors .slidercontrols .btncontrol.--prev'),
        ctrNext = $('.advisors .slidercontrols .btncontrol.--next');

      ctrPrev.on('click', function () {
        $carousel.flickity('previous', true);
      });
      ctrNext.on('click', function () {
        $carousel.flickity('next', true);
      });
    }
  }
  sliderAdvisors();

  function scrollSmooth() {
    locoScroll = new LocomotiveScroll({
      el: document.querySelector('.scrollmain'),
      smooth: true,
      lerp: 0.15,
      getSpeed: true,
      getDirection: true,
      reloadOnContextChange: true,
      resetNativeScroll: true,
      tablet: { smooth: false },
      smartphone: { smooth: false },
    });

    // MENU CLICKED
    let itemMenu = document.querySelectorAll('.header__menu ul>li ul li a');
    itemMenu.forEach(function (item) {
      item.addEventListener('click', function (e) {
        e.preventDefault();
        let target = this.getAttribute('href');
        locoScroll.scrollTo(target, {
          offset: -60,
        });
        itemMenu.forEach(function (item) {
          item.classList.remove('active');
        });
        this.classList.add('active');
      });
    });

    // SCROLL SECTION ACTIVE MENU
    if ($('html').hasClass('has-scroll-smooth')) {
      let itemLiMenu = $('.header__menu ul>li ul li');
      locoScroll.on('call', (id, way) => {
        if (way == 'enter') {
          let idSection = id - 1;
          itemLiMenu.find('a').removeClass('active');
          itemLiMenu.eq(idSection).find('a').addClass('active');
        }
      });
    }
  }
  scrollSmooth();

  ///////////////////////// WINDOW RESIZE ////////////////////////

  function setStorageDevice() {
    let windowsize = $(window).width();
    if (windowsize <= screen.mobile) {
      localStorage.setItem('device', 'mobile');
    } else if (windowsize <= screen.tablet) {
      localStorage.setItem('device', 'tablet');
    } else {
      localStorage.setItem('device', 'desktop');
    }
  }
  setStorageDevice();

  function reloadOnResize() {
    let windowsize = $(window).width(),
      divice = localStorage.getItem('device');
    if (windowsize <= screen.mobile && divice != 'mobile') {
      location.reload();
      setStorageDevice();
    } else if (windowsize <= screen.tablet && windowsize > screen.mobile && divice != 'tablet') {
      location.reload();
      setStorageDevice();
    } else if (windowsize > screen.tablet && divice != 'desktop') {
      location.reload();
      setStorageDevice();
    }
  }

  $(window).resize(function () {
    setTimeout(function () {
      reloadOnResize();
    }, 100);
  });

  // INIT
  function init() {
    $('body')
      .imagesLoaded()
      .progress({ background: true }, function (instance, image) {})
      .always(function (instance) {
        $('.loading').addClass('--hide');
        setTimeout(function () {
          sliderTheHanger();
          locoScroll.update();
        }, 500);
      })
      .fail(function () {
        // console.log('all images loaded, at least one is broken');
      })
      .done(function (instance) {
        // console.log('all images successfully loaded');
      });
  }
  init();
});
