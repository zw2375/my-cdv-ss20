let w = 1200;
let h = 800;
let padding = 90

// SVG
let viz = d3.select("#container").append("svg")
    .style("width", w)
    .style("height", h)
    .style("background-color", "lavender")
;
var tooltip = d3.select('body').append('div')
           .attr('class', 'hidden tooltip');

// IMPORT DATA
d3.json("mainland.geojson").then(function(geoData){
  d3.csv("china-pop-2018.csv").then(function(incomingData){
    console.log (incomingData);

    incomingData=incomingData.map(function(d,i){
    d.population = Number(d.population)
    return d;
  })

  let minPop=d3.min(incomingData,function(d,i){
    return d.population;
  })
  // console.log(minPop);
  let maxPop=d3.max(incomingData,function(d,i){
    return d.population;
  })

    let colorScale = d3.scaleLinear().domain([minPop,maxPop]).range(["white","#9719A4"])
    // PRINT DATA
    console.log(geoData);


  let projection = d3.geoEqualEarth()
    .translate([w/2,h/2])
  // //  .center([])
    .fitExtent([[padding,padding],[w-padding,h-padding]],geoData);

    let pathMaker = d3.geoPath(projection);

    let mouseOver = function(d) {
        d3.selectAll(".province")
          .transition()
          .duration(200)
          .style("opacity", .5)
        d3.select(this)
          .transition()
          .duration(200)
          .style("opacity", 10)
          .transition()
          .duration(500)
          .style("stroke", "black")

      }

      let mouseLeave = function(d) {
        d3.selectAll(".province")
          .transition()
          .duration(200)
          .style("opacity", .9)
        d3.select(this)
          .transition()
          .duration(200)

      }

    // CREATE SHAPES ON THE PAGE!
provinces = viz.append("g").selectAll("path").data(geoData.features).enter()
              .append("path")
                .attr("class", function(d){ return "province" } )
                .attr("d", pathMaker)
                .attr("fill", function(d,i){
                  let correspondingDatapoint = incomingData.find(function(datapoint){
                    if(datapoint.province == d.properties.name){
                      return true
                    }else {
                      return false
                    }
                  })
                  if(correspondingDatapoint != undefined){
                    return colorScale(correspondingDatapoint.population);
                  }else{
                    return "white"
                  }
                })
                .attr("stroke", "transparent")
                .style("opacity", 1)
                .on("mouseover", mouseOver )
                .on("mouseleave", mouseLeave )









    })
  });
