let container = d3.select("#container")
  .append("svg")
    .attr("id","viz")
    .attr("width",1000)
    .attr("height",1000)
;

// container.append("text")
//       .attr("x",100)
//       .attr("y",200)
//       .text("W")
//       .attr("fill","#F25F5C")
//       .attr("font-size",200 )
//       .attr("font-family","fantasy")
// ;
words = container.append("text")
    .attr("x",100)
    .attr("y",200)
    .attr("fill", "black")
    .html("<tspan class= 'red'>y</tspan><tspan class='yellow'>o</tspan><tspan class='blue'>u</tspan>r text here i want to <tspan>highlight</tspan> some words")
  //  .selectAll("tspan")
    ;
  words.selectAll(".red")
    .attr("fill","#F25F5C")
    ;
  words.selectAll(".yellow")
    .attr("fill","#FFE066")
    ;
