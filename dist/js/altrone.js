$(document).ready(function() {
	$('.modal-open').click(function(event) {
		event.preventDefault();
		$('.overlay').fadeIn(200);
		var modal = '#' + $(this).data('modalId');
		modal = $(modal);
		var modalHeight = modal.height()
		modal.css({'margin-top': -modalHeight / 2}); //установка модального окна по центру
		modal.fadeIn(300);
		console.log('start modal');
	});

	$('.closeModal, .overlay').click(function(event) {
		event.preventDefault();
		$('.overlay').fadeOut(200);
		$('.modal').fadeOut(100);
	});
});