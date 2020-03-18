let container = d3.select("#container")
.append("svg")
.attr("id","viz")
.attr("width",3000)
.attr("height",1000)
;


// data functions can be oit of gotData because they dont rely on the data being loaded (since before that they arenot called anyway)
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

function randomX(){
  return Math.random()*1000;
}

function randomY(){
  return Math.random()*1000;
}

function randomPosition(d,i){
  let x = i*50;
  let amplitude = 20;
  let frequency = 5;
  let y = 250 + Math.sin(i/frequency)*amplitude;
  console.log (d,i)
  console.log ("_")
  return "translate(" + x + ", " + y +")";
}


// feel free to put datafunciotns into gotData if your prefer it..... but maybe it's easier to look at that way






d3.json("laughters.json").then(gotData);

function gotData(incomingLaughters){
  console.log(incomingLaughters);


  let laughters = container.selectAll(".laughters").data(incomingLaughters).enter()
  .append ("g")
  .attr("class", "laughters")  // should correpond with what you select above, "select what you are about to create"
  ;

  laughters.attr("transform",randomPosition);

  laughters.append("circle")
  .attr("cx",0)
  .attr("cy",0)
  .attr("r",30)
  .attr("fill",chooseColor)
  .attr("class", "singleLaughter")   //<- this is simply good practise to keep things organized.
  ;
  // if (incomingLaughters.typeOfLaughters == "Giggle ") {
  //   laughters.append("circle")
  //   .attr("cx",0)
  //   .attr("cy",0)
  //   .attr("r",30)
  //   .attr("fill",chooseColor)
  //   .attr("class", "singleLaughter")   //<- this is simply good practise to keep things organized.
  //   ;
  //


  function filterCircle(element){
  if( element.typeOfLaughters == "Giggle " ){
    return true;
    }else{
    return false;
  }
}

function filterRect(element){
if( element.typeOfLaughters == "Using emoji or stickers" ){
  return true;
  }else{
  return false;
}
}

function filterEllipse(element){
  if( element.typeOfLaughters != "Using emoji or stickers" && element.typeOfLaughters != "Giggle "){
    return true;
    }else{
    return false;
  }
}

function filterCross(element){
  if (element.object == "Friends") {
    return true;
  }else {
    return false;
  }
}
function filterAnotherCross(element){
  if (element.object != "Friends") {
    return true;
  }else {
    return false;
  }
}

function filterMorning(element){
  if (element.time == "Morning"){
    return true;
  }else {
    return false;
  }
}
function filterEvening(element){
  if (element.time == "Evening"){
    return true;
  }else {
    return false;
  }
}
function filterNoon(element){
  if (element.time != "Evening" &&element.time != "Morning"){
    return true;
  }else {
    return false;
  }
}

laughters.filter(filterCircle).append("circle")
     .attr("cx", 0)
     .attr("cy", 0)
     .attr("r", 15)
     .attr("fill","white")
     .attr("class","middleCircle")
     ;
laughters.filter(filterCircle).append("circle")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("r", 10)
    .attr("fill",chooseColor)
    .attr("class","smallCircle")
    ;

laughters.filter(filterRect).append("rect")
    .attr("x", 0)
    .attr("y", 0)
    .attr("width", 15)
    .attr("height",15)
    .attr("fill","white")
    .attr("class","middleRect")
    ;

laughters.filter(filterEllipse).append("ellipse")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("rx", 25)
    .attr("ry",15)
    .attr("fill","white")
    .attr("class","middleEllipse")
    ;
laughters.filter(filterEllipse).append("ellipse")
    .attr("cx", 0)
    .attr("cy", 0)
    .attr("rx", 20)
    .attr("ry",10)
    .attr("fill",chooseColor)
    .attr("class","smallEllipse")
    ;

laughters.filter(filterCross).append("line")
    .attr("x1",-30)
    .attr("x2",30)
    .attr("y1",-30)
    .attr("y2",30)
    .attr("stroke","white")
    .attr("stroke-width",5)
    .attr("class","crossline")
    ;
laughters.filter(filterCross).append("line")
    .attr("x1",30)
    .attr("x2",-30)
    .attr("y1",-30)
    .attr("y2",30)
    .attr("stroke","white")
    .attr("stroke-width",5)
    .attr("class","cross")
    ;
laughters.filter(filterAnotherCross).append("line")
    .attr("x1",0)
    .attr("x2",0)
    .attr("y1",-30)
    .attr("y2",30)
    .attr("stroke","white")
    .attr("stroke-width",5)
    .attr("class","anotherCross")
    ;
laughters.filter(filterAnotherCross).append("line")
    .attr("x1",-30)
    .attr("x2",30)
    .attr("y1",0)
    .attr("y2",0)
    .attr("stroke","white")
    .attr("stroke-width",5)
    .attr("class","anotherCross")
    ;

laughters.filter(filterMorning).filter(filterAnotherCross).append("circle")
    .attr("cx", -14)
    .attr("cy", -19)
    .attr("r", 5)
    .attr("fill","white")
    .attr("class","Morning")
    ;
laughters.filter(filterEvening).filter(filterAnotherCross).append("circle")
    .attr("cx", 14)
    .attr("cy", 19)
    .attr("r", 5)
    .attr("fill","white")
    .attr("class","Evening")
    ;
laughters.filter(filterMorning).filter(filterCross).append("circle")
    .attr("cx", -0)
    .attr("cy", -22)
    .attr("r", 5)
    .attr("fill","white")
    .attr("class","Morning")
    ;
laughters.filter(filterEvening).filter(filterCross).append("circle")
    .attr("cx", 0)
    .attr("cy", 20)
    .attr("r", 5)
    .attr("fill","white")
    .attr("class","Evening")
    ;




}
