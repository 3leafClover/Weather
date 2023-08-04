let weather={
    apiKey:"06b1d5a98aaf0465a2ee5afe98c64003",
    fetchWeather:function(city){
        fetch("https://api.openweathermap.org/data/2.5/weather?q="+city +"&units=metric&appid=" +this.apiKey)
        .then(response=>response.json()) //.then is a promise
        .then(data=>{
            console.log(data)
            this.displayWeather(data);
        })
    },
    displayWeather:function(data){
        const {name}=data;
        const {icon,description}=data.weather[0];
        const {temp,humidity}=data.main;
        const {speed}=data.wind;
        const cityName=document.querySelector(".city");
        cityName.innerHTML="Weather in "+name;
        const tempature=document.querySelector(".temp");
        tempature.innerHTML=temp+"C";
        const iconImg=document.querySelector(".icon");
        iconImg.src="https://openweathermap.org/img/wn/"+icon+".png";
        const descriptionInfo=document.querySelector(".description");
        descriptionInfo.innerHTML=description;
        const humidityInfo=document.querySelector(".humidity");
        humidityInfo.innerHTML="Humidity: "+humidity;
        const windSpeed=document.querySelector(".wind");
        windSpeed.innerHTML="Wind Speed: "+speed;
        document.body.style.backgroundImage ="url('https://source.unsplash.com/1600x900/?" + name + "')";
    }
}

var searchInput=localStorage.getItem("searchItem")

weather.fetchWeather(searchInput)

btn=document.getElementById("btn");

btn.addEventListener("click",()=>{
    search=document.querySelector(".search-bar").value
    weather.fetchWeather(search);
    localStorage.setItem("searchItem",search)
});