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



	/* Accordion Plugin */
	function disableAccordion(accordion) {
		accordion.find('.item .header').removeClass('active');
		accordion.find('.item .content').slideUp(300);
	}

	$('.accordion .item .header').click(function() {
		parentAccordion = $(this).parent().parent();
		is_multi_selectable = parentAccordion.data('accordionMultiSelectable');
		if ($(this).hasClass('active')) {
			if (!is_multi_selectable) {
				disableAccordion(parentAccordion);
			} else {
				currentItem = $(this).parent();
				currentItem.find('.header').removeClass('active');
				currentItem.find('.content').slideUp(300);
			}
		} else {
			if (!is_multi_selectable) {
				disableAccordion(parentAccordion);
			} 
			currentItem = $(this).parent();
			currentItem.find('.header').addClass('active');
			currentItem.find('.content').slideDown(300);
		}
	});

	/* Tabs Plugin */
	function disableTabs(tabs) {
		tabs.find('li.active').removeClass('active');
	}
	$('[data-tabs] li').click(function() {
		tabs = $(this).parent();
		disableTabs(tabs);
		if ($(this).data('link')) {
			document.location.href=$(this).data('link');
		}
		$(this).addClass('active');
	});

	/* Button Toggle Plugin */
	$('[data-button-toggle]').click(function() {
		$(this).toggleClass('active');
		console.log('toogle');
	});


	/* Dropdown Plugin */
	$('*:not(:has([data-dropdown-target]))').click(function() {
		$('.dropdown').slideUp(150);
	});

	$('[data-dropdown-target]').click(function() {
		//$('.dropdown').slideUp(150);		
		dropdown = $('#' + $(this).data('dropdownTarget'));
		if (!dropdown.is(':visible')) {
			var position = $(this).position();
			dropdown.css({'top': position.top + $(this).outerHeight() + 10, 'left': position.left});
			dropdown.slideDown(150);	
		}	
	});
	/*$(':not(.dropdown), :not([data-dropdown-target=""])').click(function() {
		$('.dropdown').slideUp(150);
	})*/
});