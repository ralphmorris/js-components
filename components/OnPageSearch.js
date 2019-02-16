export default class OnPageSearch {

	constructor() {

		var $this = this;

		$('.js-on-page-search-filter').on('input', function() {

			$this.search($(this));

		});

	}

	search(obj) {

		var searchTerm = obj.val().toLowerCase();

	    $('.js-on-page-search-item').each(function(){

	        if ($(this).filter('[data-search-term *= ' + searchTerm + ']').length > 0 || searchTerm.length < 1) {

	            $(this).show();

	        } else {

	            $(this).hide();

	        }

	    });

	}

}