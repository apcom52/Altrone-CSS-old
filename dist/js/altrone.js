$(document).ready(function() {


	/* Modal Plugin */
	$('[data-modal-href]').click(function() {
		var overlay_disable = $(this).data('overlayDisable');		
		var modal = $('#' + $(this).data('modalHref'));
		modal.css({'margin-top': -modal.height()/2})
		$('.overlay').fadeIn(300);
		modal.fadeIn(350);

		if (overlay_disable === true) {
			$('.closeModal').click(function() {
				hideModal();
			});
		} else {
			$('.overlay, .closeModal').click(function() {
				hideModal();
			});
		}		
	});	

	function hideModal() {
		$('.modal').fadeOut(200);
		$('.overlay').fadeOut(250);
	}


	/* Tooltip Plugin */

	$('[data-tooltip]').mousemove(function(event) {
		var title = $(this).data('tooltipTitle');
		var title_html = '';
		if (title) {
			title_html = '<h1>' + title + '</h1>';
		} else {
		}
		parent = $(this);
		$('.tooltip').html(title_html + parent.data('tooltip')).css({'top': event.pageY - 30, 'left': event.pageX + 5}).fadeIn(150)
	})

	$('[data-tooltip]').mouseout(function() {
		$('.tooltip').fadeOut(100).html('');
	})
});