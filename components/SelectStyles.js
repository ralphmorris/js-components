export default class SelectStyles {

	constructor() {

	    $('.select2').select2();
	    
	    $('.select2--multiple').select2({
			tags: true
		});

		$('.select2--no-search').select2({
			minimumResultsForSearch: Infinity
		});

	}

}