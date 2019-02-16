export default class Confirm {

	constructor() {

		$('.js-confirm').addClass('needs-confirmation');

		$( "body" ).on( "click", ".js-confirm", function(e) {

			var obj = $(this);

			e.preventDefault();

			swal({
				title: obj.attr('data-confirm-message') || "Are you sure?",
				text: obj.attr('data-confirm-para'),
				type: 'warning',
				showCancelButton: true,
				confirmButtonText: obj.attr('data-confirm-button') || "OK",
				cancelButtonText: obj.attr('data-cancel-button') || "Cancel",
				confirmButtonColor: '#d33',
				// cancelButtonColor: '#d33',
			}).then((result) => {

				if (result.value) {

					obj.closest('form').submit();

				} else {

				}

			});

		});

	}

}