export default class scrollToId {

	onClick() {

		var $this = this;

		$(".scrollToId").click(function(e) {
			e.preventDefault();

			var target = $(this).attr('href');

			$this.scrollToId(target);

		});

	}

	scrollToId(target) {

	    $('html, body').animate({
	        scrollTop: $(target).offset().top
	    }, 1000);

	}

}