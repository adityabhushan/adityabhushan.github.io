	google.load('visualization', '1.0', {packages:['corechart','gauge']});
	//google.load({'modules':[{'name':'visualization','version':'1.1','packages':['timeline']}]});
      //google.setOnLoadCallback(drawTimelineChart);
	  google.setOnLoadCallback(drawBubbleChart);
	  
       function drawTimelineChart() {
		var container = document.getElementById('example1');

		var chart3 = new google.visualization.Timeline(container);

		var dataTable = new google.visualization.DataTable();

		dataTable.addColumn({ type: 'string', id: 'President' });
		dataTable.addColumn({ type: 'date', id: 'Start' });
		dataTable.addColumn({ type: 'date', id: 'End' });

		dataTable.addRows([
			[ 'Engineering', new Date(2007, 9, 0), new Date(2011, 6, 0) ],
			[ 'The Times of India', new Date(2011, 6, 0), new Date(2011, 11, 0) ],
			[ 'Computer Sciences Corporation',      new Date(2011, 8, 0),  new Date(2012, 5, 0) ],
			[ 'YourStory.in',  new Date(2012, 5, 17),  new Date() ]]);

		chart3.draw(dataTable);
}
	  
	  function drawBubbleChart() {

        // Create the data table.
        var data = google.visualization.arrayToDataTable([
          ['ID', 'Interest', 'Aptitude', 'Technology'],
          ['',   	7,  		8.5,      	'C/C++'],
          ['',   	10, 		8,     		'Python'],
          ['',   	7,  		7.5,      	'Java'],
          ['',   	9,  		8,      	'Web Development'],
          ['',   	9,  		9,      	'Web Frameworks'],
          ['',   	10, 		9,     		'Security'],
          ['',   	9,  		8.5,      	'Photoshop'],
		  ['',   	9,  		7,      	'Linux']   		
		  ]);
        

		    // Set chart options
            var options = {
							colorAxis: {colors: ['yellow', 'red']},
							'width':600,
                           'height':400,
						   legend: 'none',
						   hAxis: {title: 'Interest', minValue: 6, maxValue: 11},
						   vAxis: {title: 'Aptitude', minValue: 6, maxValue: 10}
						   //backgroundColor: '#333333',
						   };
            
			// Instantiate and draw our chart, passing in some options.
            var chart = new google.visualization.BubbleChart(document.getElementById('chart_div'));
            chart.draw(data, options);
			
		var data2 = google.visualization.arrayToDataTable([
          ['Label', 'Value'],
          ['School', 64],
          ['College', 60],
          ['Life', 75]
        ]);

        var options2 = {
          width: 600, height: 400,
          redFrom: 0, redTo: 35,
          yellowFrom: 35, yellowTo: 60,
		  greenFrom: 60, greenTo: 100,
          minorTicks: 5,
		  //backgroundColor: '#333333'
        };

        var chart2 = new google.visualization.Gauge(document.getElementById('chart_div2'));
        chart2.draw(data2, options2);
		
		var data3 = google.visualization.arrayToDataTable([
          ['Social Media', 'Expertise'],
          ['Facebook',  92],
          ['Quora',  85],
          ['Twitter',  60],
          ['Klout Score',  62]
        ]);

        var options3 = {
		'width':600,
          'height':400,
          title: 'Social Media',
          vAxis: {title: 'Social Media Channels',  titleTextStyle: {color: 'green'}},
		  colors: ['red','green', 'blue', 'yellow'],
		  is3d: true,
		  legend: 'none'
        };

        var chart3 = new google.visualization.BarChart(document.getElementById('chart-sm'));
        chart3.draw(data3, options3);
		
		
		var data4 = google.visualization.arrayToDataTable([
          ['Age', 'Weight'],
          [ 8,      12],
          [ 4,      5.5],
          [ 11,     14],
          [ 4,      5],
          [ 3,      3.5],
          [ 6.5,    7]
        ]);

        var options4 = {
          title: 'Age vs. Weight comparison',
          hAxis: {title: 'Age', minValue: 0, maxValue: 15},
          vAxis: {title: 'Weight', minValue: 0, maxValue: 15},
          legend: 'none'
		  
		};

        var chart4 = new google.visualization.ScatterChart(document.getElementById('chart-ss'));
        chart4.draw(data4, options4);
           		
      }		