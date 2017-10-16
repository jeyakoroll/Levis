$(document).ready(function () {
  var owlGallery = $("#slider-gallery"),
      owlReviews = $("#slider-reviews");
  

  owlGallery.owlCarousel({
      loop:true,
      margin: 20,
      center: false,
      dots: true,
      nav: true,
      autoWidth: true,
      navContainer: '#owl-next',
      responsiveClass:true,
      responsive:{
          0:{
              items:5,
              loop:true,
              dots: true
          }
      }
  });

  owlReviews.owlCarousel({
      loop:true,
      margin: 500,
      items: 1,
      center: true,
      dots: true,
      nav: true,
      autoWidth: true,
      navContainer: '.reviews__slider-link',
      dotsContainer: '.reviews__items-list',
      responsiveClass:true,
      responsive:{
          0:{
              items: 1,
              margin: 200,
              loop: true,
              autoWidth: true,
              autoplay: true,
              // center: false,
              dots: false
          },
          500:{
              items:1,
              loop: true,
              autoWidth: true,
              margin: 200,
              // center: false,
              // autoWidth: false,
              dots: false
          },
          768:{
              items:1,
              loop:true,
              // center: true,
              // autoWidth: false,
              dots: true
          }
      }
  });
	
	// switching images in models area

  $( '.gallery__preview-item' ).on('click', slideHandler );
  // $( '.gallery__preview-item' ).bind( "tap", slideHandler );

  function slideHandler (e) {
      var target = $(e.target);
      if (target.hasClass('gallery__preview-item')) {
          var img = target.closest('.gallery__preview-show').find('.gallery__preview-pic');
          var src = target.data('src');
          img.attr('src', src).hide().fadeIn(200);
      }
  }

	// form at bottom of page
	$( '.footer__form-text input[name=name_last]' ).closest( '.form-group' ).after(
        '<div class="form-group"><select class="form-control" style="border-radius: 5px;" required name="size"><option selected="selected" value="" class="option" style="background-color: transparent;">Размер (полномерки)</option><option value="grey" class="option" style="background-color: transparent;">39</option><option value="xs" class="option" style="background-color: transparent;">40</option><option value="x" class="option" style="background-color: transparent;">41</option><option value="red" class="option" style="background-color: transparent;">42</option><option value="grey" class="option" style="background-color: transparent;">43</option><option value="grey" class="option" style="background-color: transparent;">44</option><option value="grey" class="option" style="background-color: transparent;">45</option><option value="grey" class="option" style="background-color: transparent;">46</option><option value="grey" class="option" style="background-color: transparent;">47</option></select></div>'
    );

    $( '.footer__form-text select[name=size]' ).addClass( 'footer__form-size' );
    $( '.footer__form-text>.order-form' ).addClass( 'footer__form-order' );
    $( '.footer__form-text input' ).addClass( 'footer__form-data' );
    $( '.footer__form-text button' ).addClass( 'footer__form-button' );
    $( '.footer__form-text select[name=size]' ).addClass( 'footer__form-select' );
    $('.footer__form-text input[name=name_first]').attr("placeholder","Имя");
    $('.footer__form-text input[name=name_last]').attr("placeholder","Телефон");

    // show mobile description
    $('.gallery__slider-text_mobile').click( function() {
    var that = $(this),
        preview = $(this).closest('.mob__slid-list').find('.gallery__mobile-descr');

        if ( !preview.hasClass('open') ) {
        that.css({
            'opacity': '0',
            'display': 'none'
        });
        preview.stop(true, true).animate({
        height: preview.get(0).scrollHeight
        }, 300, function(){
            preview.height('auto');
        });
        }
        preview.toggleClass('open');
    });
		
    // hide mobile descr
    $('.gallery__mobile-header').on('click', function() {
      var that = $(this),
    			preview = $(this).closest('.mob__slid-list').find('.gallery__mobile-descr'),
    			mobileText = $(this).closest('.mob__slid-list').find('.gallery__slider-text_mobile');

      if ( preview.hasClass('open') ) {
  			preview.stop(true, true).animate({
  			height: 0
			}, 300 );
			
			mobileText.css({
			 'transition': 'opacity 100ms',
       'opacity': '1',
       'display': 'flex'
    	});
      preview.toggleClass('open');
		}
  })

  // descr for gallery slider
  $('.gallery-item').click( function (e) {
    e.preventDefault();
    var 
        tap = e.target,
        that = $(this),
        descr = that.closest('.gallery').find('.gallery-descr'),
        dataThat = that.data('preview');

        descr.each(function () {
          var 
              that = $(this),
              dataDescr = that.data('preview');
              that = (dataThat === dataDescr) ? that.addClass('active__prev').hide().fadeToggle(100) : that.removeClass('active__prev');
        });

  });


    // go to the menu area
    // about area
    $('.header__link-about').on('click', showAboutWatch);
    $('.header__link-about').bind('tap', showAboutWatch);

    function showAboutWatch (e) {
        e.preventDefault();
        showAbout($(this).attr('href'), true);
    }    

    // about area
    $('.header__link-gallery').on('click', showGalleryWatch);
    $('.header__link-gallery').bind('tap', showGalleryWatch);

    function showGalleryWatch (e) {
        e.preventDefault();
        showGallery($(this).attr('href'), true);
    }    

  // advantages area
    $('.header__link-advantages').on('click', showAdvantagesWatch);
    $('.header__link-advantages').bind('tap', showAdvantagesWatch);

    function showAdvantagesWatch (e) {
        e.preventDefault();
        showAdvantages($(this).attr('href'), true);
    }    

    // buy area
    $('.header__link-buy').on('click', showBuyWatch);
    $('.header__link-buy').bind('tap', showBuyWatch);

    function showBuyWatch (e) {
        e.preventDefault();
        showBuy($(this).attr('href'), true);
    }    

    // reviews area
    $('.header__link-reviews').on('click', showReviewsWatch);
    $('.header__link-reviews').bind('tap', showReviewsWatch);

    function showReviewsWatch (e) {
        e.preventDefault();
        showReviews($(this).attr('href'), true);
    }
    
    // GO TO FORM ON DESKTOP
    // buy button
    $('.gallery__descr-button_buy').on('click', showFormWatch);
    $('.gallery__descr-button_buy').bind('tap', showFormWatch);
    // size button
    $('.gallery__descr-button_size').on('click', showFormWatch);
    $('.gallery__descr-button_size').bind('tap', showFormWatch);

    function showFormWatch (e) {
        e.preventDefault();
        var src = $('.active__prev .gallery__preview-pic').attr('src'),
            bottomPic = $('.img-footer'),
            changePic = a => `background: url('${a}') no-repeat top/cover;`;
            
            bottomPic.attr('style', changePic(src));
        // console.log(changePic(src))

        showForm($(this).data('href'), true);
    }

    // GO TO FORM AND SIZE TABLE ON MOBILE
    // buy button
    $('.mob__go-to-form').on('click', showFormMobile);
    $('.mob__go-to-form').bind('tap', showFormMobile);
    // size button
    $('.mob__go-to-size').on('click', showSizeMobile);
    $('.mob__go-to-size').bind('tap', showSizeMobile);

    function showSizeMobile (e) {
        e.preventDefault();
        showPhoneSize($(this).data('size'), true);
    }

    function showFormMobile (e) {
        e.preventDefault();
        showPhoneForm($(this).data('form'), true);
    }

    // showReviews(window.location.hash, false);

    function showAbout(section, isAnimate) {
        var 
            direction = section.replace(/#/, ''),
            reqSection = $('.history>.row').filter('[data-section="' + direction +'"]'),
            reqSectionPos = reqSection.offset().top;

        if (isAnimate) {
            $('body, html').animate({scrollTop: reqSectionPos}, 500);
        }
    }

    function showGallery(section, isAnimate) {
        var 
            direction = section.replace(/#/, ''),
            reqSection = $('.gallery__title').filter('[data-section="' + direction +'"]'),
            reqSectionPos = reqSection.offset().top;

        if (isAnimate) {
            $('body, html').animate({scrollTop: reqSectionPos}, 500);
        }
    }

    function showAdvantages(section, isAnimate) {
        var 
            direction = section.replace(/#/, ''),
            reqSection = $('.advantages__title').filter('[data-section="' + direction +'"]'),
            reqSectionPos = reqSection.offset().top;

        if (isAnimate) {
            $('body, html').animate({scrollTop: reqSectionPos}, 500);
        }
    }

    function showBuy(section, isAnimate) {
        var 
            direction = section.replace(/#/, ''),
            reqSection = $('.relationship').filter('[data-section="' + direction +'"]'),
            reqSectionPos = reqSection.offset().top;

        if (isAnimate) {
            $('body, html').animate({scrollTop: reqSectionPos}, 500);
        }
    }

    function showReviews(section, isAnimate) {
        var 
            direction = section.replace(/#/, ''),
            reqSection = $('.reviews__title').filter('[data-section="' + direction +'"]'),
            reqSectionPos = reqSection.offset().top;

        if (isAnimate) {
            $('body, html').animate({scrollTop: reqSectionPos}, 500);
        }
    }

    function showForm(section, isAnimate) {
        var 
            reqSection = $('.footer__form').filter('[data-section="' + section +'"]'),
            reqSectionPos = reqSection.offset().top;

        if (isAnimate) {
            $('body, html').animate({scrollTop: reqSectionPos}, 500);
        }
    }

    function showPhoneForm(section, isAnimate) {
        var 
            reqSection = $('.footer__form-title').filter('[data-section="' + section +'"]'),
            reqSectionPos = reqSection.offset().top;

        if (isAnimate) {
            $('body, html').animate({scrollTop: reqSectionPos}, 500);
        }
    }

    function showPhoneSize(section, isAnimate) {
        var 
            reqSection = $('.footer__size-title').filter('[data-section="' + section +'"]'),
            reqSectionPos = reqSection.offset().top;

        if (isAnimate) {
            $('body, html').animate({scrollTop: reqSectionPos}, 500);
        }
    }

});

