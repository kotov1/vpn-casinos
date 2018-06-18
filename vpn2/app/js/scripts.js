$(function() {

	// footer responsive links
	var footerLinksToggle = function () {
		$(".footer__links-title").click(function(){
			if($(this).closest('.footer__links-title').hasClass('active')) {
				$(this).closest('.footer__links-title').removeClass('active');
				$(this).closest('.footer__links-title').next('.footer__links-list').slideUp();
			} else {
				$(".footer__links-title").removeClass('active'); 
				$(this).closest('.footer__links-title').addClass('active'); 
				$('.footer__links-list').slideUp();
				$(this).closest('.footer__links-title').next('.footer__links-list').slideToggle();
			}
		});
	};
	
	$(document).ready(function() {
		if($(window).width() < 768) {
			$('.footer__links-list').hide();
			footerLinksToggle();
		}else {
			$('.footer__links-list').show();
		}
	});





});
