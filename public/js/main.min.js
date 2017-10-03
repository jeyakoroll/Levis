$(document).ready(function () {
	
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


});