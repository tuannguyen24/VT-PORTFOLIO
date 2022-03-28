$(document).ready(function () {
  let screen = {
    mobile: 767,
    tablet: 991,
    desktop: 1199,
    desktopXL: 1365,
  };

  // setup custom slider
  const updateCursor = (e) => {
    var cursor = $('.cursor');
    let x = e.clientX;
    let y = e.clientY;

    cursor.css('top', `${y}px`);
    cursor.css('left', `${x}px`);
  };
  $(window).on('mousemove', updateCursor);

  let configStorageDevice = () => {
    let windowSize = $(window).width();
    if (windowSize <= screen.mobile) {
      localStorage.setItem('device', 'mobile');
    } else if (windowSize <= screen.tablet) {
      localStorage.setItem('device', 'tablet');
    } else if (windowSize <= screen.desktop) {
      localStorage.setItem('device', 'desktop');
    } else {
      localStorage.setItem('device', 'desktop-xl');
    }
  };
  configStorageDevice();

  // active cursor when hover
  let activeCursor = () => {
    const cursor = $('.cursor');
    let styleActive = $('.style-active');
    let styleSlide = $('.style-slide');
    let styleView = $('.style-view');

    styleActive.on('mouseleave', () => {
      cursor.removeClass('cursor-active');
    });
    styleActive.on('mouseenter', () => {
      cursor.addClass('cursor-active');
    });

    styleSlide.on('mouseleave', () => {
      cursor.removeClass('cursor-slide');
    });
    styleSlide.on('mouseenter', () => {
      cursor.addClass('cursor-slide');
    });
    styleView.on('mouseleave', () => {
      cursor.removeClass('cursor-view');
    });
    styleView.on('mouseenter', () => {
      cursor.addClass('cursor-view');
    });
  };
  activeCursor();

  // manage info menu
  const manageInfoMenu = () => {
    const menu = $('.manage-info .menu');
    menu.on('click', () => {
      $('.manage-info').toggleClass('manage-active');
    });
  };
  manageInfoMenu();

  const scrollEffectLocomotive = () => {
    var scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      smoothMobile: true,
      offset: ['15%'],
      lerp: 0.15,
      getSpeed: true,
      getDirection: true,
      reloadOnContextChange: true,
      resetNativeScroll: true,
      tablet: { smooth: true },
      smartphone: { smooth: true },
    });
    // scroll.on('scroll',Obj =>{
    //     let nav_menu = $('.header_page');
    //     const detalY = Obj.delta.y;
    //     if(detalY > 270){
    //         nav_menu.slideDown();
    //         nav_menu.addClass('active');
    //     }else{
    //         nav_menu.slideUp();
    //     }
    // })
    // let backToTop = $('footer .backToTop');
    // backToTop.on('click', function () {
    //   scroll.scrollTo(-document.body.offsetHeight);
    // });
  };
  scrollEffectLocomotive();

  // scrollAnimationTimelines
  const scrollAnimationTimelines = () => {
    const title = $('.aboutpage .timelines .timelines__title');
    const item = $('.aboutpage .timelines .timelines__list-item');
    const itemInnerTitle = $('.aboutpage .timelines .timelines__list-item .title');
    const itemInnerTime = $('.aboutpage .timelines .timelines__list-item .time');
    const itemInnerDescription = $('.aboutpage .timelines .timelines__list-item .description');

    gsap.registerPlugin(ScrollTrigger);
    gsap.timeline();

    gsap.fromTo(
      itemInnerTitle,
      {
        scrollTrigger: {
          trigger: '.aboutpage .timelines',
          scrub: true,
          makers: 'true',
          toggleActions: 'restart pause pause pause',
        },
        y: 70,
        duration: 0.4,
        opacity: 0,
      },
      {
        scrollTrigger: {
          trigger: '.aboutpage .timelines',
          scrub: true,
          makers: 'true',
          toggleActions: 'restart pause pause pause',
        },
        y: 0,
        ease: 'expo.inOut',
        duration: 0.4,
        opacity: 1,
      },
    );
  };
  scrollAnimationTimelines();

  // detect device
  const detectDevice = () => {
    let md = new MobileDetect(window.navigator.userAgent);
    if (md.mobile() != null || md.tablet() != null) {
      mobile = true;
      tablet = true;
    } else {
      mobile = false;
      tablet = false;
    }
  };
  detectDevice();

  // setup hover effect title main
  let hoverEffectTranslateMatrix = () => {
    const signature = $('footer .signature');
    signature.tilt({
      glare: true,
      maxGlare: 0.5,
    });
  };
  hoverEffectTranslateMatrix();
});

$(window).on('load', () => {
  let c = 0;
  setInterval(() => {
    const count = $('.loading .count');
    count.html(`${c++}%...`);
  }, 40);

  setTimeout(() => {
    $('.loading').addClass('hide-loading');
    $('.loading').children().css('visibility', 'hidden');
  }, 2000);
});
