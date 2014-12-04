Template.home.rendered = function() {

		var width = 1000,
		    height = 1000;
			///add stuff here
			var projection = d3.geo.albersUsa()
		    .scale(1000)
		    .translate([width / 2, height / 2]);


		var path = d3.geo.path()
		    .projection(projection);


		var svg = d3.select("body").append("svg")
		    .attr("width", width)
		    .attr("height", height);


		d3.json("us.json", function(error, us) {
		  if (error) return console.error(error);


		  svg.append("path")
		      .datum(topojson.feature(us, us.objects.subunits))
		      .attr("d", path);

		  svg.selectAll(".subunit")
		      .data(topojson.feature(us, us.objects.subunits).features)
		    .enter().append("path")
		      .attr("class", function(d) { return "subunit " + d.id; }) 
		      //added id in above line to use as selector: ex US-NY
		      .attr("d", path);

		/////////Gives state boundary lines
		  // svg.insert('path','.graticule')
		  //   .datum(topojson.feature(us, us.objects.subunits,function(a, b) {console.log(a,b); return a !== b; }))
		  //   .attr('class','state-boundary')
		  //   .attr("d", path);

  

};

Template.home.events({

});

Template.home.helpers({

});
