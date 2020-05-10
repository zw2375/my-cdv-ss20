let w = 1300;
let h = 1500;
let xpadding = 50;
let ypadding = 50;
// put the svg onto the page:
let viz = d3.select("#visualizationWrapper")
  .append("svg")
    .style("width", w)
    .style("height", h)
  //  .style("background-color","lavender")
;
d3.csv("heroes_information.csv").then(basicViz);
let rScale = d3.scaleLinear().domain([0, 19]).range([50, 170]);


// function countedTitles(){
//
// }

function basicViz(basicInfo){
//  countedTitles = countedTitles(basicInfo)


  //specialNameWithQuantity = {"woman":5,"man":17,"girl":11,"boy":4,"ms":1,"mister":6,"king":2,"master":1,"captain":13}

      var woman = ["Batwoman V", "Catwoman", "Hawkwoman", "Hawkwoman II", "Hawkwoman III"];
      var man = ["Aquaman", "Batman", "Batman", "Batman II", "Birdman", "Cyborg Superman", "Darkman",
       "Deadman", "Hawkman", "Human Torch", "Iceman", "Liz Sherman", "Matt Parkman", "Ozymandias", "Plantman", "Sandman", "Superman"];
      var girl =["Batgirl", "Batgirl", "Batgirl III", "Batgirl IV", "Batgirl V", "Batgirl VI", "Elastigirl", "Hawkgirl", "Stargirl", "Supergirl", "Ultragirl"];
      var boy = ["Bumbleboy", "Hellboy", "Superboy", "Superboy-Prime"];
      var miss = ["Ms Marvel II"];
      var mister = ["Mister Fantastic", "Mister Freeze", "Mister Knife", "Mister Mxyzptlk", "Mister Sinister", "Mister Zsasz"];
      var king = ["Mockingbird", "Shrinking Violet"];
    // all can apply
      var master = ["Taskmaster"];
      var captain = ["Captain America", "Captain Atom", "Captain Britain", "Captain Cold", "Captain Epic", "Captain Hindsight", "Captain Mar-vell",
       "Captain Marvel", "Captain Marvel", "Captain Marvel II", "Captain Midnight", "Captain Planet", "Captain Universe"];




 let radiusforfemale = 1;
 let radiusformale = 1;
 let blue = "#020179";
 let red = "#dd0303";
 let color = blue;
 let femaleNum = "0";
 let maleNum = "0";
 let femalename = '';

  let femaleCircleGroup= viz.append("g")
                             .attr("class","femaleCircle");
  let maleCircleGroup= viz.append("g")
                            .attr("class","maleCircle");;

  femaleCircle = femaleCircleGroup.append("circle")
        .attr("cx",450)
        .attr("cy",300)
        .attr("r",120)
        .attr("class","femaleCircle")
        ;
  femaleNumber =femaleCircleGroup.append("text")
        .text(femaleNum)
        .attr("x",440)
        .attr("y",340)
        .attr("fill","white")
        .attr("font-family","Nanum Brush Script")
        .attr("font-size","7em")
        .attr("class","femaleCircle")
        ;
femaleName = femaleCircleGroup.append("text")
      .text('')
      .attr("x",100)
      .attr("y",440)
      .attr("fill",red)
      .attr("font-family","Nanum Brush Script")
      .attr("font-size","2em")
      .attr("class","femaleCircle")
      ;
  maleCircle =maleCircleGroup.append("circle")
        .attr("cx",950)
        .attr("cy",300)
        .attr("r", 120)
        .attr("class","maleCircle")
        ;

  maleNumber =maleCircleGroup.append("text")
    .text(maleNum)
    .attr("x",940)
    .attr("y",340)
    .attr("fill","white")
    .attr("font-family","Nanum Brush Script")
    .attr("font-size","7em")
    .attr("class","maleCircle")
    ;

function updateCircle(){
        femaleCircle
    			.transition()
          .duration(1000)
    			.attr("r", rScale(radiusforfemale))
    			.attr("fill", red)
          // .on("mouseover",function(){
          //   femaleName.text(femalename);
          // })
    	    ;

        femaleNumber
        .transition()
        .duration(1000)
        .text(femaleNum)
        ;
        femaleName
        .transition()
        .duration(1000)
        .text(femalename)
        ;

        maleCircle
  			  .transition()
          .duration(1000)
  			  .attr("r", rScale(radiusformale))
  			  .attr("fill", blue)
  	      ;
        maleNumber
          .transition()
          .duration(1000)
          .text(maleNum)
          ;

      }

updateCircle()


enterView({
	selector: '.womanAndMan',
	enter: function(el) {
	//	color = red;
    radiusforfemale = 5;
    radiusformale = 19;
    femaleNum = "5"
    maleNum = "19"
    femalename = woman.toString();

		updateCircle();
	},
	exit: function(el) {
    radiusforfemale = 0;
    radiusformale = 0;
    femaleNum = "0"
    maleNum = "0"
		updateCircle();
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});

enterView({
	selector: '.girlAndBoy',
	enter: function(el) {
    radiusforfemale =11;
    radiusformale = 4;
    femaleNum = "11"
    maleNum = "4"
    femalename = girl.toString();
		updateCircle();
	},
	exit: function(el) {
    radiusforfemale = 0;
    radiusformale = 0;
    femaleNum = "0"
    maleNum = "0"
		updateCircle();
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});

enterView({
	selector: '.MsAndMister',
	enter: function(el) {
    radiusforfemale= 1;
    radiusformale = 6;
    femaleNum = "1"
    maleNum = "6"
		updateCircle();
	},
	exit: function(el) {
    radiusforfemale = 0;
    radiusformale = 0;
    femaleNum = "0"
    maleNum = "0"
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});



enterView({
	selector: '.queenAndKing',
	enter: function(el) {
    radiusforfemale= 0;
    radiusformale = 2;
    femaleNum = "0"
    maleNum = "2"
		updateCircle();
	},
	exit: function(el) {
    radiusforfemale = 0;
    radiusformale = 0;
    femaleNum = "0"
    maleNum = "0"
		updateCircle();
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});

enterView({
	selector: '.master',
	enter: function(el) {
    radiusforfemale= 0;
    radiusformale = 1;
    femaleNum = "0"
    maleNum = "1"
		updateCircle();
	},
	exit: function(el) {
    radiusforfemale = 0;
    radiusformale = 0;
    femaleNum = "0"
    maleNum = "0"
		updateCircle();
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});
enterView({
	selector: '.captain',
	enter: function(el) {
    radiusforfemale= 1;
    radiusformale = 12;
    femaleNum = "1"
    maleNum = "12"
		updateCircle();
	},
	exit: function(el) {
    radiusforfemale = 0;
    radiusformale = 0;
    femaleNum = "0"
    maleNum = "0"
		updateCircle();
	},
	offset: 0.5, // enter at middle of viewport
	// once: true, // trigger just once
});


 }
