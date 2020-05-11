let w = 1500;
let h = 5000;
let xpadding = 100;
let ypadding = 50;
let radius = 10;



// put the svg onto the page:
let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
  //  .style("background-color","lavender")
;
d3.csv("heroes_information.csv").then(visualizeAppearance);

function visualizeAppearance(){
  eyegroups =  viz.append("g");
  eyegroups.append("ellipse")
            .attr("cx",200)
            .attr("cy",200)
            .attr("rx",100)
            .attr("ry",40)
}
