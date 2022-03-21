$(document).ready(function () {
  // setup slider for feature projects
  const projectSliders = () => {
    const slideWrapper = $('main .feature-project .main-carousel');
    let slider = slideWrapper.flickity({
      // options
      cellAlign: 'left',
      wrapAround: true,
      contain: true,
      autoPlay: 2000,
      pageDots: false,
      prevNextButtons: false,
    });
  };
  projectSliders();

  // setup custom slider
  const updateCursor = (e) => {
    var cursor = $('.cursor');
    let x = e.clientX;
    let y = e.clientY;

    cursor.css('top', `${y}px`);
    cursor.css('left', `${x}px`);
  };
  $(window).on('mousemove', updateCursor);

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
