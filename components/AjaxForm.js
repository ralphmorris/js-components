import FormState from "./FormState";

export default class AjaxForm {

	constructor() {

		var $this = this;

		$( "body" ).on( "submit", ".js-ajax-form", function(e) {

			e.preventDefault();

			$this.maybeShowRefreshLoader($(this));
		
			if ($(this).attr('method') == 'POST') {

				$this.post($(this));

			} else {

				$this.get($(this));

			}
			
		});

	}

	maybeShowRefreshLoader(obj) {

		if (typeof obj.attr('data-refresh-loader') != 'undefined') {

			var refresh_target = obj.attr('data-refresh');

			$(refresh_target).prepend('<div class="loading-overlay"><i class="fa fa-spinner fa-spin"></i></div>');

		}

	}

	get(obj) {

		var $this = this;

		var url = obj.attr('action') + '/?' + obj.serialize();

		axios.get(url)
		.then(function (response) {

			$this.processResponse(obj, response);

		})
		.catch(function (error) {

			$this.processError(obj, error);
			
		});

	}

	post(obj) {

		var $this = this;

		axios.post(obj.attr('action'), obj.serialize())
		.then(function (response) {

			$this.processResponse(obj, response);

		})
		.catch(function (error) {

			$this.processError(obj, error);
			
		});

	}

	processResponse(obj, response) {

		var refresh_target = obj.attr('data-refresh');

		if(typeof refresh_target != 'undefined') {

			$(refresh_target).html(response.data);

		}

		if (typeof obj.attr('data-clear-input') != 'undefined') {

			obj.find('.form-control').val("").change();
			
		}
		
		ClearValidationErrors(obj);

		new FormState().enable(obj);

		this.maybeShowSucccess(obj);
			
	}

	maybeShowSucccess(obj) {

		if (typeof obj.attr('data-hide-success-flash') == 'undefined') {

			new Flash.success();

		}
		
	}

	processError(obj, error) {

		new FormState().enable(obj);

		ShowValidationErrors(obj, error, false);

	}

}