import FormState from "./FormState";

export default class SubmitButtonOnClick {

	constructor() {

		$( "body" ).on( "submit", "form", function() {

		    new FormState().loading($(this));
			
		});


	}

}