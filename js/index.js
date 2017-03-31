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
		// console.log(data); 
		var html = "";
		// Looping through the array and then displaying data
		for(i=0; i < data[1].length; i++){
		html += "<a href="+data[3][i]+" target='_blank'>"+ data[1][i]+"</br>"+ data[2][i]+"<br><br></a>";
		}
		$('#content').html(html);
	}, 

	// error function in case of error
	error: function(data) {
		$('#content').html('<h1> ERROR</h1>');
	}
}); // end ajax request



} // end search function








