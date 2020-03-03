let container = d3.select("#container")
  .append("svg")
    .attr("id","viz")
    .attr("width",900)
    .attr("height",900)
;

d3.json("laughters.json").then(gotData);

function gotData(incomingLaughters){
  console.log(incomingLaughters);

  function chooseColor(incomingLaughters){
    if (incomingLaughters.time == "Morning") {
      return "white"
    }
    else if (incomingLaughters.time == "Afternoon") {
      return "orange"
    }
    else {
      return "black"
    }
  }

function randomNum(){
  return Math.random()*900;
}

  container.selectAll("circle").data(incomingLaughters).enter()
    .append("circle")
      .attr("fill", chooseColor)
      .attr("r",10)
      .attr('cx',randomNum)
      .attr('cy',randomNum)
;

}
