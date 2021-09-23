let srchBtn = document.getElementById("srchBtn")

srchBtn.addEventListener("click", displayWeather)




//http://openweathermap.org/img/wn/10d@2x.png

function displayWeather() {
  let input = document.getElementById("input")
  let city = input.value
  let apiKey = config.WEATHER_API_KEY;
  
  let xhr = new XMLHttpRequest();

  xhr.open("GET", `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`, true)
  
 

  xhr.onprogress = function () {
      console.log('On progress');
  }

  xhr.onload = function (){
    
    if (this.status === 200) {
      obj = JSON.parse(this.responseText)
      // console.log(obj.weather[0].main)
      
      let wind = document.getElementById("wind")
      let temp = document.getElementById("temp")
      let humidity = document.getElementById("humidity")
      let location = document.getElementById("location")
      let description = document.getElementById("description")
      let icon = document.getElementById("icon")
      
      // Array.from(obj).forEach(element => {
      //   console.log(element.weather)
        
      // });
      for (const key in obj) {
      }

      console.log(obj);
      html1 =""
      html1 += `<div class="value" id="temp">${obj.main.temp} &#8451;</div>`
      temp.innerHTML = html1
      html2 =""
      html2 += `<div class="value" id="humidity">${obj.main.humidity}%</div>`
      humidity.innerHTML = html2
      html3 =""
      html3 += `<div class="value" id="wind">${obj.wind.speed} m/s</div>`
      wind.innerHTML = html3
      html4 =""
      html4 += `<div class="status" id="location">${obj.name}</div>`
      location.innerHTML = html4
      html5 =""
      html5 += ` <div class="location" id="description">${obj.weather[0].description}</div>`
      description.innerHTML = html5
      html6 =""
      html6 += `  
      <img src="http://openweathermap.org/img/wn/${obj.weather[0].icon}@2x.png" alt="">`
    
      icon.innerHTML = html6
      
    }
    else{
      console.log("some error");
    }
      
  }


  
  xhr.send()

       
     
        
        
        
  
        
    
        
   
    // console.log(obj.definition);
    // console.log(this.responseText);

}

  
