import Chart from 'chart.js';

export default class Graph {

	constructor() {

		this.graphs = [];

		var $this = this;

		$( ".js-graph" ).each(function( index ) {
		
			$this.graphs[$(this).attr('id')] = $this.createGraph($(this));
		
		});

	}

	createGraph(obj) {

		var ctx = document.getElementById((obj.attr('id')));
		
		var newChart = new Chart(ctx, {
		    type: obj.attr('data-chart-type'),
		    data: {
		        labels: JSON.parse(obj.attr('data-groupLabels')),
		        datasets: [{
		            label: obj.data('label'),
		            data: JSON.parse(obj.attr('data-data')),
					backgroundColor: 'rgba(48, 183, 185, .3)',
					borderColor: 'rgba(48, 183, 185, .3)',
		            borderWidth: 1
		        }]
		    },
		    options: {
		        title: {
		            display: true,
		            text: obj.attr('data-title'),
		            fontSize: 14,
		        },
			    tooltips: {
					mode: 'index',
					intersect: false
			    },
				maintainAspectRatio: false,
				responsive: true,
		        scales: {
		            yAxes: [{
		                ticks: {
						    min: 0, // it is for ignoring negative step.
						    beginAtZero: true,
						    maxTicksLimit: 6,
						    callback: function(value, index, values) {
						        if (Math.floor(value) === value) {
						            return value;
						        }
						    }
		                }
		            }]
		        },
		        // layout: {
		        //     padding: {
		        //         left: 50,
		        //         right: 50,
		        //         top: 0,
		        //         bottom: 0
		        //     }
		        // }
		    }
		});

		return newChart;
		
	}

}