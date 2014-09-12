
$(document).ready(function(){

	//Code to center the subscription pup-up box
	$box = $('#box');
	$box.css({
		'left' : '50%',
		'top' : '50%',
		'margin-left' : -$box.width()/2 + 'px',
		'margin-top' : -$box.height()/2 + 'px'
	});

	$box_form_contacto = $('#box_form_contacto');
	$box_form_contacto.css({
		'left' : '50%',
		'top' : '50%',
		'margin-left' : -$box_form_contacto.width()/2 + 'px',
		'margin-top' : -$box_form_contacto.height()/2 + 'px'
	});


	//Subscription pup-up
	$('.start_btn').click(function(){
		$('#lightbox').width($(window).width()).height($(window).height()).fadeIn(200);
		$('#box').fadeIn(200);

		return false;
	});

	$('.contacto').click(function(){
		$('#lightbox').width($(window).width()).height($(window).height()).fadeIn(200);
		$('#box_form_contacto').fadeIn(200);

		return false;
	});

	$('#lightbox, .close').click(function(){
		$('#lightbox').width(0).height(0).fadeOut(200);
		$('#box, #box_form_contacto').fadeOut(200);

		return false;
	});

});

