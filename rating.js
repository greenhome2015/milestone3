 energyRating = ["A++", "A+", "A", "B", "C"]
  
 var svgContainer = d3.select("#rate").append("svg")
                                     .attr("width", 32)
                                     .attr("height", 192);
 
 var circles = svgContainer.selectAll("circle")
                           .data(energyRating)
                           .enter()
                          .append("circle")

 var circleAttributes = circles
                       .attr("cx", 16)
					   .attr("cy", function(d,i) {return i*40 + 16; })
                       .attr("r", 16)
                       .style("fill", function(d) {
						 var returnColor;
                         if (d === "A++") { returnColor = "#4CAF50";
                         } else if (d === "A+") { returnColor = "#ccff90";
                         } else if (d === "A") { returnColor = "#ffea00";
						 } else if (d === "B") { returnColor = "#ffb300";
						 } else if (d === "C") { returnColor = "#ff5252";}
                         return returnColor;
                       });
