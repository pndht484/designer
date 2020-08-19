$(function () {
	//ハンバーガーメニュー
	$('#header .btn').bind('touchend click', function() {
    if($('#gNav ul').hasClass('open')){
			$('#gNav ul').slideUp(function(){
				$(this).css('display','').removeClass('open');
			});
		}else{
			$('#gNav ul').slideDown(function(){
				$(this).css('display','').addClass('open');
			});
		}		
		return false;
	});
	
	//カルーセルの設定
	$('.gimmicCarousel_sample .slider').slick({
		accessibility: true,
		dots: true,
		autoplay: true,
		autoplaySpeed:3000,
		infinite: true,
		speed: 500
	});
});