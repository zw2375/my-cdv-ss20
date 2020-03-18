let container = d3.select("#container")
  .append("svg")
    .attr("id","viz")
    .attr("width",1500)
    .attr("height",1000)
;


firstLine = container.append("text")
    .attr("x",100)
//    .attr("y",200)
    .attr("fill", "black")
    .attr("font-size",150)
    .attr("font-family","fantasy")
    .attr("font-weight", "bold")
    .html("<tspan class= 'red'>W</tspan><tspan class='yellow'>e</tspan><tspan class='green'>l</tspan><tspan class='blue'>c</tspan><tspan class= 'red'>o</tspan><tspan class='green'>m</tspan><tspan class='yellow'>e</tspan> ")
;

firstLine.selectAll(".red")
  .attr("fill","#F25F5C")
  .attr("y",200)
  ;

firstLine.selectAll(".yellow")
  .attr("fill","#FFE066")
  .attr("y",230)
  ;

firstLine.selectAll(".green")
  .attr("fill","#70C1B3")
  .attr("y",170)
  ;

firstLine.selectAll(".blue")
  .attr("fill","#247BA0")
  .attr("y",200)
  ;

  secondLine = container.append("text")
      .attr("x",300)
      .attr("y",400)
      .attr("fill", "black")
      .attr("font-size",150)
      .attr("font-family","fantasy")
      .attr("font-weight", "bold")
      .html("<tspan class='blue'>T</tspan><tspan class='green'>o</tspan> ")
;
secondLine.selectAll(".green")
  .attr("fill","#70C1B3")
  ;

secondLine.selectAll(".blue")
  .attr("fill","#247BA0")
  ;
thirdLine = container.append("text")
    .attr("x",160)
    .attr("fill", "black")
    .attr("font-size",120)
    .attr("font-family","fantasy")
    .attr("font-weight", "bold")
    .html("<tspan class='yellow'>t</tspan><tspan class='blue'>h</tspan><tspan class='yellow'>e</tspan> <tspan class= 'red'>h</tspan><tspan class='green'>a</tspan><tspan class='blue'>p</tspan><tspan class='yellow'>p</tspan><tspan class= 'red'>y</tspan> <tspan class='green'>w</tspan><tspan class='blue'>o</tspan><tspan class= 'red'>r</tspan><tspan class='blue'>l</tspan><tspan class='green'>d</tspan>")
;
thirdLine.selectAll(".red")
  .attr("fill","#F25F5C")
  .attr("y", 640)
  ;

thirdLine.selectAll(".yellow")
  .attr("fill","#FFE066")
  .attr("y",600)
  ;

thirdLine.selectAll(".green")
  .attr("fill","#70C1B3")
  .attr("y",580)
  ;

thirdLine.selectAll(".blue")
  .attr("fill","#247BA0")
  .attr("y",630)
  ;
function chooseX(d,i){
  return (i*200+180)
}

function findColor(d,i){
  if (i == 1) {
    return "#FFE066"
  }
  else if (i == 2){
    return "#70C1B3"
  }
  else if (i == 3){
    return "#247BA0"
  }
  else {
    return "#F25F5C"
  }
}
container.selectAll("circle").data([1,2,3,4,5]).enter()
  .append("circle")
    .attr("cx",chooseX)
    .attr("cy",750)
    .attr("r",20)
    .attr("fill",findColor)
;

let face1 = container.append("g")
    .attr("class","face1")
;
face1.append("circle")
        .attr("cx",950)
        .attr("cy",150)
        .attr("r",80)
        .attr("fill","#F25F5C")
;
face1.append("text")
        .attr("x",900)
        .attr("y",150)
        .text("´∀`")
        .attr("font-size",60)
        .attr("fill","#922B21")
;
let face2 = container.append("g")
    .attr("class","face2")
;
face2.append("circle")
        .attr("cx",100)
        .attr("cy",400)
        .attr("r",50)
        .attr("fill","#247BA0")
;
face2.append("text")
        .attr("x",50)
        .attr("y",430)
        .text("´◡`")
        .attr("font-size",60)
        .attr("fill","#154360")
;
