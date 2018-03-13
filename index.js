let updateWidget = function(data) {

  console.log("Got weather data: ", data)

    let weatherImage = data.weather[0]
    let weather_url = "http://openweathermap.org/img/w/" + weatherImage.icon + ".png"
    console.log ("The image url is:", weather_url)
    $("card-img-top bg-primary img-fluid").attr("src", weather_url)

    $(".card-weathertitle").html(data.name)

    $(".card-weathertext").html("It is " + Math.round(data.main.temp) + " degrees outside")

}

let getWeather = function(info) {
  window.weatherInfo = info
  let latitude = info.coords.latitude;
  let longitude = info.coords.longitude;
  let apiKey = '791ffcd1aa96232d591bfe9351d9cffb';

  let weatherServiceURL = 'https://api.openweathermap.org/data/2.5/weather?'
  weatherServiceURL += 'lat=' + latitude
  weatherServiceURL += '&lon=' + longitude
  weatherServiceURL +='&appid=' + apiKey + '&units=imperial'

  fetch(weatherServiceURL).then(convertToJSON).then(updateWidget).catch(displayError);
}

let handlePosition = function(event) {
  console.log ("Starting handlePosition...")
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(getWeather)
  console.log ("Ending handlePosition...")
}

$("#get_forecast").on("click", handlePosition)

let convertToJSON = function(rawData) { return rawData.json(); }
let displayError = function(error) { console.debug(error); }

$(function() {
  let apiKey = "ee7b0e668e0b4223a9808292cf4dae34";
  let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;
  $.get(url, function(data) {
    console.log(data);
    $(".topnews").empty();
      {
      let topstories = data.articles[0];
      let html = '<div class="col-12">';
      html = html + '<h4 class="card-title">' + topstories.title + '</h4>';
      html = html + '<p class="card-text">' + topstories.description + '</p>';
      html = html + '</div></div></div>';
      $(".topnews").append(html);
    }
    $(".topnews").fadeIn(2000);
  });
});

$(function() {
  let apiKey = "9374c39b145945098d2a97f94d476271";
  let url = "https://api.nytimes.com/svc/topstories/v2/home.json?api-key=" + apiKey;
  $.get(url, function(data) {
    console.log(data);
    $(".nytimes").empty();
      {
      let news1 = data.results[0];
      let html = '<div class="col-12">';
      html = html + '<h4 class="card-title">' + news1.title + '</h4>';
      html = html + '<p class="card-text">' + news1.abstract + '</p>';
      html = html + '</div></div></div>';
      $(".nytimes").append(html);
    }
    $(".nytimes").fadeIn(2000);
  });
});

$(function() {
  let apiKey = "ee7b0e668e0b4223a9808292cf4dae34";
  let url = "https://newsapi.org/v2/top-headlines?country=us&apiKey=" + apiKey;
  $.get(url, function(data) {
    console.log(data);
    $(".othernews").empty();
      {
      let news2 = data.articles[1];
      let html = '<div class="col-12">';
      html = html + '<h4 class="card-title">' + news2.title + '</h4>';
      html = html + '<p class="card-text">' + news2.description + '</p>';
      html = html + '</div></div></div>';
      $(".othernews").append(html);
    }
    $(".othernews").fadeIn(2000);
  });
});

$(function() {
  let apiKey = "9374c39b145945098d2a97f94d476271";
  let url = "https://api.nytimes.com/svc/movies/v2/reviews/search.json?api-key=" + apiKey;
  $.get(url, function(data) {
    console.log(data);
    $(".moviereview").empty();
      {
      let mreview = data.results[0];
      let html = '<div class="col-12">';
      html = html + '<h4 class="card-title">' + mreview.display_title + '</h4>';
      html = html + '<p class="card-text">' + mreview.summary_short + '</p>';
      html = html + '</div></div></div>';
      $(".moviereview").append(html);
    }
    $(".moviereview").fadeIn(2000);
  });
});
