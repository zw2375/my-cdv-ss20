let w = 1500;
let h = 5000;
let xpadding = 100;
let ypadding = 50;



// put the svg onto the page:
let viz = d3.select("#container")
  .append("svg")
    .style("width", w)
    .style("height", h)
    .style("background-color","lavender")
;

d3.csv("heroes_information.csv").then(basicViz);
d3.csv("super_hero_powers.csv").then(powerViz);



//The viz of basic info

function basicViz(basicInfo){
  document.getElementById("buttonE").addEventListener("click", detailedDisplay);
  document.getElementById("buttonA").addEventListener("click", nameDisplay);
  console.log(basicInfo);




    function detailedDisplay(){

    let yDomain = d3.extent(basicInfo, function(d){ return d.Weight });
    let yScale = d3.scaleLinear().domain(yDomain).range([ypadding, w-ypadding]);
    let yAxis = d3.axisBottom(yScale);
    let yAxisGroup = viz.append("g")
        .attr("class", "yaxisgroup")
        .attr("transform", "translate(0,"+(h-ypadding)+")")
    ;
    yAxisGroup.call(yAxis);

    let basicInfoGroup = viz.selectAll(".basicInfoGroup").data(basicInfo).enter()
      .append("g")
        .attr("class","basicInfoGroup")
        ;

singleImg = basicInfoGroup.append("circle")
                    .attr("cx",w/2)
                    .attr("cy",function(d){
                      return yScale(d.Weight)
                    })
                    .attr("r",chooseSize)
                    .attr("class","singleHero")
                    .on("mouseover",function(d,i){


                      d3.select(this)
                        .transition()
                        .duration(500)
                        .attr("r",50);
                      textElement.text(d.name,d.gender)
                        .attr("x",function(d){
                          return d3.event.clientX
                        })
                        .attr("y",function(d){
                          return d3.event.clientY
                        })
                    })
                    .on("mouseout",function(d,i){
                      // textElement.text('');
                      d3.select(this)
                      .transition()
                      .attr("r",chooseSize)
                    })
                    ;



textElement = viz.append("text")
        .attr("x",w/2)
        .attr("y",h/2)
        .attr("font-size",90)
        .attr("fill","white")
        ;



   function chooseSize(){
     return (Math.random() * 30+ 10)
   }

  let simulation = d3.forceSimulation(basicInfo)
    .force("forceX",d3.forceX(w/2))
    .force("forceY",function(d){
      return d3.forceY(yScale(d.Weight))
    })
    .force("collide",d3.forceCollide().radius(function(d){
      return chooseSize() + chooseSize()/2
    }))
    .on("tick",simulationRan)
    ;

  basicInfo = basicInfo.map(function(datapoint){
    datapoint.x = w/2
    datapoint.y = yScale(datapoint.Weight)
    return datapoint
  })

  function simulationRan(){
    console.log(basicInfo[0].x);
    viz.selectAll(".singleHero")
    .attr("cx",function(d){
      return d.x
    })
    .attr("cy",function(d){
      return d.y
    })
  }
  }


  function nameDisplay(){
    viz.append("circle")
                .attr("cx",100)
                .attr("cy",100)
                .attr("r",20)
                ;

//gender specific


// a = superheroName[0].includes("ello")
// console.log(a);

   function calculate(d,i){

      var woman = 0;
       var  man = 0;
       var  girl =0;
       var  miss = 0;
       var  queen = 0;
       var  king = 0;
       var  mr = 0;
       var  directName = 0;
     // all can apply
       var   doctor = 0;

    console.log(superheroName);

    if (superheroName[i].includes("girl")) {
      girl  += 1
    }
    else if (superheroName[i].includes("girl"||"Girl")) {
      girl += 1
    }
    else if (superheroName[i].includes("miss"||"Miss")) {
      miss += 1
    }
    else if (superheroName[i].includes("queen"||"Queen")) {
      queen += 1
    }
    else if (superheroName[i].includes("king"||"King")) {
      king += 1
    }
    else if (superheroName[i].includes("mister"||"Mr")) {
      mister += 1
    }
    else {
      directName +=1
    }
    console.log(woman);
   }
   calculate()


  }








  superheroName = basicInfo.map(function(d,i){
      return String(d.name);
    })


//get img
  function getSuperheroImg(superheroName,callback){


  let accessToken = "224402655546228";
  let corsFix = "https://cors-anywhere.herokuapp.com/";
  let byNameURLbase = "https://superheroapi.com/api/"+ accessToken+"/search/";


  function getResponse(res){
    console.log(res.body);

    if (res.body.response == "error") {
      callback ("error");
    }else {
      callback (res.body.results[0].image.url)
    }
  }

  superagent
    .get(corsFix+byNameURLbase+ encodeURIComponent(superheroName))
    .then(getResponse)
    .catch(err => {
       // err.message, err.response
    });

  }



//  let imgURL = [];
//
//   for (i = 0; i < 733; i++) {
//   imgurl = getSuperheroImg(name[i],gotURL)
//   singleurl= {"name":name[i],"url":imgurl}
//   imgURL.push(singleurl);
// }
//   function getNameWithurl(d,i){
//     let imgURL = [];
//     imgurl = getSuperheroImg(name[i],gotURL)
//     singleurl= {"name":name[i],"url":imgurl}
//     imgURL.push(singleurl);
//     console.log(imgURL);
//   }
//
//   function gotURL(urlForImg){
//     console.log(urlForImg);
//   }
// getNameWithurl()
//
// singleImg.attr("fill","url ("+chooseImg+")")
//
// function chooseImg(d,i){
//     return imgURL[i].url
// }




}






function powerViz(powerData){
  console.log(powerData);
}
