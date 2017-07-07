/* Francheska Guzman */

$(function() {

	$('#search').on('click', function(){

	let zipcode = $('#zipCode').val();

		$.ajax({
			url:"https://accesscontrolalloworiginall.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?zip=" + zipcode + ",us&units=imperial&APPID=ea77f0ebfdf342b379f4baaa1d569c77",
			}).done(function(data){
			document.getElementById('wrapper').style.display = 'block';
			document.getElementById('hide').style.display = 'none';
			$('#city').empty().append(data.name + ', ' + data.sys.country);
			$('#currentTemperature').empty().append(data.main.temp + ' &deg;F');
			$('#minTemperature').empty().append(data.main.temp_min + ' &deg;F');
			$('#maxTemperature').empty().append(data.main.temp_max + ' &deg;F');
			$('#weatherDescription').empty().append(data.weather[0].description);
		})	

		.then(function(data){
			// If temperature is under 40, turn blue; red if is above 90; and grey if is between 40 and 90.
			if(data.main.temp < 40) {
			document.getElementById('currentTemperature').style.color = '#40AFEF';
			}
			if(data.main.temp > 90) {
			document.getElementById('currentTemperature').style.color = '#9E0601';
			}
			if(data.main.temp >= 40 && data.main.temp <= 90){
			document.getElementById('currentTemperature').style.color = '#212020';
			}
			if(data.main.temp_min < 40){
			document.getElementById('minTemperature').style.color = '#40AFEF';
			}
			if(data.main.temp_min > 90){
			document.getElementById('minTemperature').style.color = '#9E0601';
			}
			if(data.main.temp_min >= 40 && data.main.temp_min <= 90){
			document.getElementById('minTemperature').style.color = '#212020';
			}
			if(data.main.temp_max < 40){
			document.getElementById('maxTemperature').style.color = '#40AFEF';
			}
			if(data.main.temp_max > 90){
			document.getElementById('maxTemperature').style.color = '#9E0601';
			}
			if(data.main.temp_min >= 40 && data.main.temp_min <= 90){
			document.getElementById('maxTemperature').style.color = '#212020';
			}
			// Weather condition codes
			// I got the weather id icon list from: https://openweathermap.org/weather-conditions
			if (data.weather[0].id >= 200 && data.weather[0].id <= 232) {
			$('#weatherId').empty().prepend('<img src="images/11d.png" />');
			}
			if (data.weather[0].id >= 300 && data.weather[0].id <= 321) {
			$('#weatherId').empty().prepend('<img src="images/09d.png" />');
			}
			if (data.weather[0].id >= 500 && data.weather[0].id <= 531) {
			$('#weatherId').empty().prepend('<img src="images/10d.png" />');
			}
			if (data.weather[0].id >= 600 && data.weather[0].id <= 622) {
			$('#weatherId').empty().prepend('<img src="images/13d.png" />');
			}
			if (data.weather[0].id >= 700 && data.weather[0].id <= 781) {
			$('#weatherId').empty().prepend('<img src="images/50d.png" />');
			}
		})

		.always(function(){
			console.log('Run after all is done.');
		})

	})

});
