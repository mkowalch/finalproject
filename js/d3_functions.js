
function clog(msg) {
	console.log(msg);
}

function type(d) {
 d.value = +d.value; // coerce to number
 //d.value = +d.frequency; // coerce to number
 return d;
}

function main_loader()
{

	var main_div = d3.select("#main_div");

	var heading = main_div.append("h1");
	heading.html("Pittsburgh Twitter Data");

	var p = main_div.append("p");

	p.html("What can we learn about Pittsburgh from Twitter data?  Where do people go?  What are they talking about?  When are they most active?");

	p = main_div.append("p");
	p.html("Utilizing Pittsburgh Twitter data we can answer these questions.  We can use information embedded in each tweet to find location, time, and topics of conversation that people in Pittsburgh are having.");


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

	svgobj.style("fill","red")
		.style("font","10px san-serif")
		.style("text-anchor","end");

/*	
	svgobj.append("g").attr("transform","translate(0,0)");
	svgobj.append("g").attr("transform","translate(0,20)");
	svgobj.append("g").attr("transform","translate(0,40)");
	svgobj.append("g").attr("transform","translate(0,60)");
	svgobj.append("g").attr("transform","translate(0,80)");
	svgobj.append("g").attr("transform","translate(0,150)");
*/


// TODO
// how do i set sub-component styles?
	// example setting rect's styles


	var width = 420;
	var barHeight = 20;

	var x2 = d3.scaleLinear().range([0, width]);

	var chart = d3.select(".svgchart")
		.attr("width", width);

	data_array = [];
	var max_val = undefined;
	//d3.tsv("/data/d3_test_data.tsv", type, function(error, data) {
	//d3.tsv("/data/d3_test_data.tsv", function(error, ccc) {
	d3.tsv("/data/d3_test_data.tsv", function(row, i) {
	//d3.csv("/data/d3_test_data.csv", function(row, i) {

		clog("CLOG: " + row.name + "\n\tvalue: " + row.value + "\n\tlen: " + row.len + "\n\ti: " + i);

		data_array += row;

		if(i+1 == row.len)
			data_ready();

		return;

		row.value = type(row.value);

 		//x2.domain([0, d3.max(row, function(d) { return d.value; })]);
		if(max_val == undefined)
			max_val = row.value;

		max_val = d3.max([max_val,row.value]);

 		x2.domain([0, max_val]);

		//alert("barHeight: " + barHeight + "\n\ndataLen: " + row.length);

		//chart.attr("height", barHeight * row.length);
		chart.attr("height", barHeight * i);

//		var bar = chart.append("g").attr("transform","translate(0," + i*barHeight + ")");
		//var bar = chart.selectAll("g")
			//.attr("transform", function(d,i) {
				//return "translate(0," + i * barHeight + ")";
			//});

		/*
		bar.append("rect")
			.attr("width", x2(row.value))
			.attr("height", barHeight - 1);

		bar.append("text")
			.attr("x", x2(row.value) - 3)
			.attr("y", barHeight / 2)
			.attr("dy", ".35em")
			.text(row.value);
*/


//		var bar = chart.selectAll("g").data(row).enter().append("g");
//			.attr("transform", "translate(0,20)");



		/*
	 	var bar = chart.selectAll("g")
			.data(row.value)
			.enter().append("g")
			.attr("transform", function(d, ii) {
				clog("making g: " + ii + "     d: " + d);
				return "translate(0," + ii * barHeight + ")";
			});

		bar.append("rect")
			.attr("width", function(d) { return x2(d); })
			.attr("height", barHeight - 1);
*/
	

		/*
 	 	var bar = chart.selectAll("g")
			.data(row)
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
		*/
		
	});






// https://github.com/d3/d3/wiki/Tutorials

// check this for graphs in d3
//http://bl.ocks.org/jose187/4733747


}

function data_ready()
{
	for(var i=0;i<data_array.length;++i)  {
		clog("data_array: " + data_array[i].name);
	}
}

