function search() {

//getting user search word
var word = document.getElementById('input').value;
var url = 'https://en.wikipedia.org/w/api.php?action=opensearch&search='+ word +'&limit=10&format=json&callback=?';

// making ajax request
$.ajax({
	url : url,
	type: 'GET',
	contentType: "application/json; charset=utf-8",
	async:false,
	headers: { 'Api-User-Agent': 'Example/1.0' },
	dataType: "json",
	success: function(data) {
		// do something with the data
		console.log(data);
		// creating  objects for saving my data 
		var myData = {
			name : data[1][0],
			description : data[2][0],
			a : data[3][0]
		};

		var myDataTwo = {
			name : data[1][1],
			description : data[2][1],
			a : data[3][1]
		};

		var myDataThree = {
			name : data[1][2],
			description : data[2][3],
			a : data[3][2]
		};

		var myDataFour = {
			name : data[1][3],
			description : data[2][4],
			a : data[3][3]
		};


		// displaying content

		$('#content').html('<h1>' + myData.name + '</h1>' + '<br>' + '<p>'+ myData.description + '</p>' + '<br>' + '<a href=' + myData.a +' target="_blank" >Read more on Wikipedia</a>' );
		$('#content2').html('<h1>' + myDataTwo.name + '</h1>' + '<br>' + '<p>' + myDataTwo.description + '</p>' + '<br>' + '<a href=' + myDataTwo.a +' target="_blank">Read more on Wikipedia</a>' );
		$('#content3').html('<h1>' + myDataThree.name + '</h1>' + '<br>' + '<p>' +myDataThree.description + '</p>' + '<br>' + '<a href=' + myDataThree.a +' target="_blank">Read more on Wikipedia</a>' );
		$('#content4').html('<h1>' + myDataFour.name + '</h1>' + '<br>' + '<p>' +myDataFour.description + '</p>' + '<br>' + '<a href=' + myDataFour.a +' target="_blank">Read more on Wikipedia</a>');


		
	} // end sucess: function(data)

}); // end ajax request






} // end search function








