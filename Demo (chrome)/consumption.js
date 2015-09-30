var consumption_now = 975.28 ;
var consumption_opt = 468.30 ;

var x = d3.scale.linear()
		.domain([0, d3.max(consumption_now)])
		.range([0, 500]);
		
d3.select(".chart").selectAll("div")
				   .data(consumption_now)
				   .enter()
				   .append("div")
				   .style("width", function (d) {return x(d) + "px";})
				   .text(function(d) {return d;});