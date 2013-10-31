require(['jquery', 'raphael-min'],
	function($, raphael) {
		'use strict';
		console.log("toots jr");
		window.DEMO = window.DEMO || {
			init: function() {
				this.raphaelDemo('canvas',66,33,30);
			},

			raphaelDemo: function(elem, outer, inner, strokeWidth) {
			var r = Raphael(elem);
				r.customAttributes.arc = function (xloc, yloc, value, total, radius) {
					var alpha = 360 / total * value,
						a = (90 - alpha) * Math.PI / 180,
						x = xloc + radius * Math.cos(a),
						y = yloc - radius * Math.sin(a),
						path;
					if (total == value) {
						path = [
							['M', xloc, yloc - radius],
							['A', radius, radius, 0, 1, 1, xloc - 0.01, yloc - radius]
						];
					} else {
						path = [
							['M', xloc, yloc - radius],
							['A', radius, radius, 0, + (alpha > 180), 1, x, y]
						];
					}
					return {
						path: path
					};
				};

				var sideX = r.width / 2,
					sideY = r.height / 2,
					adjRadiusOuter = sideX - strokeWidth,
					adjRadiusInner = (sideX-(strokeWidth*2)) - strokeWidth;
//console.log(r)
				var outerTrack = r.path().attr({
					'stroke': '#0080d9',
					'stroke-width': strokeWidth,
					arc: [sideX, sideY, 100, 100, adjRadiusOuter]
				});

				var innerTrack = r.path().attr({
					'stroke': '#bffeff',
					'stroke-width': strokeWidth,
					arc: [sideX, sideY, 100, 100, adjRadiusInner]
				});

				var outerStat = r.path().attr({
					'stroke': '#ff80d9',
					'stroke-width': strokeWidth,
					arc: [sideX, sideY, 0, 100, adjRadiusOuter]
				});

				var innerStat = r.path().attr({
					'stroke': '#00feff',
					'stroke-width': strokeWidth,
					arc: [sideX, sideY, 0, 100, adjRadiusInner]
				});

				outerStat.animate({
					arc: [sideX, sideY, outer, 100, adjRadiusOuter]
				}, 1000, 'easeInOut');

				innerStat.animate({
					arc: [sideX, sideY, inner, 100, adjRadiusInner]
				}, 1500, 'easeInOut');
			}
		};

	$(document).ready(function() {
		window.DEMO.init();
	});
});
