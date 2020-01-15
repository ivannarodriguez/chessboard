d3.selectAll("p")
.style("color", "SkyBlue");

//1. make the background of the svg sky blue
d3.select("svg")
.style("background-color","SkyBlue")
//8. adjust for opacity of every element in he SVG to 0.3 ...
.style("fill-opacity", 0.3);

//2. add red border at the edge of your SVG
d3.select("svg")
.append("rect")
.attr("x", 0)
.attr("y", 0)
.attr("width", 600)
.attr("height", 200)
.attr("stroke", "red")
.attr("fill", "none")
.attr("stroke-width", 10); //8. ... except for the red border

//3. Change the text of the first h2 element to “A really simple description” 
//and make its color red.
d3.select("h2")
.text("A really simple description")
.style("color", "red");

//4. Change the color of the circle. You may pick the color.
d3.select("circle")
.style("fill", "DarkSeaGreen")
.style("stroke", "blue");

//5. Print some text to the console. 
//Be sure to check that you can see it in the developer view.
console.log("I am printing some text to the console.");

//6. remove text from SVG
d3.select("svg")
.select("text")
.remove();

//7.Add a second circle to the SVG. 
//Your circles should overlap and be different colors.
d3.select("svg")
.append("circle")
.attr("cx", 170)
.attr("cy", 100)
.attr("r", 40)
.attr("fill", "pink")
.style("stroke", "blue");
//.style("fill-opacity", 0.8);

//9. use a for loop to add 10 circles
let svg = d3.select("svg");
for (x=2; x<800; x=20*x){
    for(j=2; j<800; j=j*30){
        svg.append("circle")
        .attr("cx", 50+x)
        .attr("cy", 50+j)
        .attr("r", 10)
        .attr("fill", "none")
        .style("stroke", "red")
        .attr("stroke-width", 5);
    }
}

