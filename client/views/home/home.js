Template.home.rendered = function() {

		var width = 1000,
		    height = 1000;
			///add stuff here
		var projection = d3.geo.mercator()
		    .scale(1000)
		    .translate([width / 2, height / 2]);


		var path = d3.geo.path()
		    .projection(projection);


		var svg = d3.select("#kenyaMap").append("svg")
		    .attr("width", width)
		    .attr("height", height)
		    // .append("rect")
		    // .attr({x:10,y:10,height:100,width:100,fill:'orange'})

		var centralPath =  "central.json";



		// $.getJSON("./central.json", function(json) {

  //  			console.log('JSON ',json); // this will show the info it in firebug console
		// });
			

		// // var centralPath =  "../../../both/lib/central.json";
		// console.log(centralPath)


		d3.json(centralPath, function(error, kenya) {
			central = kenya;
			console.log('Kenya ',kenya)
		  if (error) return console.error(error);


		  svg.append("path")
		      // .datum(topojson.feature(kenya, us.objects.subunits))
		      // .attr("d", path)
		      // .attr('class','subunit')

		  // svg.selectAll(".subunit")
		  //     .data(topojson.feature(us, us.objects.subunits).features)
		  //   .enter().append("path")

		      
		      .attr("d", path);

		});
}
Template.home.events({

});

Template.home.helpers({

});
