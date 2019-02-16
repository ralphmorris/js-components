import Sortable from 'sortablejs';

export default class DragAndDrop {

	constructor() {	
		
		var el = document.getElementById('js-sortable');

		if (el) {

			this.sortable(el);		
			
		}

	}

	sortable(el) {

		var $this = this;

		var sortable = new Sortable(el, {
		    animation: 150,
		    draggable: ".js-sortable-item",  // Specifies which items inside the element should be draggable
		    ghostClass: "drop-placeholder",  // Class name for the drop placeholder
		    chosenClass: "sortable-chosen",  // Class name for the chosen item
		    dragClass: "sortable-drag",  // Class name for the dragging item
		    forceFallback: true,
		    handle: ".btn-draggable",
	        onEnd: function (/**Event*/evt) {

	        	$this.updateDataAttributes(el);

		    },
		});

	}

	updateDataAttributes(el) {
		var x = 1;
		var data = [];
		$(el).find('.js-sortable-item').each( function(i, obj) {
			$(this).attr('data-order', x);
			$(this).find('.order').html(x);

			data.push({
				'id' : $(this).attr("data-id"),
				'order' : $(this).attr("data-order")
			});

			x++;
		});

		this.updateOrder(data, el);
	}

	updateOrder(data, el) {
	   
		axios.post($(el).attr('data-route'), data)
		.then(function (response) {


		})
		.catch(function (error) {

			TokenMismatch.check(data);
			
		});

	}

}