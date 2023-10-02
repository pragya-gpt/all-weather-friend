const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': '3925b6c220msh3065f1458d7412fp16979djsn192feaab5207',
		'X-RapidAPI-Host': 'weather-by-api-ninjas.p.rapidapi.com'
	}
};

const getWeather = (city)=>{
	cityName.innerHTML = city;
	fetch('https://weather-by-api-ninjas.p.rapidapi.com/v1/weather?city='+city, options)
    	.then(response => response.json())
    	.then(response => {
			cloud_pct.innerHTML = response.cloud_pct; 
			humidity.innerHTML = response.humidity; 
			temp.innerHTML = response.temp; 
			feels_like.innerHTML = response.feels_like; 
			console.log(response);

	})
    .catch(err => console.error(err));
}

submit.addEventListener("click", (e)=>{
	e.preventDefault()
	getWeather(city.value)
})

getWeather("Delhi");


