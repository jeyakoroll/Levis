$(document).ready(function () {
	

	// switching images in models area

    $( '.gallery__preview-item' ).on('click', slideHandler );
    $( '.gallery__preview-item' ).bind( "tap", slideHandler );

    function slideHandler (e) {
        let target = $(e.target);
        if (target.hasClass('gallery__preview-item')) {
            let img = target.closest('.gallery__preview-show').find('.gallery__preview-pic');
            let src = target.data('src');
            img.attr('src', src);
            img.hide();
            img.fadeIn();
        }
    }
	
	// output of the description in the catalog
	const buy = '<button class="gallery__descr-button_buy">Купить</button>',
				descr = '<button class="gallery__descr-button_size">Узнать свой размер</button>',
				el = $('.descr_js');
	// output for mobile
	const dataFirst = [
					'Сапоги LEVI`S LEATHER JAX BOOTS',
					'149 б.р.',
					'черный',
					'натуральная кожа яка',
					'натуральный мех',
					'технологичная терморезина',
					'40,41,42,43,44,45',
					'зима'
					 // buy,
					 // descr
				];

				for( text of dataFirst ) {
					console.log(text);
					for ( data of el ) {
						// console.log(el.data);
					}
				}

				for ( data of el ) {
					console.log(data);
				}


	// output for desktop
	

	// form at bottom of page
	  $( '.footer__form-text input[name=name_last]' ).closest( '.form-group' ).after(
        '<div class="form-group"><select class="form-control" style="border-radius: 5px;" required name="size"><option selected="selected" value="" class="">Размер (полномерки)</option><option value="xs" class="">40</option><option value="x" class="">41</option><option value="red" class="">42</option><option value="grey" class="">43</option><option value="grey" class="">44</option><option value="grey" class="">45</option></select></div>'
    );

    $( '.footer__form-text select[name=size]' ).addClass( 'footer__form-size' );
    $( '.footer__form-text>.order-form' ).addClass( 'footer__form-order' );
    $( '.footer__form-text input' ).addClass( 'footer__form-data' );
    $( '.footer__form-text button' ).addClass( 'footer__form-button' );
    $( '.footer__form-text select[name=size]' ).addClass( 'footer__form-select' );
    $('.footer__form-text input[name=name_first]').attr("placeholder","Имя");
    $('.footer__form-text input[name=name_last]').attr("placeholder","Телефон");



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

    showReviews(window.location.hash, false);

});

    function showAbout(section, isAnimate) {
        let 
            direction = section.replace(/#/, ''),
            reqSection = $('.history>.row').filter('[data-section="' + direction +'"]'),
            reqSectionPos = reqSection.offset().top;

        if(isAnimate) {
            $('body, html').animate({scrollTop: reqSectionPos}, 500);
        }
    }

    function showGallery(section, isAnimate) {
        let 
            direction = section.replace(/#/, ''),
            reqSection = $('.gallery__title').filter('[data-section="' + direction +'"]'),
            reqSectionPos = reqSection.offset().top;

        if(isAnimate) {
            $('body, html').animate({scrollTop: reqSectionPos}, 500);
        }
    }

    function showAdvantages(section, isAnimate) {
        let 
            direction = section.replace(/#/, ''),
            reqSection = $('.advantages__title').filter('[data-section="' + direction +'"]'),
            reqSectionPos = reqSection.offset().top;

        if(isAnimate) {
            $('body, html').animate({scrollTop: reqSectionPos}, 500);
        }
    }

    function showBuy(section, isAnimate) {
        let 
            direction = section.replace(/#/, ''),
            reqSection = $('.relationship').filter('[data-section="' + direction +'"]'),
            reqSectionPos = reqSection.offset().top;

        if(isAnimate) {
            $('body, html').animate({scrollTop: reqSectionPos}, 500);
        }
    }

    function showReviews(section, isAnimate) {
        let 
            direction = section.replace(/#/, ''),
            reqSection = $('.reviews__title').filter('[data-section="' + direction +'"]'),
            reqSectionPos = reqSection.offset().top;

        if(isAnimate) {
            $('body, html').animate({scrollTop: reqSectionPos}, 500);
        }
    }