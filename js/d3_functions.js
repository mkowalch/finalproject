

function type(d) {
  d.value = +d.value; // coerce to number
  return d;
}

function loader()
{

	var data1 = [4, 8, 15, 16, 23, 42];

//var body = d3.select("body");
//var div = body.append("div");
//div.html("Hello, world!");

	var body = d3.select("body");
	var div = body.append("div");
	div.attr("class", "chart");


	var x = d3.scaleLinear()
		.domain([0, d3.max(data1)])
		.range([0, 420]);

	d3.select(".chart")
		.selectAll("div")
		.data(data1)
		.enter()
		.append("div")
		.style("background-color","steelblue")
		.style("text-align","right")
		.style("padding","3px")
		.style("margin","1px")
		.style("color","white")
		.style("font","10px sans-serif")
		.style("width", function(d) {
			return x(d) + "px";
		})
		.text(function(d) {
			return d;
		});


	var svgdiv = body.append("div")
	svgdiv.attr("class","SVGSTUFF");

	var svgobj = svgdiv.append("svg");
	svgobj.attr("class","svgchart");

	svgobj.style("fill","white")
		.style("font","10px san-serif")
		.style("text-anchor","end");

// TODO
// how do i set sub-component styles?
	// example setting rect's styles


	var width = 420;
	var barHeight = 20;

	var x2 = d3.scaleLinear().range([0, width]);

	var chart = d3.select(".svgchart")
		.attr("width", width);

	d3.tsv("http://localhost:31338/d3_test_data.tsv", type, function(error, data) {

 		x2.domain([0, d3.max(data, function(d) { return d.value; })]);

		alert("barHeight: " + barHeight + "\n\ndataLen: " + data.length);

		chart.attr("height", barHeight * data.length);

 	 var bar = chart.selectAll("g")
			.data(data)
			.enter().append("g")
			.attr("transform", function(d, i) {
				return "translate(0," + i * barHeight + ")";
			});

		bar.append("rect")
			.attr("width", function(d) { return x2(d.value); })
			.attr("height", barHeight - 1);

		bar.append("text")
			.attr("x", function(d) { return x2(d.value) - 3; })
			.attr("y", barHeight / 2)
			.attr("dy", ".35em")
			.text(function(d) { return d.value; });
	});






// https://github.com/d3/d3/wiki/Tutorials

// check this for graphs in d3
//http://bl.ocks.org/jose187/4733747


}

