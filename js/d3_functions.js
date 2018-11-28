
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

function exploratory_analysis_loader()
{

data1 = [
{"tweet_cnt":344875,"month":"201611"},
{"tweet_cnt":85418,"month":"201612"},
{"tweet_cnt":494610,"month":"201701"},
{"tweet_cnt":1006215,"month":"201702"},
{"tweet_cnt":1036868,"month":"201703"},
{"tweet_cnt":877929,"month":"201704"},
{"tweet_cnt":962728,"month":"201705"},
{"tweet_cnt":984699,"month":"201706"},
{"tweet_cnt":1050499,"month":"201707"},
{"tweet_cnt":498905,"month":"201708"},
{"tweet_cnt":309600,"month":"201709"},
{"tweet_cnt":850971,"month":"201711"},
{"tweet_cnt":913183,"month":"201712"},
{"tweet_cnt":988929,"month":"201801"},
{"tweet_cnt":847301,"month":"201802"},
{"tweet_cnt":902811,"month":"201803"},
{"tweet_cnt":861501,"month":"201804"},
{"tweet_cnt":867822,"month":"201805"},
{"tweet_cnt":882441,"month":"201806"},
{"tweet_cnt":921558,"month":"201807"},
{"tweet_cnt":874538,"month":"201808"},
{"tweet_cnt":885318,"month":"201809"},
{"tweet_cnt":879188,"month":"201810"},
{"tweet_cnt":541295,"month":"201811"}];



	var div = d3.select("body").append("div");
	div.attr("id","main_div");

	div.style("width","650px")
		.style("margin","10px")
		.style("margin-top","10px")
		.style("padding","3px")
		.style("background-color","#e0e0eb");

	var h2_data = div.append("h2");
	h2_data.html("Data");

	var p = div.append("p");
	p.html("The data was collected using the Twitter Streaming API.  To capture tweets from Pittsburgh latitude and longitude coordinates forming a box around the city are passed to the API as well as a set of OAuth tokens and Twitter will stream tweets that occur within the box in return.  The tweets are in json format.");

	p = div.append("p");
	p.html("Total tweets collected: 18869202");
	p = div.append("p");
	p.html("Start Date: November 2016");
	p = div.append("p");
	p.html("End Date: November 2018");
	p = div.append("p");
	p.html("Data Size: 37 GB");
	p = div.append("p");
	p.html("Total Tweeter Count: 550275 unique twitter ids");

	var h2_exploratory_analysis = div.append("h2");
	h2_exploratory_analysis.html("Exploratory Analysis");

	p = div.append("p");
	p.html("Below are several charts showing the kinds of data that can be extracted from the twitter data.");

	p = div.append("p");
	p.html("Here is a chart showing the tweets over time.  Later we'll look at smaller time slices to see when people are most active.");

	p = div.append("p");
	p.html("Number of Tweets per month");



	var chart_div = div.append("div");
	chart_div.attr("id", "chart_div");

	var x = d3.scaleLinear()
		.domain([0, 1050499])
		.range([0, 420]);

	var div3 = chart_div.selectAll("div").data(data1).enter().append("div");
	div3.style("width","600");
	div3.style("display","flex");


	div3.each(function(d) {
		d3.select(this).append("div")
		.style("text-align","right")
		.style("padding","3px")
		.style("margin","1px")
		.style("color","black")
		.style("font","10px sans-serif")
		.style("width", "70px")
		.text(function(d) {return d.month;});

		d3.select(this).append("div")
		.style("background-color","steelblue")
		.style("text-align","right")
		.style("padding","3px")
		.style("margin","1px")
		.style("color","white")
		.style("font","10px sans-serif")
		.style("width", function(d) {
			return (x(d.tweet_cnt)|0) + "px";
		})
		.text(function(d) {
			return d.tweet_cnt;
		});
	});

	add_hashtag_chart();
	add_website_chart();


}

function add_hashtag_chart()
{

	var data1 = [
	{"hashtag_cnt":28970,"month":"201611"},
	{"hashtag_cnt":9966,"month":"201612"},
	{"hashtag_cnt":42657,"month":"201701"},
	{"hashtag_cnt":84648,"month":"201702"},
	{"hashtag_cnt":87027,"month":"201703"},
	{"hashtag_cnt":81604,"month":"201704"},
	{"hashtag_cnt":86100,"month":"201705"},
	{"hashtag_cnt":90734,"month":"201706"},
	{"hashtag_cnt":91723,"month":"201707"},
	{"hashtag_cnt":52852,"month":"201708"},
	{"hashtag_cnt":37759,"month":"201709"},
	{"hashtag_cnt":71183,"month":"201711"},
	{"hashtag_cnt":65699,"month":"201712"},
	{"hashtag_cnt":67210,"month":"201801"},
	{"hashtag_cnt":61631,"month":"201802"},
	{"hashtag_cnt":67262,"month":"201803"},
	{"hashtag_cnt":66138,"month":"201804"},
	{"hashtag_cnt":57459,"month":"201805"},
	{"hashtag_cnt":59591,"month":"201806"},
	{"hashtag_cnt":76479,"month":"201807"},
	{"hashtag_cnt":74228,"month":"201808"},
	{"hashtag_cnt":69066,"month":"201809"},
	{"hashtag_cnt":68975,"month":"201810"},
	{"hashtag_cnt":45418,"month":"201811"}];


	var div = d3.select("#main_div");

	var p = div.append("p");
	p.html("Using hashtags we can see what kinds of conversations people are having.  Later we'll break out these hashtags into different groups.");

	p = div.append("p");
	p.html("Number of Unique Hashtags used per month");

	var chart_div = div.append("div");
	chart_div.attr("id", "hashtag_chart_div");

	var x = d3.scaleLinear()
		.domain([0, 91723])
		.range([0, 420]);

	var div3 = chart_div.selectAll("div").data(data1).enter().append("div");
	div3.style("width","600");
	div3.style("display","flex");


	div3.each(function(d) {
		d3.select(this).append("div")
		.style("text-align","right")
		.style("padding","3px")
		.style("margin","1px")
		.style("color","black")
		.style("font","10px sans-serif")
		.style("width", "70px")
		.text(function(d) {return d.month;});

		d3.select(this).append("div")
		.style("background-color","steelblue")
		.style("text-align","right")
		.style("padding","3px")
		.style("margin","1px")
		.style("color","white")
		.style("font","10px sans-serif")
		.style("width", function(d) {
			return (x(d.hashtag_cnt)|0) + "px";
		})
		.text(function(d) {
			return d.hashtag_cnt;
		});
	});

}

function add_website_chart()
{

var data1 = [
	{"domain_cnt":3180,"month":"201611"},
	{"domain_cnt":1296,"month":"201612"},
	{"domain_cnt":4506,"month":"201701"},
	{"domain_cnt":8387,"month":"201702"},
	{"domain_cnt":8862,"month":"201703"},
	{"domain_cnt":7900,"month":"201704"},
	{"domain_cnt":8723,"month":"201705"},
	{"domain_cnt":8055,"month":"201706"},
	{"domain_cnt":8151,"month":"201707"},
	{"domain_cnt":4843,"month":"201708"},
	{"domain_cnt":3657,"month":"201709"},
	{"domain_cnt":6482,"month":"201711"},
	{"domain_cnt":5018,"month":"201712"},
	{"domain_cnt":5232,"month":"201801"},
	{"domain_cnt":4886,"month":"201802"},
	{"domain_cnt":5077,"month":"201803"},
	{"domain_cnt":5011,"month":"201804"},
	{"domain_cnt":4897,"month":"201805"},
	{"domain_cnt":4880,"month":"201806"},
	{"domain_cnt":5373,"month":"201807"},
	{"domain_cnt":5272,"month":"201808"},
	{"domain_cnt":4715,"month":"201809"},
	{"domain_cnt":4943,"month":"201810"},
	{"domain_cnt":3473,"month":"201811"}];

	var div = d3.select("#main_div");

	var p = div.append("p");
	p.html("We can pull out all the websites shared in the tweets as well.  From these we can find the web domains that are being shared in Pittsburgh.  Just like hashtags, we'll be able to drill down into these over time later.");

	p = div.append("p");
	p.html("Number of Unique Website Domains used per month");

	var chart_div = div.append("div");
	chart_div.attr("id", "domain_url_chart_div");

	var x = d3.scaleLinear()
		.domain([0, 8862])
		.range([0, 420]);

	var div3 = chart_div.selectAll("div").data(data1).enter().append("div");
	div3.style("width","600");
	div3.style("display","flex");


	div3.each(function(d) {
		d3.select(this).append("div")
		.style("text-align","right")
		.style("padding","3px")
		.style("margin","1px")
		.style("color","black")
		.style("font","10px sans-serif")
		.style("width", "70px")
		.text(function(d) {return d.month;});

		d3.select(this).append("div")
		.style("background-color","steelblue")
		.style("text-align","right")
		.style("padding","3px")
		.style("margin","1px")
		.style("color","white")
		.style("font","10px sans-serif")
		.style("width", function(d) {
			return (x(d.domain_cnt)|0) + "px";
		})
		.text(function(d) {
			return d.domain_cnt;
		});
	});

}




function loader()
{

// This is just a testing function


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

/*
		row.value = type(row.value);

 		//x2.domain([0, d3.max(row, function(d) { return d.value; })]);
		if(max_val == undefined)
			max_val = row.value;

		max_val = d3.max([max_val,row.value]);

 		x2.domain([0, max_val]);

		//alert("barHeight: " + barHeight + "\n\ndataLen: " + row.length);

		//chart.attr("height", barHeight * row.length);
		chart.attr("height", barHeight * i);
*/

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

