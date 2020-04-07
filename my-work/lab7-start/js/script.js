// just some console.logging at the start to make
// sure the script runs and we have data (from dataManager.js)
console.log("\n\n\nWelcome!\n\n\n");
console.log("script runs.");
console.log("do we have data?");
// check if variable exists: https://stackoverflow.com/a/519157
console.log("data:", typeof data!=='undefined'?data:"nothing here");
console.log(typeof data!=='undefined'?"seems like it ;-) it comes from the dataManager.js script.":"...damnit! let's see what is going wrong in the dataManager.js script.");

// global variables that we need at various spots:
let w = 800;
let h = 500;
let padding = 100;

// put the svg onto the page:
let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
;

let allNames = data.map(function(d){return d.key});
console.log(allNames);



let xScale = d3.scaleBand()
    .domain(allNames)
    .range([padding, w-padding])
    .paddingInner(0.1)
;

let xAxis = d3.axisBottom(xScale)
xAxis.tickFormat(d=>{return data.filter(dd=>dd.key==d)[0].name;});

let xAxisGroup = viz.append("g").classed("xAxis", true);
xAxisGroup.call(xAxis);
xAxisGroup.selectAll("text").attr("font-size", 24).attr("y", 9);
xAxisGroup.selectAll("line").remove();
xAxisGroup.attr("transform", "translate(0,"+ (h-padding) +")")



let yMax = d3.max(data, function(d){return d.value});
yDomain = [0, yMax];
let yScale = d3.scaleLinear().domain(yDomain).range([0, h-padding*2]);



let graphGroup = viz.append("g").classed("graphGroup", true);


let elementsForPage = graphGroup.selectAll(".datapoint").data(data);
console.log("D3's assessment of whats needed on the page:", elementsForPage);

let enteringElements = elementsForPage.enter();
let exitingElements = elementsForPage.exit();
console.log("enteringElements", enteringElements);
console.log("exitingElements", exitingElements);

let enteringDataGroups = enteringElements.append("g").classed("datapoint", true);

enteringDataGroups.attr("transform", function(d, i){
  return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
});

enteringDataGroups
  .append("rect")
    .attr("width", function(){
      // the scaleBand we are using
      // allows us to as how thick each band is:
      return xScale.bandwidth();
    })
    .attr("height", function(d, i){
      // the idea is that we make the bar
      // as high as dictated by the value...
      return yScale(d.value);
    })
    .attr("y", function(d,i){
      // ...and then push the bar up since it
      // is drawn from top to bottom
      return -yScale(d.value);
    })
    .attr("fill", chooseColor)
    .attr("opacity",0.8)
;

function chooseColor(d,i){
  a = Math.floor(Math.random() * 5);
  if(a==0){
    return "#F27294"
  }
  else if (a==1) {
    return "#04ADBF"
  }
  else if (a==2) {
    return "#45BF9D"
  }
  else if (a==3){
    return "#F2E0D5"
  }
  else if (a==4){
    return "#F24C27"
  }

}


// console.log("new data", data)
function changeAdd(){

  elementsForPage = graphGroup.selectAll(".datapoint").data(data, (d)=>d.key);
	enteringElements = elementsForPage.enter();
	exitingElements = elementsForPage.exit();

  allNames = data.map(function(d){return d.key});
  xScale.domain(allNames);
  xAxis = d3.axisBottom(xScale);
  xAxis.tickFormat(d=>{return data.filter(dd=>dd.key==d)[0].name;});
  xAxisGroup.transition().duration(1000).call(xAxis).selectAll("text").attr("font-size", 24);
  xAxisGroup.selectAll("line").remove();

  yMax = d3.max(data, function(d){return d.value});
  yDomain = [0, yMax+yMax*0.1];
  yScale.domain(yDomain);



  elementsForPage.transition().duration(1000).attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });

  elementsForPage.select("rect")
   .transition()
   .delay(800)
   .duration(1200)
   .attr("width", function(){
      return xScale.bandwidth();
   })
   .attr("y", function(d,i){
     return -yScale(d.value);
   })
   .attr("height", function(d, i){
     return yScale(d.value);
   })

  ;

  let incomingDataGroups = enteringElements
    .append("g")
      .classed("datapoint", true)
  ;

  incomingDataGroups.attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });

  incomingDataGroups
    .append("rect")
      .attr("y", function(d,i){
        return 0;
      })
      .attr("height", function(d, i){
        return 0;
      })
      .attr("width", function(){
        return xScale.bandwidth();
      })
      .attr("fill", chooseColor)
      .attr("opacity",0.8)
      .transition()
      .delay(1200)
      .duration(2000)
      .attr("y", function(d,i){
        return -yScale(d.value);
      })
      .attr("height", function(d, i){
        return yScale(d.value);
      })
      .attr("fill", chooseColor)
      .attr("opacity",0.8)
   ;
 }

 function changeExit(){

  elementsForPage = graphGroup.selectAll(".datapoint").data(data, (d)=>d.key);
 	enteringElements = elementsForPage.enter();
 	exitingElements = elementsForPage.exit();



   allNames = data.map(function(d){return d.key});
   xScale.domain(allNames);
   xAxis = d3.axisBottom(xScale);
   xAxis.tickFormat(d=>{return data.filter(dd=>dd.key==d)[0].name;});
   xAxisGroup.transition().delay(1000).duration(500).call(xAxis).selectAll("text").attr("font-size", 24);

   yMax = d3.max(data, function(d){return d.value});
   yDomain = [0, yMax+yMax*0.1];
   yScale.domain(yDomain);


   elementsForPage.transition().delay(1000).duration(500).attr("transform", function(d, i){
     return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
   });



   elementsForPage.select("rect")
    .transition()
    .delay(1000)
    .duration(1000)
    .attr("width", function(){
       return xScale.bandwidth();
    })
    .attr("y", function(d,i){
      return -yScale(d.value);
    })
    .attr("height", function(d, i){
      return yScale(d.value);
    })
   ;
   exitingElements.select("rect")
    .transition()
  //  .delay(1000)
    .duration(1000)
    .attr("y",0)
    .attr("height",0)
    ;
   exitingElements.delay(2000).remove();

  }

function changeAddAndExit(){

  elementsForPage = graphGroup.selectAll(".datapoint").data(data, (d)=>d.key);
	enteringElements = elementsForPage.enter();
	exitingElements = elementsForPage.exit();

  allNames = data.map(function(d){return d.key});
  xScale.domain(allNames);
  xAxis = d3.axisBottom(xScale);
  xAxis.tickFormat(d=>{return data.filter(dd=>dd.key==d)[0].name;});
  xAxisGroup.transition().duration(1000).call(xAxis).selectAll("text").attr("font-size", 24);
  xAxisGroup.selectAll("line").remove();


  yMax = d3.max(data, function(d){return d.value});
  yDomain = [0, yMax+yMax*0.1];
  yScale.domain(yDomain);



  elementsForPage.transition().duration(1000).attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });

  elementsForPage.select("rect")
   .transition()
   .delay(800)
   .duration(1200)
   .attr("width", function(){
      return xScale.bandwidth();
   })
   .attr("y", function(d,i){
     return -yScale(d.value);
   })
   .attr("height", function(d, i){
     return yScale(d.value);
   })
  ;

  exitingElements.select("rect")
   .transition()
   .delay(1000)
   .duration(1000)
   .attr("y",0)
   .attr("height",0)
   ;

  exitingElements.transition().delay(1000).duration(1300).remove();

  let incomingDataGroups = enteringElements
    .append("g")
      .classed("datapoint", true)
  ;

  incomingDataGroups.attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });

  incomingDataGroups
    .append("rect")
      .attr("y", function(d,i){
        return 0;
      })
      .attr("height", function(d, i){
        return 0;
      })
      .attr("width", function(){
        return xScale.bandwidth();
      })
      .attr("fill", chooseColor)
      .attr("opacity",0.8)
      .transition()
      .delay(1200)
      .duration(2000)
      .attr("y", function(d,i){
        return -yScale(d.value);
      })
      .attr("height", function(d, i){
        return yScale(d.value);
      })
      .attr("fill", chooseColor)
      .attr("opacity",0.8)
   ;
 }

function update(){
  elementsForPage = graphGroup.selectAll(".datapoint").data(data, (d)=>d.key);
	enteringElements = elementsForPage.enter();
	exitingElements = elementsForPage.exit();

  allNames = data.map(function(d){return d.key});
  xScale.domain(allNames);
  xAxis = d3.axisBottom(xScale);
  xAxis.tickFormat(d=>{return data.filter(dd=>dd.key==d)[0].name;});
  xAxisGroup.transition().duration(1000).call(xAxis).selectAll("text").attr("font-size", 24);

  yMax = d3.max(data, function(d){return d.value});
  yDomain = [0, yMax+yMax*0.1];
  yScale.domain(yDomain);



  elementsForPage.transition().duration(1000).attr("transform", function(d, i){
    return "translate("+ xScale(d.key)+ "," + (h - padding) + ")"
  });

  elementsForPage.select("rect")
   .transition()
   .delay(1000)
   .duration(200)
   .attr("width", function(){
      return xScale.bandwidth();
   })
   .attr("y", function(d,i){
     return -yScale(d.value);
   })
   .attr("height", function(d, i){
     return yScale(d.value);
   })
  ;
}

function changeFont(){

  xAxisGroup.transition().duration(1000).call(xAxis).selectAll("text").attr("font-size", decideFont);

  function decideFont(){
    return getRandom(100,1000)
  }

}







function add(){
  addDatapoints(1);
  changeAdd();
}
document.getElementById("buttonA").addEventListener("click", add);

function remove(){
  removeDatapoints(1);
  changeExit();
}
document.getElementById("buttonB").addEventListener("click", remove);

function removeAndAdd(){
  removeAndAddDatapoints(1,1);
  changeAddAndExit();
}
document.getElementById("buttonC").addEventListener("click", removeAndAdd);

function sortData(){
  sortDatapoints();
  update()
}
document.getElementById("buttonD").addEventListener("click", sortData);

function shuffleData(){
  shuffleDatapoints();
  update();
}
document.getElementById("buttonE").addEventListener("click", shuffleData);

function secretFunction(){
  shuffleData();
  changeFont();
}
document.getElementById("buttonF").addEventListener("click", secretFunction);
