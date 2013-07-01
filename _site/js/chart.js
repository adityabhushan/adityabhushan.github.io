// Load the Visualization API and the piechart package.
      google.load('visualization', '1.0', {'packages':['corechart']});

      // Set a callback to run when the Google Visualization API is loaded.
      google.setOnLoadCallback(drawChart);

      // Callback that creates and populates a data table,
      // instantiates the pie chart, passes in the data and
      // draws it.
      function drawChart() {

        // Create the data table.
        var data = new google.visualization.DataTable();
        data.addColumn('string', 'Topping');
        data.addColumn('number', 'Slices');
        data.addRows([
          ['Mushrooms', 3],
          ['Onions', 1],
          ['Olives', 1],
          ['Zucchini', 1],
          ['Pepperoni', 2]
        ]);
        
        var data1 = google.visualization.arrayToDataTable([
          ['ID', 'X', 'Y', 'Temperature'],
          ['',   80,  167,      120],
          ['',   79,  136,      130],
          ['',   78,  184,      50],
          ['',   72,  278,      230],
          ['',   81,  200,      210],
          ['',   72,  170,      100],
          ['',   68,  477,      80]
        ]);
        
        var data2 = google.visualization.arrayToDataTable([
          ['Year', 'Sales', 'Expenses'],
          ['2004',  1000,      400],
          ['2005',  1170,      460],
          ['2006',  660,       1120],
          ['2007',  1030,      540]
        ]);
		
		
      google.load('visualization', '1.0', {packages:['corechart','gauge']});
      google.setOnLoadCallback(drawTimelineChart);
	  google.setOnLoadCallback(drawBubbleChart);
	  
       function drawTimelineChart() {
		var container = document.getElementById('example1');

		var chart3 = new google.visualization.Timeline(container);

		var dataTable = new google.visualization.DataTable();

		dataTable.addColumn({ type: 'string', id: 'President' });
		dataTable.addColumn({ type: 'date', id: 'Start' });
		dataTable.addColumn({ type: 'date', id: 'End' });

		dataTable.addRows([
			<!--[ 'Engineering', new Date(2007, 9, 0), new Date(2011, 6, 0) ],
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
						   hAxis: {title: 'Interest'},
						   vAxis: {title: 'Aptitude'}
						   <!--backgroundColor: '#333333',
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
          width: 500, height: 300,
          redFrom: 0, redTo: 35,
          yellowFrom: 35, yellowTo: 60,
		  greenFrom: 60, greenTo: 100,
          minorTicks: 5,
		  backgroundColor: '#333333'
        };

        var chart2 = new google.visualization.Gauge(document.getElementById('chart_div2'));
        chart2.draw(data2, options2);
           		
      }		
		



        // Set chart options
        var options = {'title':'How Much Pizza I Ate Last Night',
                       'width':400,
                       'height':300};
		
		var options1 = {
          colorAxis: {colors: ['yellow', 'red']}
        };
        
        var options2 = {
          title: 'Company Performance',
          hAxis: {title: 'Year',  titleTextStyle: {color: 'red'}}
        };



        // Instantiate and draw our chart, passing in some options.
        var chart = new google.visualization.PieChart(document.getElementById('pie_div'));
        chart.draw(data, options);
        
        var chart1 = new google.visualization.ColumnChart(document.getElementById('bar_div'));
        chart1.draw(data, options);
        
        var chart2 = new google.visualization.AreaChart(document.getElementById('area_div'));
        chart2.draw(data2, options2);

        
        var chart3 = new google.visualization.BubbleChart(document.getElementById('bubble_div'));
        chart3.draw(data1, options1);
        
        

      }
      
