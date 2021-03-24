

$(document).ready(function(){
	//scrollup
	(function ($) {
		$.fn.extend({
			scrollToTop: function (options) {
				var defaults = {
					speed: "slow",
					ease: "jswing",
					start: 0
				}
				var options = $.extend(defaults, options);
				return this.each(function () {
					var o = options;
					var scrollDiv = $(this);
					$(this).hide().removeAttr("href").css("cursor", "pointer");
					if ($(window).scrollTop() > o.start) {
						$(this).fadeIn("slow");
					}
					$(window).scroll(function () {
						if ($(window).scrollTop() > o.start) {
							$(scrollDiv).fadeIn("slow");
						} else {
							$(scrollDiv).fadeOut("slow");
						}
					});
					scrollDiv.click(function (event) {
						$("html, body").animate({
							scrollTop: "0"
						}, 750);
					});
				});
			}
		});
	})(jQuery);
	$(function () {
		$("#toTop").scrollToTop({
			speed: 1000,
			start: 500
		});
	});


	//for card
	$('.plMin .plus').click(function(){
		var iNum = Math.ceil($(this).parent().next('input').val())+1;
		$(this).parent().next('input').val(iNum);

	});
	$('.plMin .min').click(function(){
		var iNum = Math.ceil($(this).parent().next('input').val());
		var iNumMin = 0;
		if(iNum >= iNumMin+1){
			$(this).parent().next('input').val(iNum-1);
		};
	});
	
	
	//for gallery
	$('.gal li:not(:first) a').click(function(){
		if ($(this).attr('href') != $(this).parents('.gal').find('li:first img').attr('src') && !$(this).parent().hasClass('act'))
		{
			var subSrc = $(this).parents('.gal').find('li:first a').attr('href');
			$(this).parents('.gal').find('li:first img').fadeOut(0).attr('src',$(this).attr('href'));
			$(this).parent().addClass('act').siblings().removeClass('act');
			var ff = $(this).attr('href');
			var ff2 = $(this).parents('.gal').find('li:first a').attr('href');
			$(this).parents('.gal').find('li:first a').attr('href',ff);
			$(this).parents('.gal').next().find('[href="'+ff+'"]').attr('href', ff2);
			$(this).parents('.gal').find('li:first img').load(function(){
				$(this).fadeIn();
			});
		}	
		return false;
	});

	//sort
	$('.sort li i').click(function(){
		
		if($(this).hasClass('btm')){
			$(this).removeClass('btm').addClass('top');
			return;
		}
		if($(this).hasClass('top')){
			$(this).removeClass('top').addClass('btm');
			return;
		}
	});
	$('ul.uTab2').delegate('li:not(.act)', 'click', function() {
		$(this).addClass('act').siblings().removeClass('act').parents('div.page').find('div.item').hide().eq($(this).index()).fadeIn(150);
	});

}); 

