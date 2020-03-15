let container = d3.select("#container")
  .append("svg")
    .attr("id","viz")
    .attr("width",1000)
    .attr("height",1000)
;

container.append("circle")
      .attr("cx",500)
      .attr("cy",500)
      .attr("r",20)
      .attr("fill","#F25F5C")
  ;

d3.json("laughters.json").then(gotData);

function gotData(incomingLaughters){
  console.log(incomingLaughters);

  function chooseColor(incomingLaughters){
    if (incomingLaughters.purposeReasonOfLaughters == "Watch sth funny online") {
      return "#F25F5C"
    }
    else if (incomingLaughters.purposeReasonOfLaughters == "Having a good mood") {
      return "#FFE066"
    }
    else if (incomingLaughters.purposeReasonOfLaughters == "Come across sth funny in real life") {
      return "#70C1B3"
    }
    else {
      return "#247BA0"
    }
  }
  function chooseSize(incomingLaughters){
    if (incomingLaughters.typeOfLaughters == "Giggle ") {
      return 3
    }
    else if (incomingLaughters.typeOfLaughters == "Using emoji or stickers") {
      return 5
    }
    else {
      return 7
    }
  }

function randomX(){
  return Math.random()*1000;
}
function randomY(){
  return Math.random()*1000;
}
function randomPosition(d,i){
  let x = i*10;
  let amplitude = 10;
  let frequency = 5;
  let y = 100 + Math.sin(i/frequency)*amplitude;
  console.log (d,i)
  console.log ("_")
  return "translate(" + x + ", " + y +")";
}


let laughters = container.selectAll(".laughters").data(incomingLaughters).enter()
  .append ("g")
    .attr("class","laughters")
;

laughters.attr("transform",randomPosition);

laughters.append("circle")
  .attr("cx",0)
  .attr("cy",0)
  .attr("r",10)
  .attr("fill",chooseColor)
;

laughters.append("circle")
.attr("cx",0)
.attr("cy",4)
.attr("r",chooseSize)
.attr("fill","#F8F8F8")
;
}
