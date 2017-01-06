/*
	Escape Velocity by HTML5 UP
	html5up.net | @ajlkn
	Free for personal and commercial use under the CCA 3.0 license (html5up.net/license)
*/

/* Scrollr Initiation */
var s = skrollr.init();




/* Asphalt Mix Ingredients Pie Chart*/
/* ingredient ratio 
var mix1Data =  [
	{ingre: 'Bitumen', percent: 5.1},
	{ingre: 'Crumb Rubber', percent: 0.9},
	{ingre: 'Agregate', percent: 94}
];

var mix2Data = [
	{ingre: 'Bitumen', percent: },
	{ingre: 'Fine Rubber', percent: },
	{ingre: 'Agregate', percent: },
	{ingre: 'Sasobit', percent: }
];

/* pie size 
var width = 360;
var height = 360;
var radius = Math.min(width, height) / 2;

/* pie slice color 
var color = d3.scaleOrdinal()
  .range(['#4744e5', '#e57a44', '#bedbd7', '#528C18', '#C3F25C']);
*/

/*
//bar chart
var width = 10;
var height = 5;

var svg = d3.select("#tempChart").selectAll("div")
								 .append("svg")
								 .attr("width", 100)
								 .attr("height", 100)
								 .style("border", "1px solid black");
*/

/*
var barWidth = 10;
	var workTemps = [190, 140];
	var tempColor = ["#c62f46", "teal"]

	var svg = d3.select("body").select("#tempChart").selectAll("div")
													.data(workTemps)
													.enter()
								 								
								 								
	var bars = svg.append("div")
				  .attr("class", "bar")
				  .style("height", function(d){
					  var barHeight = d * 1.5;
					  return barHeight + "px";
				  });
				  .style("background-color", function(d){
				  	  var barColor = 
				  })
*/

			//Width and height
			var w = 480;
			var h = 300;
			var barPadding = 100;
			var barID = ["CRMA", "TB"];
			
			var dataset = [ 190, 140];
			
			//Create SVG element
			var svg = d3.select("#tempChart")
						.append("svg")
						.attr("width", w)
						.attr("height", h);

			svg.selectAll("rect")
			   .data(dataset)
			   .enter()
			   .append("rect")
				.attr("x", function(d, i) {
			   		return i * (w / dataset.length);
			   })
			   .attr("y", function(d) {
			   		return h - (d * 1.5);
			   })
			   .attr("width", w / dataset.length - barPadding)
			   .attr("height", function(d) {
			   		return d * 3;
			   })
			   .attr("fill", function(d){
			   		
			   		return "rgb(" + ((d - 80) * 1.2) + ", 0, " + ((255 - d) * 2) + ")";
			   });

			svg.selectAll("text")
			   .data(dataset)
			   .enter()
			   .append("text")
			   .text(function(d) {
			   		return d + " Degrees";
			   })
			   .attr("text-anchor", "middle")
			   .attr("x", function(d, i) {
			   		return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
			   })
			   .attr("y", function(d) {
			   		return h - (d * 1.5) + 24;
			   })
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "16px")
			   .attr("fill", "white")
			   .append("text")
			   .data(barID)
			   .enter()
			   .text(function(d) {
			   		return d;
			   })
			   .attr("x", function(d, i) {
			   		return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
			   })
			   .attr("y", function(d) {
			   		return h - (d * 1.5) + 48;
			   });

			svg.selectAll("text")
			   .data(barID)
			   .enter()
			   .append("text")
			   .text(function(d) {
			   		return d;
			   })
			   .attr("text-anchor", "middle")
			   .attr("x", function(d, i) {
			   		return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
			   })
			   .attr("y", function(d) {
			   		return h - (d * 1.5) + 56
			   })
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "16px")
			   .attr("fill", "white");


			//Width and height
			var w = 480;
			var h = 300;
			var barPadding = 100;
			var barID = ["CRMA", "TB"];
			
			var dataset = [ 0.5, 30];
			
			//Create SVG element
			var svg = d3.select("#shelfChart")
						.append("svg")
						.attr("width", w)
						.attr("height", h);

			svg.selectAll("rect")
			   .data(dataset)
			   .enter()
			   .append("rect")
				.attr("x", function(d, i) {
			   		return i * (w / dataset.length);
			   })
			   .attr("y", function(d) {
			   		return h - (d * 10);
			   })
			   .attr("width", w / dataset.length - barPadding)
			   .attr("height", function(d) {
			   		return d * 10;
			   })
			   .attr("fill", function(d){
			   		
			   		return "rgb(" + ((d - 80) * 1.2) + ", 0, " + ((255 - d) * 2) + ")";
			   });

			svg.selectAll("text")
			   .data(dataset)
			   .enter()
			   .append("text")
			   .text(function(d) {
			   		return d + " Days";
			   })
			   .attr("text-anchor", "middle")
			   .attr("x", function(d, i) {
			   		return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
			   })
			   .attr("y", function(d) {
			   		return h - (d * 1.5) + 0;
			   })
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "16px")
			   .attr("fill", function(d){
			   		return "rgb(" + (d * 4 + 135) + ", " + (d * 4 + 135) + ", " + (d * 4 + 135) + ")";
			   });

			svg.selectAll("text")
			   .data(barID)
			   .enter()
			   .append("text")
			   .text(function(d) {
			   		return d;
			   })
			   .attr("text-anchor", "middle")
			   .attr("x", function(d, i) {
			   		return i * (w / dataset.length) + (w / dataset.length - barPadding) / 2;
			   })
			   .attr("y", function(d) {
			   		return h - (d * 1.5) + 24
			   })
			   .attr("font-family", "sans-serif")
			   .attr("font-size", "16px")
			   .attr("fill", "white");



(function($) {

	skel
		.breakpoints({
			desktop: '(min-width: 737px)',
			tablet: '(min-width: 737px) and (max-width: 1200px)',
			mobile: '(max-width: 736px)'
		})
		.viewport({
			breakpoints: {
				tablet: {
					width: 1080
				}
			}
		});

	$(function() {

		var	$window = $(window),
			$body = $('body');

		// Disable animations/transitions until the page has loaded.
			$body.addClass('is-loading');

			$window.on('load', function() {
				$body.removeClass('is-loading');
			});

		// Fix: Placeholder polyfill.
			$('form').placeholder();

		// CSS polyfills (IE<9).
			if (skel.vars.IEVersion < 9)
				$(':last-child').addClass('last-child');

		// Prioritize "important" elements on mobile.
			skel.on('+mobile -mobile', function() {
				$.prioritize(
					'.important\\28 mobile\\29',
					skel.breakpoint('mobile').active
				);
			});

		// Dropdowns.
			$('#nav > ul').dropotron({
				mode: 'fade',
				noOpenerFade: true,
				alignment: 'center',
				detach: false
			});

		// Off-Canvas Navigation.

			// Title Bar.
				$(
					'<div id="titleBar">' +
						'<a href="#navPanel" class="toggle"></a>' +
						'<span class="title">' + $('#logo').html() + '</span>' +
					'</div>'
				)
					.appendTo($body);

			// Navigation Panel.
				$(
					'<div id="navPanel">' +
						'<nav>' +
							$('#nav').navList() +
						'</nav>' +
					'</div>'
				)
					.appendTo($body)
					.panel({
						delay: 500,
						hideOnClick: true,
						hideOnSwipe: true,
						resetScroll: true,
						resetForms: true,
						side: 'left',
						target: $body,
						visibleClass: 'navPanel-visible'
					});

			// Fix: Remove navPanel transitions on WP<10 (poor/buggy performance).
				if (skel.vars.os == 'wp' && skel.vars.osVersion < 10)
					$('#titleBar, #navPanel, #page-wrapper')
						.css('transition', 'none');

	});

})(jQuery);