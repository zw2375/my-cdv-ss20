let container = d3.select("#container")
  .append("svg")
    .attr("id","viz")
    .attr("width",1500)
    .attr("height",1000)
;
headline = container.append("text")
    .attr("x",100)
    .attr("font-size",90)
    .attr("font-family","fantasy")
    .attr("font-weight", "bold")
    .html("<tspan class= 'red'>H</tspan><tspan class='yellow'>o</tspan><tspan class='green'>w</tspan> <tspan class='blue'>t</tspan><tspan class= 'red'>o</tspan> <tspan class='green'>r</tspan><tspan class='yellow'>e</tspan><tspan class='blue'>a</tspan><tspan class= 'red'>d</tspan> ")
    ;
headline.selectAll(".red")
   .attr("fill","#F25F5C")
   .attr("y",110)
   ;

headline.selectAll(".yellow")
   .attr("fill","#FFE066")
   .attr("y",110)
   ;

headline.selectAll(".green")
  .attr("fill","#70C1B3")
  .attr("y",90)
  ;

headline.selectAll(".blue")
  .attr("fill","#247BA0")
  .attr("y",115)
  ;


  var lineData = [ { "x": 700,   "y": 670},  { "x": 100,  "y": 705},
                   { "x": 70,  "y": 605}, { "x": 100,  "y": 650},
                   { "x": 1020,  "y": 700}, ];


  var lineFunction = d3.line()
    .x(function(d) { return d.x; })
    .y(function(d) { return d.y; })
    .curve(d3.curveNatural);


 var lineGraph = container.append("path")
                             .attr("d", lineFunction(lineData))
                             .attr("stroke", "#FFE066")
                             .attr("stroke-width", 9)
                             .attr("fill", "#FFE066")
                             ;

  var lineData = [ { "x": 950,   "y": 97},  { "x": 1100,  "y": 107},
                   { "x": 900,  "y": 72}, { "x": 600,  "y": 42},
                   { "x": 800,  "y": 57},  { "x": 600, "y": 62}];


  var lineFunction = d3.line()
   .x(function(d) { return d.x; })
   .y(function(d) { return d.y; })
   .curve(d3.curveNatural);



  var lineGraph = container.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "#70C1B3")
                            .attr("stroke-width", 8)
                            .attr("fill", "#70C1B3")
                            ;
  var lineData = [ { "x": 150,   "y": 117},  { "x": 50,  "y":157},
                  //{ "x": 50,  "y": 112}, { "x": 80,  "y": 250},
                  { "x": 90,  "y": 200},  { "x": 30, "y": 750}];


  var lineFunction = d3.line()
   .x(function(d) { return d.x; })
   .y(function(d) { return d.y; })
   .curve(d3.curveNatural);



  var lineGraph = container.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "#247BA0")
                            .attr("stroke-width", 6)
                            .attr("fill", "#247BA0")
                            ;
  var lineData = [ { "x": 1090,   "y": 707},  { "x": 1000,  "y": 107},
                  { "x": 1000,  "y": 202}, { "x": 1090,  "y": 560},
                  { "x":950, "y": 710}];


  var lineFunction = d3.line()
   .x(function(d) { return d.x; })
   .y(function(d) { return d.y; })
   .curve(d3.curveNatural);



  var lineGraph = container.append("path")
                            .attr("d", lineFunction(lineData))
                            .attr("stroke", "#F25F5C")
                            .attr("stroke-width", 5)
                            .attr("fill", "#F25F5C")
                            ;
container.append("text")
          .attr("x",200)
          .attr("y",200)
          .attr("font-size",35)
          .attr("font-family","fantasy")
          .attr("font-weight", "bold")
          .text("Reasons:")
          .attr("fill","#F25F5C")
          ;
// container.append("ellipse")
//           .attr("cx", 240)
//           .attr("cy", 190)
//           .attr("rx", 60)
//           .attr("ry",30)
//           .attr("stroke","#FFE066")
//           .attr("stroke-width",3)
//           .attr("stroke-dasharray", 15)
//           .attr("fill","none")
//           .attr("fill-opacity",0.3)
//           ;

container.append("circle")
          .attr("cx",550)
          .attr("cy",200)
          .attr("r",30)
          .attr("fill","#FFE066")
          .attr("fill-opacity",0.7)
          ;
container.append("text")
          .attr("x",360)
          .attr("y",200)
          .attr("fill","#FFE066")
          .text("Having a good mood")
          .attr("font-family","fantasy")
          ;

container.append("circle")
          .attr("cx",600)
          .attr("cy",200)
          .attr("r",30)
          .attr("fill","#70C1BB")
          .attr("fill-opacity",0.7)
          ;

container.append("text")
          .attr("x",650)
          .attr("y",200)
          .attr("fill","#70C1B3")
          .text("Come across sth funny in real life")
          .attr("font-family","fantasy")
          ;

container.append("circle")
          .attr("cx",550)
          .attr("cy",300)
          .attr("r",30)
          .attr("fill","#247BA0")
          .attr("fill-opacity",0.7)
          ;

container.append("text")
          .attr("x",290)
          .attr("y",300)
          .attr("fill","#247BA0")
          .text("Come up with something funny")
          .attr("font-family","fantasy")
          ;

container.append("circle")
          .attr("cx",600)
          .attr("cy",300)
          .attr("r",30)
          .attr("fill","#F25F5C")
          .attr("fill-opacity",0.7)
          ;

container.append("text")
          .attr("x",650)
          .attr("y",300)
          .attr("fill","#F25F5C")
          .text("Watch sth funny online")
          .attr("font-family","fantasy")
          ;

container.append("text")
          .attr("x",200)
          .attr("y",350)
          .attr("font-size",35)
          .attr("font-family","fantasy")
          .text("Type:")
          .attr("fill","#FFE066")
          ;

container.append("circle")
           .attr("cx",340)
           .attr("cy",380)
           .attr("r", 30)
           .attr("fill","#70C1BB")
           ;

container.append("circle")
          .attr("cx", 340)
          .attr("cy", 380)
          .attr("r", 15)
          .attr("fill","white")
          ;

container.append("circle")
          .attr("cx", 340)
          .attr("cy", 380)
          .attr("r", 10)
          .attr("fill","#70C1BB")
          ;

container.append("text")
          .attr("x",320)
          .attr("y",430)
          .attr("fill","#70C1BB")
          .text("Giggle")
          .attr("font-family","fantasy")
          ;

container.append("circle")
           .attr("cx",457)
           .attr("cy",380)
           .attr("r", 30)
           .attr("fill","#F25F5C")
           ;

container.append("rect")
           .attr("x", 444)
           .attr("y", 368)
           .attr("width", 25)
           .attr("height",25)
           .attr("fill","white")
           ;

container.append("rect")
          .attr("x", 447)
          .attr("y", 371)
          .attr("width", 18)
          .attr("height",18)
          .attr("fill","#F25F5C")
          ;

container.append("text")
          .attr("x",390)
          .attr("y",430)
          .attr("fill","#F25F5C")
          .text("Using emoji or stickers")
          .attr("font-family","fantasy")
          ;


container.append("circle")
           .attr("cx",590)
           .attr("cy",380)
           .attr("r", 30)
           .attr("fill","#247BA0")
           ;

 container.append("ellipse")
           .attr("cx", 591)
           .attr("cy", 380)
           .attr("rx", 25)
           .attr("ry",15)
           .attr("fill","white")
           ;

  container.append("ellipse")
           .attr("cx", 591)
           .attr("cy", 380)
           .attr("rx", 20)
           .attr("ry",10)
           .attr("fill","#247BA0")
           ;

container.append("text")
         .attr("x",570)
         .attr("y",430)
         .attr("fill","#247BA0")
         .text("Typing hahaha")
         .attr("font-family","fantasy")
         ;

container.append("text")
         .attr("x",200)
         .attr("y",470)
         .attr("font-size",35)
         .attr("font-family","fantasy")
         .attr("font-weight", "bold")
         .text("Object:")
         .attr("fill","#70C1BB")
         ;

container.append("circle")
          .attr("cx",400)
          .attr("cy",480)
          .attr("r", 30)
          .attr("fill","#FFE066")
          ;

container.append("line")
              .attr("x1",370)
              .attr("x2",510)
              .attr("y1",450)
              .attr("y2",590)
              .attr("stroke","white")
              .attr("stroke-width",5)
              ;

container.append("line")
              .attr("x1",430)
              .attr("x2",370)
              .attr("y1",450)
              .attr("y2",510)
            .attr("stroke","white")
              .attr("stroke-width",5)
              ;

container.append("text")
         .attr("x",370)
         .attr("y",530)
         .attr("font-family","fantasy")
         .attr("font-weight", "bold")
         .text("Friends")
         .attr("fill","#FFE066")
         ;

container.append("circle")
          .attr("cx",520)
          .attr("cy",480)
          .attr("r", 30)
          .attr("fill","#FFE066")
          ;

container.append("line")
              .attr("x1",520)
              .attr("x2",520)
              .attr("y1",450)
              .attr("y2",510)
              .attr("stroke","white")
              .attr("stroke-width",5)
              ;

container.append("line")
              .attr("x1",490)
              .attr("x2",550)
              .attr("y1",480)
              .attr("y2",480)
              .attr("stroke","white")
              .attr("stroke-width",5)
              ;

container.append("text")
         .attr("x",497)
         .attr("y",530)
         .attr("font-family","fantasy")
         .attr("font-weight", "bold")
         .text("Family")
         .attr("fill","#FFE066")
         ;

container.append("text")
        .attr("x",200)
        .attr("y",570)
        .attr("font-size",35)
        .attr("font-family","fantasy")
        .attr("font-weight", "bold")
        .text("Time:")
        .attr("fill","#247BA0")
        ;

container.append("circle")
          .attr("cx",340)
          .attr("cy",580)
          .attr("r", 30)
          .attr("fill","#F25F5C")
          ;
container.append("circle")
          .attr("cx", 338)
          .attr("cy", 561)
          .attr("r", 5)
          .attr("fill","white")
          ;

container.append("text")
         .attr("x",312)
         .attr("y",625)
         .attr("font-family","fantasy")
         .attr("font-weight", "bold")
         .text("Morning")
         .attr("fill","#F25F5C")
         ;

container.append("circle")
          .attr("cx",457)
          .attr("cy",580)
          .attr("r", 30)
          .attr("fill","#70C1B3")
          ;

container.append("text")
         .attr("x",427)
         .attr("y",625)
         .attr("font-family","fantasy")
         .attr("font-weight", "bold")
         .text("Afternoon")
         .attr("fill","#70C1B3")
         ;

container.append("circle")
          .attr("cx",574)
          .attr("cy",580)
          .attr("r", 30)
          .attr("fill","#F25F5C")
          ;


container.append("circle")
          .attr("cx", 574)
          .attr("cy", 594)
          .attr("r", 5)
          .attr("fill","white")
          ;

container.append("text")
         .attr("x",549)
         .attr("y",625)
         .attr("font-family","fantasy")
         .attr("font-weight", "bold")
         .text("Evening")
         .attr("fill","#F25F5C")
         ;
