	google.load('visualization', '1.1', {packages:['timeline']});
	//google.load({'modules':[{'name':'visualization','version':'1.1','packages':['timeline']}]});
    
	  google.setOnLoadCallback(drawTimelineChart);
	  
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
	  
	  