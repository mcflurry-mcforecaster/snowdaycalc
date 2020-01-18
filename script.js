
$(document).ready(function(){
//dictionary of encoded weather icon images
var icons = {
  t01d: "https://www.weatherbit.io/static/img/icons/t01d.png",
  t01n: "https://www.weatherbit.io/static/img/icons/t01n.png",
  t02d: "https://www.weatherbit.io/static/img/icons/t02d.png",
  t02n: "https://www.weatherbit.io/static/img/icons/t02n.png",
  t03d: "https://www.weatherbit.io/static/img/icons/t03d.png",
  t03n: "https://www.weatherbit.io/static/img/icons/t03n.png",
  t04d: "https://www.weatherbit.io/static/img/icons/t04d.png",
  t04n: "https://www.weatherbit.io/static/img/icons/t04n.png",
  t05d: "https://www.weatherbit.io/static/img/icons/t05d.png",
  t05n: "https://www.weatherbit.io/static/img/icons/t05n.png",
  d01d: "https://www.weatherbit.io/static/img/icons/d01d.png",
  d01n: "https://www.weatherbit.io/static/img/icons/d01n.png",
  d02d: "https://www.weatherbit.io/static/img/icons/d02d.png",
  d02n: "https://www.weatherbit.io/static/img/icons/d02n.png",
  d03d: "https://www.weatherbit.io/static/img/icons/d03d.png",
  d03n: "https://www.weatherbit.io/static/img/icons/d03n.png",
  r01d: "https://www.weatherbit.io/static/img/icons/r01d.png",
  r01n: "https://www.weatherbit.io/static/img/icons/r01n.png",
  r02d: "https://www.weatherbit.io/static/img/icons/r02d.png",
  r02n: "https://www.weatherbit.io/static/img/icons/r02n.png",
  r03d: "https://www.weatherbit.io/static/img/icons/r03d.png",
  r03n: "https://www.weatherbit.io/static/img/icons/r03n.png",
  f01d: "https://www.weatherbit.io/static/img/icons/f01d.png",
  f01n: "https://www.weatherbit.io/static/img/icons/f01n.png",
  r04d: "https://www.weatherbit.io/static/img/icons/r04d.png",
  r04n: "https://www.weatherbit.io/static/img/icons/r04n.png",
  r05d: "https://www.weatherbit.io/static/img/icons/r05d.png",
  r05n: "https://www.weatherbit.io/static/img/icons/r05n.png",
  r06d: "https://www.weatherbit.io/static/img/icons/r06d.png",
  r06n: "https://www.weatherbit.io/static/img/icons/r06n.png",
  s01d: "https://www.weatherbit.io/static/img/icons/s01d.png",
  s01n: "https://www.weatherbit.io/static/img/icons/s01n.png",
  s02d: "https://www.weatherbit.io/static/img/icons/s02d.png",
  s02n: "https://www.weatherbit.io/static/img/icons/s02n.png",
  s03d: "https://www.weatherbit.io/static/img/icons/s03d.png",
  s03n: "https://www.weatherbit.io/static/img/icons/s03n.png",
  s04d: "https://www.weatherbit.io/static/img/icons/s04d.png",
  s04n: "https://www.weatherbit.io/static/img/icons/s04n.png",
  s05d: "https://www.weatherbit.io/static/img/icons/s05d.png",
  s05n: "https://www.weatherbit.io/static/img/icons/s05n.png",
  s06d: "https://www.weatherbit.io/static/img/icons/s06d.png",
  s06n: "https://www.weatherbit.io/static/img/icons/s06n.png",
  a01d: "https://www.weatherbit.io/static/img/icons/a01d.png",
  a01n: "https://www.weatherbit.io/static/img/icons/a01n.png",
  a02d: "https://www.weatherbit.io/static/img/icons/a02d.png",
  a02n: "https://www.weatherbit.io/static/img/icons/a02n.png",
  a03d: "https://www.weatherbit.io/static/img/icons/a03d.png",
  a03n: "https://www.weatherbit.io/static/img/icons/a03n.png",
  a04d: "https://www.weatherbit.io/static/img/icons/a04d.png",
  a04n: "https://www.weatherbit.io/static/img/icons/a04n.png",
  a05d: "https://www.weatherbit.io/static/img/icons/a05d.png",
  a05n: "https://www.weatherbit.io/static/img/icons/a05n.png",
  a06d: "https://www.weatherbit.io/static/img/icons/a06d.png",
  a06n: "https://www.weatherbit.io/static/img/icons/a06n.png",
  c01d: "https://www.weatherbit.io/static/img/icons/c01d.png",
  c01n: "https://www.weatherbit.io/static/img/icons/c01n.png",
  c02d: "https://www.weatherbit.io/static/img/icons/c02d.png",
  c02n: "https://www.weatherbit.io/static/img/icons/c02n.png",
  c03d: "https://www.weatherbit.io/static/img/icons/c03d.png",
  c03n: "https://www.weatherbit.io/static/img/icons/c03n.png",
  c04d: "https://www.weatherbit.io/static/img/icons/c04d.png",
  c04n: "https://www.weatherbit.io/static/img/icons/c04n.png",
  u00d: "https://www.weatherbit.io/static/img/icons/u00d.png",
  u00n: "https://www.weatherbit.io/static/img/icons/u00n.png"
}

  //get forecasts from api
  $.getJSON("https://api.weatherbit.io/v2.0/forecast/daily?city=Clarksburg,MD&units=I&key=8cafe4919ef441e58c20000e186c303d", function(dat){
    console.log(dat.data[1])
    var snowdepth = dat.data[1].snow_depth;
    var temp = dat.data[1].temp;
    var cond = dat.data[1].weather.description;
    var ic = dat.data[1].weather.icon;

    //manually get probablities from r
    var probclose = 0;
    var probdelay = 0;
    var close = probclose>50
    var delay = probdelay>50
    document.getElementById("num1").innerHTML = ""+probclose+"%";
    document.getElementById("num2").innerHTML = ""+probdelay+"%";
    document.getElementById("icon").title = cond;

    //display school gif for no closure
    if(close || delay){
      document.body.style.backgroundImage = "url('https://i.giphy.com/media/Yy26NRbpB9lDi/200.webp')"; }
      //display snow gif for predictied closure
    else{
      document.body.style.backgroundImage = "url('https://media3.giphy.com/media/OaWOfqUkDJI7m/source.gif')"; }

    document.getElementById('icon').src = icons[ic]; 
    document.getElementById("temperature").innerHTML = temp; 
    document.getElementById("snow").innerHTML=snowdepth;
    
    //make about and contact us modals to show on button clicks
    var modal = document.getElementById("mod");
    var btn1 = document.getElementById("con");
    var span1 = document.getElementById("x");
    var abt = document.getElementById("abt");
    var btn2 = document.getElementById("about");
    var span2 = document.getElementById("x2");

    btn2.onclick = function() {
      abt.style.display="block";
    }
    btn1.onclick = function(){
      modal.style.display = "block";
      //$('#form_2104').show();
    }
    span1.onclick = function(){
      modal.style.display = "none";
    }
    span2.onclick = function(){
      abt.style.display = "none";
    }
  
  //for next day: new Date().getTime() + 24 * 60 * 60 * 1000
    document.getElementById("date").innerHTML = new Date().toDateString();

  //set message according to school/no school
  if(close){
    document.getElementById("message").innerHTML = "Get ready to relax!";
  }
  else if(delay){
    document.getElementById("message").innerHTML = "Set your alarm two hours back!";}
  else{
    document.getElementById("message").innerHTML="Go do your homework.";
  }
})
})



