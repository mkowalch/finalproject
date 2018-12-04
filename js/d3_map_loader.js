

function get_proj(path,feature,width,height)
{
// THIS DOES NOT WORK
/*
var b = path.bounds(feature); // returns infinity

clog("BBBB: ");
clog(b);

var    s = 0.9 / Math.max(
                   (b[1][0] - b[0][0]) / width,
                   (b[1][1] - b[0][1]) / height
               );
projection.scale(s);
*/


/*
 var b = path.bounds(features),
      s = .95 / Math.max((b[1][0] - b[0][0]) / width, (b[1][1] - b[0][1]) / height),
      t = [(width - s * (b[1][0] + b[0][0])) / 2, (height - s * (b[1][1] + b[0][1])) / 2];

  projection
      .scale(s)
      .translate(t);
*/

}


function append_weekday_hour_list()
{

	var selector_div = d3.select('#selector_div');

	// setting html(null) clears the element
	var selector_child_div = d3.select("#selector_child_div").html(null);

	var select = selector_child_div.append("select")
		.attr("id","weekday_hours_weekday_selector")
		.on('change', function(){

			var hour = d3.select("#weekday_hours_hours_selector").property("value");
			var weekday = this.value;
			var compound_weekday_hour = weekday + "_" + hour;
			refresh_map(-1,"weekday_hours",compound_weekday_hour);

		});

	select.append("option")
		.attr("value","Monday").text("Monday");
	select.append("option")
		.attr("value","Tuesday").text("Tuesday");
	select.append("option")
		.attr("value","Wednesday").text("Wednesday");
	select.append("option")
		.attr("value","Thursday").text("Thursday");
	select.append("option")
		.attr("value","Friday").text("Friday");
	select.append("option")
		.attr("value","Saturday").text("Saturday");
	select.append("option")
		.attr("value","Sunday").text("Sunday");


	var hour_select = selector_child_div.append("select")
		.attr("id","weekday_hours_hours_selector")
		.on('change', function(){

			var hour = this.value;
			var weekday = d3.select("#weekday_hours_weekday_selector").property("value");
			var compound_weekday_hour = weekday + "_" + hour;

			refresh_group_selector("weekday_hours",compound_weekday_hour);
			refresh_map(-1,"weekday_hours",compound_weekday_hour);

		});

	hour_select.append("option")
		.attr("value","00").text("00");
	hour_select.append("option")
		.attr("value","01").text("01");
	hour_select.append("option")
		.attr("value","02").text("02");
	hour_select.append("option")
		.attr("value","03").text("03");
	hour_select.append("option")
		.attr("value","04").text("04");
	hour_select.append("option")
		.attr("value","05").text("05");
	hour_select.append("option")
		.attr("value","06").text("06");
	hour_select.append("option")
		.attr("value","07").text("07");
	hour_select.append("option")
		.attr("value","08").text("08");
	hour_select.append("option")
		.attr("value","09").text("09");
	hour_select.append("option")
		.attr("value","10").text("10");
	hour_select.append("option")
		.attr("value","11").text("11");
	hour_select.append("option")
		.attr("value","12").text("12");
	hour_select.append("option")
		.attr("value","13").text("13");
	hour_select.append("option")
		.attr("value","14").text("14");
	hour_select.append("option")
		.attr("value","15").text("15");
	hour_select.append("option")
		.attr("value","16").text("16");
	hour_select.append("option")
		.attr("value","17").text("17");
	hour_select.append("option")
		.attr("value","18").text("18");
	hour_select.append("option")
		.attr("value","19").text("19");
	hour_select.append("option")
		.attr("value","20").text("20");
	hour_select.append("option")
		.attr("value","21").text("21");
	hour_select.append("option")
		.attr("value","22").text("22");
	hour_select.append("option")
		.attr("value","23").text("23");


	select.dispatch("change",{value:"Monday"});


}



function append_weekday_list()
{
	var selector_div = d3.select('#selector_div');

	// setting html(null) clears the element
	var selector_child_div = d3.select("#selector_child_div").html(null);

	var select = selector_child_div.append("select")
		.attr("id","weekday_selector")
		.on('change', function(){

			refresh_map(-1,"weekday",this.value);

		});

	select.append("option")
		.attr("value","Monday").text("Monday");
	select.append("option")
		.attr("value","Tuesday").text("Tuesday");
	select.append("option")
		.attr("value","Wednesday").text("Wednesday");
	select.append("option")
		.attr("value","Thursday").text("Thursday");
	select.append("option")
		.attr("value","Friday").text("Friday");
	select.append("option")
		.attr("value","Saturday").text("Saturday");
	select.append("option")
		.attr("value","Sunday").text("Sunday");

	select.dispatch("change",{value:"Monday"});

}


function append_hour_list()
{
	var selector_div = d3.select('#selector_div');

	// setting html(null) clears the element
	var selector_child_div = d3.select("#selector_child_div").html(null);

	var select = selector_child_div.append("select")
		.attr("id","hour_selector")
		.on('change', function(){

			refresh_map(-1,"hour",this.value);

		});

	select.append("option")
		.attr("value","00").text("00");
	select.append("option")
		.attr("value","01").text("01");
	select.append("option")
		.attr("value","02").text("02");
	select.append("option")
		.attr("value","03").text("03");
	select.append("option")
		.attr("value","04").text("04");
	select.append("option")
		.attr("value","05").text("05");
	select.append("option")
		.attr("value","06").text("06");
	select.append("option")
		.attr("value","07").text("07");
	select.append("option")
		.attr("value","08").text("08");
	select.append("option")
		.attr("value","09").text("09");
	select.append("option")
		.attr("value","10").text("10");
	select.append("option")
		.attr("value","11").text("11");
	select.append("option")
		.attr("value","12").text("12");
	select.append("option")
		.attr("value","13").text("13");
	select.append("option")
		.attr("value","14").text("14");
	select.append("option")
		.attr("value","15").text("15");
	select.append("option")
		.attr("value","16").text("16");
	select.append("option")
		.attr("value","17").text("17");
	select.append("option")
		.attr("value","18").text("18");
	select.append("option")
		.attr("value","19").text("19");
	select.append("option")
		.attr("value","20").text("20");
	select.append("option")
		.attr("value","21").text("21");
	select.append("option")
		.attr("value","22").text("22");
	select.append("option")
		.attr("value","23").text("23");

	select.dispatch("change",{value:"01"});

}

function append_month_list()
{
	var selector_div = d3.select('#selector_div');

	// setting html(null) clears the element
	var selector_child_div = d3.select("#selector_child_div").html(null);

	var select = selector_child_div.append("select")
		.attr("id","month_selector")
		.on('change', function(){

			refresh_map(-1,"months",this.value);

		});

	select.append("option")
		.attr("value","201611").text("201611");
	select.append("option")
		.attr("value","201612").text("201612");
	select.append("option")
		.attr("value","201701").text("201701");
	select.append("option")
		.attr("value","201702").text("201702");
	select.append("option")
		.attr("value","201703").text("201703");
	select.append("option")
		.attr("value","201704").text("201704");
	select.append("option")
		.attr("value","201705").text("201705");
	select.append("option")
		.attr("value","201706").text("201706");
	select.append("option")
		.attr("value","201707").text("201707");
	select.append("option")
		.attr("value","201708").text("201708");
	select.append("option")
		.attr("value","201709").text("201709");
	select.append("option")
		.attr("value","201711").text("201711");
	select.append("option")
		.attr("value","201712").text("201712");
	select.append("option")
		.attr("value","201801").text("201801");
	select.append("option")
		.attr("value","201802").text("201802");
	select.append("option")
		.attr("value","201803").text("201803");
	select.append("option")
		.attr("value","201804").text("201804");
	select.append("option")
		.attr("value","201805").text("201805");
	select.append("option")
		.attr("value","201806").text("201806");
	select.append("option")
		.attr("value","201807").text("201807");
	select.append("option")
		.attr("value","201808").text("201808");
	select.append("option")
		.attr("value","201809").text("201809");
	select.append("option")
		.attr("value","201810").text("201810");
	select.append("option")
		.attr("value","201811").text("201811");

	select.dispatch("change",{value:"201611"});

}

function refresh_selector_div(current_timeframe)
{

	// setting html(null) clears the element
	var selector_div = d3.select('#selector_div').html(null);

	var select = selector_div.append('select')
		.attr("id","timeframe_selector")
		.on('change', function(){

			var value = this.value;

			if(value == "months") {

				append_month_list();

			} else if(value == "hours") {

				append_hour_list();

			} else if(value == "weekdays") {

					append_weekday_list();

			} else if(value == "weekday_hours") {

					append_weekday_hour_list();

			} else {

				alert("bad value: " + value);

			}


		});

	select.append("option")
		.attr("value","weekday_hours").text("weekday_hours");
	select.append("option")
		.attr("value","months").text("months");
	select.append("option")
		.attr("value","weekdays").text("weekdays");
	select.append("option")
		.attr("value","hours").text("hours");

	selector_div.append("div").attr("id","selector_child_div");

		// not sure if this is right, force a change event to months
	clog("refresh_selector_div(): current_timeframe: " + current_timeframe);

	select.dispatch("change",{value:current_timeframe});

}

function refresh_map(group_id,timeframe_type,timeframe)
{

	var grp_id_str = group_id.toString();

	var width = 960,height = 960;

	// setting html(null) clears the element
	var svg = d3.select('#neighborhood_svg').html(null);

	svg.attr("version","1.1")
	.attr("xmlns","http://www.w3.org/2000/svg")
	.attr("xmlns:xlink","http://www.w3.org/1999/xlink")
	.attr('width', width)
	.attr('height', height)
	.attr('class', 'states')
	.attr('viewbox', "0 0 " + width + " " + height)
	.attr('fill','none')
	.attr('stroke','black');


var projection = d3.geoAlbersUsa()
	.scale(250000) // DO NOT LOSE THIS
// .parallels([10,10]) what happened to this function? and .center() as well?
	//.translate([width / 2, height / 2]);
	.translate([-54000,12500]); // DO NOT LOSE THIS



var path = d3.geoPath()
	.projection(projection);



	//d3.json('pittsburgh_map.topo.simple.json', function(error, us) { }).then(function(us) {
	//d3.json('pittsburgh_map.topo.quant.json', function(error, us) { }).then(function(us) {
	d3.json('pittsburgh_map.topo.json', function(error, us) { }).then(function(us) {

		var features = topojson.feature(us, us.objects.pittsburgh_map).features;

	svg.selectAll('path')
		//.data(topojson.feature(us, us.objects.usStates).features)
		.data(topojson.feature(us, us.objects.pittsburgh_map).features)
		.enter()
		.append('path')
		.attr('class', 'hoverable')
		.attr('d', path)
		.on('mouseover', function(d){

			var name = d.properties.hood;
			d3.select("#neighborhood_div").html("neighborhood: " + name)

		});

		latlon_fname = "latlons_" + timeframe_type + "_w_grps/" + timeframe + ".latlons.csv";
//clog("latlon_fname:" + latlon_fname);

		//d3.csv('latlons_months_w_grps/201611.latlons.csv', function(latlons,ii) {
		d3.csv(latlon_fname, function(latlons,ii) {

			//return [+latlons.lon,+latlons.lat];
			return [projection([+latlons.lon,+latlons.lat]),latlons.grp_id];

		 }).then(function(latlons) {


			svg.selectAll("circle")
				.data(latlons).enter()
				.append("circle")
				.attr("r", "2px")
				.attr("fill", function(d) {

					if(d[1] == grp_id_str)
						return "red";
					else
						return "green";

				})

				.attr("cy", function (d) {

					if(d[0] != null)
						return d[0][1];
					else
						return "0";
				})

				.attr("cx", function (d) {

					if(d[0] != null)
						return d[0][0];
					else
						return "0";

				})

		});

});

}


function make_chart2(chart_data,chart_div,timeframe_type,timeframe)
{

	var x = d3.scaleLinear()
		.domain([0, d3.max(chart_data, function(d) { return d.value; })-5])
		.range([10, 400]);


	var title_div = chart_div.append("div")
		.style("width","600px")
		.style("background-color","lightgrey")

	title_div.append("div")
		.style("width","70px")
		.style("color","black")
		.style("padding","4px")
		.style("padding-right","2px")
		.style("margin","1px")
		.style("text-align","right")
		.style("font","14px sans-serif")
		.style("display","inline-block")
		.text("group_id")
		.on("click",function() {

			//clog("SORT");

		});

	title_div.append("div")
		.style("width","5px")
		.style("display","inline-block")
		.style("padding","1px")
		.style("margin","0px")
		.style("font","14px sans-serif")
		.text(":");


	title_div.append("div")
		.style("width","170px")
		.style("color","black")
		.style("padding","4px")
		.style("padding-left","2px")
		.style("margin","1px")
		.style("font","14px sans-serif")
		.style("display","inline-block")
		.text("group_size")
		.on("click",function() {

			//clog("SORT");

		});

	var cc = chart_div.append("div")
		.style("height", "300px")
		.style("width", "600px")
//		.style("display", "inline-block")
		.style("overflow","scroll");





	var div3 = cc.selectAll("div").data(chart_data).enter().append("div");
	div3.style("width","600px");
	div3.style("display","flex");
	div3.property("is_selected","no");


	div3.each(function(d) {
		d3.select(this).append("div")
		.attr("id",function(d) {return "c1_" + d.name} )
		.style("text-align","right")
		.style("padding","4px")
		.style("margin","1px")
		.style("color","black")
		.style("font","10px sans-serif")
		.style("width", "70px")
		.text(function(d) {return d.name;})
		.property("group_id",function(d) { return d.name; })
		.property("val",function(d) { return d.value; });

		d3.select(this).append("div")
		.attr("id",function(d) {return "c1_part2_" + d.name} )
		.style("background-color","green")
		.style("text-align","right")
		.style("padding","3px")
		.style("margin","1px")
		.style("color","white")
		.style("font","10px sans-serif")
		.style("width", function(d) {
			return (x(d.value)|0) + "px";
		})
		.text(function(d) {
			return d.value;
		})
		//.property("is_selected","no")
		.property("group_id",function(d) { return d.name; })
		.property("val",function(d) { return d.value; })
		.on("click",function() {

			var childs = this.parentNode.parentNode.childNodes;

			for(var i=0;i<childs.length;++i) {

				if(childs[i].is_selected == "yes") {

					childs[i].is_selected = "no";

					for(var j=0;j<childs[i].childNodes.length;++j) {

						if(childs[i].childNodes[j].id.includes("part2")) {

							childs[i].childNodes[j].style.backgroundColor="green";

						}

					}
				}

			}


			this.parentNode.is_selected = "yes";

			d3.selectAll("#c1_part2_"+this.group_id).style("background-color","red").property("is_selected","yes");

			refresh_map(this.group_id,timeframe_type,timeframe)


		});


	});

}




/*
function make_chart1(chart_data,div)
{
	var svgobj = div.append("svg");
	svgobj.attr("class","svgchart")

	svgobj.style("fill","white")
		.style("font","10px san-serif")
		.style("text-anchor","end")
		.style("overflow","scroll")
		.style("viewbox","0 0 800 1500");

//WHY IS HEIGHT OF SVG SO SMALL?????
//WHY IS MY VIEWBOX NOT APPEARING ON SVG!!!!

	var width = 420;
	var barHeight = 20;

	var x2 = d3.scaleLinear().range([0, width]);

	var chart = d3.select(".svgchart")
		.attr("width", width)


		x2.domain([0, d3.max(chart_data, function(d) { return d.value; })]);

		var bar =	chart.selectAll("g").data(chart_data).enter().append("g")
						.attr("transform", function(d, i) {
							return "translate(0," + i * barHeight + ")";
						});

		bar.append("rect")
			.style("fill","white")
			.attr("width", "100px")
			.attr("height", barHeight - 1)
			.text(function(d) { return d.name;});

		bar.append("rect")
			.style("fill","steelblue")
			.attr("width", function(d) { return x2(d.value); })
			.attr("height", barHeight - 1);

		bar.append("text")
			.attr("x", function(d) { return x2(d.value) - 3; })
			.attr("y", barHeight / 2)
			.attr("dy", ".35em")
			.text(function(d) { return d.value; });


	div.append("br");
	div.append("br");
	div.append("br");
	div.append("br");
	div.append("br");
	div.append("br");


}
*/


function refresh_group_selector(timeframe_type,timeframe)
{

	var fname = "groups_"+ timeframe_type +"_cnts/" + timeframe + ".grps.cnt.csv";
	//var fname = "groups_"+ "weekday_hours" +"_cnts/" + "Sunday_00" + ".grps.cnt.csv";

	//clog("refresh_group_selector(): fname: " + fname);


	d3.csv(fname, function(row,ii) {

		return {name: ii, value: +row.member_cnt};

	}).then(function(grp_data) {

		var group_chart_div = d3.select("#group_chart_div").html(null);

		group_chart_div
		.style("height", "300px")
		.style("width", "600px")

		make_chart2(grp_data,group_chart_div,timeframe_type,timeframe);


	});

}

function loader_map()
{

	var width = 960,height = 960;

	d3.select("body").style("width","1200px");

	d3.select('body').append('div')
			.attr("id","selector_div")
			.style("margin-top","100px");

	refresh_selector_div("weekday_hours");

	d3.select('body').append('br');

	d3.select('body').append('div')
			.attr("id","group_chart_div");

	//d3.select('body').append('div')
			//.attr("id","group_selector_div");

	refresh_group_selector("weekday_hours","Monday_00");

	d3.select('body').append('br');
	d3.select('body').append('br');

	d3.select('body').append('div')
			.attr("id","neighborhood_div")
			.html("neighborhood: ");


	var svg = d3.select('body').append('svg')
			.attr('id','neighborhood_svg');


	refresh_map(-1,"weekday_hours","Monday_00");

}



/*
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

	// run this with node js server:
 //http-server -p 3000 --cors

	var width = 420;
	var barHeight = 20;

	var x2 = d3.scaleLinear().range([0, width]);

	var chart = d3.select(".svgchart")
		.attr("width", width);

	d3.tsv("d3_test_data.tsv", function(row,ii) {

		// this is the per/row function
		clog("row.name: " + row.name + "   row.value: " + row.value);

		return {name: row.name, value: +row.value};

	}).then(function(rows) {

		// this is the callback

		clog("agian rows!");
		clog(rows);

 		x2.domain([0, d3.max(rows, function(d) { return d.value; })]);

		var bar =	chart.selectAll("g").data(rows).enter().append("g")
						.attr("transform", function(d, i) {
							return "translate(0," + i * barHeight + ")";
						});

		bar.append("rect")
						.style("fill","steelblue")
			.attr("width", function(d) { return x2(d.value); })
			.attr("height", barHeight - 1);

		bar.append("text")
			.attr("x", function(d) { return x2(d.value) - 3; })
			.attr("y", barHeight / 2)
			.attr("dy", ".35em")
			.text(function(d) { return d.value; });



	});

}
*/

function clog(msg)
{
	console.log(msg);
}

