$(document).ready(function() {
	
	$(".about-pages-item").on('click', function(e) {
		e.preventDefault();
		
		var $this = $(this);
		var index = $this.index();
		var dataAttr = $this.data('target');
		var reqLi = $('.about-content').filter('#' + dataAttr);

		$this.addClass('active').siblings().removeClass('active');
		reqLi.addClass('active').siblings().removeClass('active');
	});

	$('.about-text').perfectScrollbar(); 
	$('.career-scroll').perfectScrollbar(); 

	$('#status').select2();
	$("#status").select2({
		minimumResultsForSearch: Infinity
	});
});

