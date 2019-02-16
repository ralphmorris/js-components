export default class FormState {

	constructor() {


	}

	disable(obj) {

		obj.find('input[type="submit"]').attr('disabled','disabled');
		obj.find('button[type="submit"]').attr('disabled','disabled');

	}

	loading(obj) {

		obj.find('button[type="submit"]').prepend('<i class="fa fa-spinner fa-spin"></i> ');

		this.disable(obj);

	}

	enable(obj) {

		obj.find('button[type="submit"] .fa-spin').remove();

		obj.find('input[type="submit"]').removeAttr('disabled');
		obj.find('button[type="submit"]').removeAttr('disabled');

	}

}