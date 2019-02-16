module.exports = {

	onLoad() {

		if ($('.flash_message').length) {

			new Flash.success($('.flash_message').data('title'), $('.flash_message').data('text'));

		}

		if ($('.flash_message_error').length) {

			new Flash.error($('.flash_message_error').data('title'), $('.flash_message_error').data('text'));

		}

		if ($('.flash_message_overlay').length) {

			new Flash.overlay($('.flash_message_overlay').data('title'), $('.flash_message_overlay').data('text'), $('.flash_message_overlay').data('type'), $('.flash_message_overlay').data('confText'));

		}

	},

	success(title, text) {

		swal({
		    title: title || "Success!",
		    text: text || '',
		    type: "success",
			timer: 2000,
			showConfirmButton: false,
			position: 'top-end',
			toast: true,
		});

	},

	error(title, text) {

		swal({
		    title: title || "Error!",
		    text: text || '',
		    type: "error",
		});

	},

	overlay(title, text, type, confText) {

		swal({
		    title: title,
		    text: text,
		    type: type,
		    confirmButtonText: confText,
		    confirmButtonColor: "rgba(16, 144, 45, 0.5)"
		});
		
	}

}