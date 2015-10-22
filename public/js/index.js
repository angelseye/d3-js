var width = 420;
var barHeight = 20;

var x = d3.scale.linear()
    .range([0, width]);

var chart = d3.select('.chart')
		.attr("width", width)


// download and implement data
d3.tsv("js/people.tsv", type, function(error, data){
    x.domain([0, d3.max(data, function(d){ return d.age; })]);
		chart.attr("height", barHeight * data.length);

		var bar = chart.selectAll("g")
				.data(data)
			.enter().append("g")
				.attr('transform', function(d, i){ return "translate(0," + i * barHeight + ")"; });

		bar.append("rect")
				.attr("width", function(d){ return x(d.age); })
				.attr("height", barHeight - 1);

		bar.append("text")
				.attr("x", function(d){ return x(d.age) - 3; })
				.attr("y", barHeight / 2)
				.attr("dy", ".35em")
				.text(function(d){ return d.age; });
		
});


function type(d){
	d.age = +d.age;
	return d;
}


