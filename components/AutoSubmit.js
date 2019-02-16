export default class AutoSubmit {

	constructor() {

		var $this = this;

		var timeout = null;

		$( "body" ).on( "input", ".js-auto-submit input[type='search'], .js-auto-submit input[type='text']", function() {
		
			var obj = $(this);

		    // Clear the timeout if it has already been set.
		    // This will prevent the previous task from executing
		    // if it has been less than <MILLISECONDS>
		    clearTimeout(timeout);

		    // Make a new timeout set to go off in 800ms
		    timeout = setTimeout(function () {
		        
		    	$this.submit(obj);

		    }, 500);
			
		});

	}

	submit(obj) {

		obj.closest('form').submit();

	}

}