export default class Modal {

	constructor() {

		var $this = this;

		$( "body" ).on( "click", ".js-modal", function(e) {

			e.preventDefault();
		
			$this.getModal($(this));
			
		});

	}

	getModal(obj) {

		if (obj.attr('data-target')) {
			
			$(obj.attr('data-target')).modal();

		} else {

			var modal = this.showModal();

			this.getContent(obj.attr('href'), modal);

		}

	}

	getContent(route, modal) {

		axios.get(route)
		.then(function (response) {

			modal.find('.modal-content').html( response.data );

		})
		.catch(function (error) {

			modal.find('.modal-content').html( '<div class="modal-body">' + error + '</div>' );

		});

	}

	showModal() {

		return $(this.modalHtml()).modal();

	}

	modalHtml() {

		return '<div class="modal" tabindex="-1" role="dialog"><div class="modal-dialog" role="document"><div class="modal-content"><div class="modal-loading-content"><h2>Loading...</h2><i class="fa fa-spinner fa-spin"></i></div></div></div></div>';

	}

}