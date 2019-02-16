export default class DropzoneHandler {

	constructor() {

		var $this = this;

		$('.js-dropzone').dropzone({
			maxFilesize: 40, // MB
			acceptedFiles: '.jpg,.jpeg,.png,.bmp,.gif,.pdf',
			success: function(file, response){

				var refresh_target = $(this.element).attr('data-refresh-target');

				if (refresh_target) {

					$this.refreshTarget(refresh_target, response);

				}

			},
			error: function(file, errorMessage) {

			    if (errorMessage.token_mismatch) {

			        tokenMismatch.showMessage();

			    } else {

					swal({
						title: errorMessage,
						type: 'error',
						text: false,
						showConfirmButton: true
					});

			    }

			},
			complete: function(file) {

				this.removeFile(file);

			}
		});

	}

	refreshTarget(target, response) {

		$(target).html(response);

	}

}