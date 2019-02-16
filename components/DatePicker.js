/**
 *
 * https://github.com/stefangabos/Zebra_Datepicker
 * 
 */

export default class DatePicker {

	constructor() {

		$('.js-datepicker').Zebra_DatePicker({
		    
		});

		$('#datepicker-range-start').Zebra_DatePicker({
		    pair: $('#datepicker-range-end')
		});
		 
		$('#datepicker-range-end').Zebra_DatePicker({

		});

	}

}
