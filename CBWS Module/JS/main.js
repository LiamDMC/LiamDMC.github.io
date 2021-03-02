/*--------------------------------------------HOME PAGE-----------------------------------------------*/

$( document ).ready(function() {
$('#HomerowExtra').hide();
$('#menu2').hide();
  $.getJSON({
  url: "https://content.guardianapis.com/search?show-fields=all&api-key=c8ac215c-7caf-426e-8f50-a1a990e5117d&type=article&page="+ page,
  error: function(xhr){alert("An error occured: " + xhr.status + " " + xhr.statusText);},
  success:function(data){
    console.log(data.response.results[0].fields.main);
    console.log(data.response.results[0].fields.headline);
    var resultsHome = data.response.results;
      resultsHome.forEach(HomeOutput);

  }
  });
});

function GetExtra(index) {

console.log(index);
var indexx=index;
  $.getJSON({
  url: "https://content.guardianapis.com/search?show-fields=all&api-key=c8ac215c-7caf-426e-8f50-a1a990e5117d&type=article&page="+ page,
  error: function(xhr){alert("An error occured: " + xhr.status + " " + xhr.statusText);},
  success:function(data){
      var extra= data.response.results[indexx];
    outPutExtraInfo(extra);

  }
});
}

function HomeOutput(item, index){
  var dateHome=JSON.stringify(item.webPublicationDate);
  var dateStringHome1=dateHome.slice(1,11);
  var dateStringHome2=dateHome.slice(12,20);
  $('#Homerow').append('<section class = "col-lg-6 card" ><h3 id="HomeHeaders">'+item.fields.headline+'</h3> <img src="'+item.fields.thumbnail+'"><br> <button class=" BackButton btn btn-info my-2 my-sm-0"  onclick="return GetExtra('+index+');"> More info </button><br><p>'+item.fields.trailText+'</p><br> <p style="font-weight: bold;text-align:center;"class="dateHome">'+dateStringHome1+'  '+dateStringHome2+'</p><br> </section> ');

}

function outPutExtraInfo(item){
  $('#Homerow').hide();
  $('#HomerowExtra').show();
  var date=JSON.stringify(item.webPublicationDate);
  var dateString=date.slice(1,11);
  var dateString2=date.slice(13,20);
  console.log(dateString2);
  $('#HomerowExtra').append('<section class = "col-lg-12 card" ><h3 id="HomeHeaders">'+item.fields.headline+'</h3><p>'+item.fields.main+'</p><p style="font-weight: bold;text-align:center;">'+dateString+'  '+dateString2+'</p><p>'+item.fields.bodyText+'</p> <button class=" BackButton btn btn-info"  onclick="Home();"> Back </button>');

}


 function Home(){
   document.location.reload();
 }


/*--------------------------------------------GLOBAL VARIABLES-SECTION & PAGE -----------------------------------------------*/
var page=2;
var section="";

/*--------------------------------------------SPORTS-----------------------------------------------*/

function Sports(){
  $('#menu3').empty();
SportsBig();
SportsSmall();

}

function SportsBig(){
  section='football';
  $('footer').removeClass ("footerweather") ;
  $('#SearchExtraInfo').empty();
  $('#menu2Extrainfo').empty();
  $("#WeatherTab").empty();
  $('#menu1').show();
  $('#menu1').empty();
  $('#home').hide();
  $("button").hide();
      $('<button type="button" class="btn btn-info" id="PreviousPage"onclick="return PreviousPage();">Previous Page</button>').appendTo('#ButtonDiv');
        $('<button type="button" class="btn btn-info" id="NextPage"onclick="return NextPage();">Next Page</button>').appendTo('#ButtonDiv');
return myGetJSON(section,page);

}

function SportsSmall(){
  section="football";
  $('#menu2').show();
  $('#menu2').empty();
  return myGetJSON2(section,page);

}

/*-----------------------------------------BUSINESS--------------------------------------*/
function Business(){
  $('#menu3').empty();
BusinessBig();
BusinessSmall();

}

function BusinessBig(){
  section='business';
  $('footer').removeClass ("footerweather") ;
  $('#menu2Extrainfo').empty();
  $('#SearchExtraInfo').empty();
  $("#WeatherTab").empty();
  $('#menu1').show();
  $('#menu1').empty();
  $('#home').hide();
  $("button").hide();
  $('<button type="button" class="btn btn-info" id="PreviousPage"onclick="return PreviousPage();">Previous Page</button>').appendTo('#ButtonDiv');
    $('<button type="button" class="btn btn-info" id="NextPage"onclick="return NextPage();">Next Page</button>').appendTo('#ButtonDiv');
return myGetJSON(section,page);

}

function BusinessSmall(){
  section="business";
    $('#menu2').show();
  $('#menu2').empty();
  return myGetJSON2(section,page);

}

/*-------------------------------------POLITICS-----------------------------------*/
function Politics(){
  $('#menu3').empty();
PoliticsBig();
PoliticsSmall();

}


function PoliticsBig(){
  section='politics';
  $('footer').removeClass ("footerweather") ;
  $('#SearchExtraInfo').empty();
  $('#menu2Extrainfo').empty();
  $("#WeatherTab").empty();
  $('#menu1').show();
  $('#menu1').empty();
  $('#home').hide();
  $("button").hide();
  $('<button type="button" class="btn btn-info" id="PreviousPage"onclick="return PreviousPage();">Previous Page</button>').appendTo('#ButtonDiv');
    $('<button type="button" class="btn btn-info" id="NextPage"onclick="return NextPage();">Next Page</button>').appendTo('#ButtonDiv');
return myGetJSON(section,page);

}

function PoliticsSmall(){
  section="politics";
    $('#menu2').show();
  $('#menu2').empty();
  return myGetJSON2(section,page);

}
/*----------------------------TECH--------------------------------*/

function Tech(){
  $('#menu3').empty();
TechBig();
TechSmall();

}

function TechBig(){
  section='technology';
  $('footer').removeClass ("footerweather") ;
  $('#SearchExtraInfo').empty();
  $('#menu2Extrainfo').empty();
  $("#WeatherTab").empty();
  $('#menu1').show();
  $('#menu1').empty();
  $('#home').hide();
  $("button").hide();
  $('<button type="button" class="btn btn-info" id="PreviousPage"onclick="return PreviousPage();">Previous Page</button>').appendTo('#ButtonDiv');
    $('<button type="button" class="btn btn-info" id="NextPage"onclick="return NextPage();">Next Page</button>').appendTo('#ButtonDiv');
return myGetJSON(section,page);

}

function TechSmall(){
  section="technology";
    $('#menu2').show();
  $('#menu2').empty();
  return myGetJSON2(section,page);

}

/*GET DATA FROM API DEPENDING ON SECTION */
function myGetJSON(section,page){
$.getJSON({
url: "https://content.guardianapis.com/search?show-fields=all&api-key=c8ac215c-7caf-426e-8f50-a1a990e5117d&page-size=1&type=article&section="+section+"&page="+ page,
error: function(xhr){alert("An error occured: " + xhr.status + " " + xhr.statusText);},
success:function(data){
  console.log(data.response.results[0].fields.main);
  console.log(data.response.results[0].fields.headline);
  var results = data.response.results;
    results.forEach(outputFunction1);
}
});
}

function myGetJSON2(section,page){
$.getJSON({
url: "https://content.guardianapis.com/search?show-fields=all&api-key=c8ac215c-7caf-426e-8f50-a1a990e5117d&page-size=5&type=article&section="+section+"&page="+ page,
error: function(xhr){alert("An error occured: " + xhr.status + " " + xhr.statusText);},
success:function(data){
  console.log(data.response.results[0].fields.main);
  var results2 = data.response.results;
  var resultsSliced =results2.slice(1);
    resultsSliced.forEach(outputFunction2);
}
});
}

function ExtraInfoMenu2(index){
  var indexx=index;
$.getJSON({
url: "https://content.guardianapis.com/search?show-fields=all&api-key=c8ac215c-7caf-426e-8f50-a1a990e5117d&page-size=5&type=article&section="+section+"&page="+ page,
error: function(xhr){alert("An error occured: " + xhr.status + " " + xhr.statusText);},
success:function(data){

  var extra= data.response.results[indexx+1];
  outPutExtraInfoMenu2(extra);

}
});
}

function ExtraInfoMenu1(index){
  var indexx=index;
$.getJSON({
url: "https://content.guardianapis.com/search?show-fields=all&api-key=c8ac215c-7caf-426e-8f50-a1a990e5117d&page-size=1&type=article&section="+section+"&page="+ page,
error: function(xhr){alert("An error occured: " + xhr.status + " " + xhr.statusText);},
success:function(data){
  var extra= data.response.results[indexx];
outPutExtraInfoMenu1(extra);

}
});


}


function BackToSection(){
  $('html,body').scrollTop(0);
    $('#menu2Extrainfo').empty();
    $('#ButtonDiv').show();
    $('#menu1').show();
    $('#menu2').show();
}


/*-------------------------------------------------------------------------------------------------------------------------------*/

function outputFunction1(item, index) {
  $('#menu1').append('<h2 class=".display-3">'+item.fields.headline+'</h2>');
  $('#menu1').append('<img src="'+item.fields.thumbnail+'" id="Menu1Image"><br>');
  $('#menu1').append('<p>'+item.fields.trailText+'</p>');
  $('#menu1').append('<button class=" BackButton btn btn-info my-2 my-sm-0"  onclick="return ExtraInfoMenu1('+index+');"> More info </button>');
  var date1=JSON.stringify(item.webPublicationDate);
  var dateString1=date1.slice(1,11);
  var dateString2=date1.slice(12,20);
  $('#menu1').append('<p style="font-weight: bold;">'+dateString1+'  '+dateString2+'</p>');

 }


 function outputFunction2(item, index) {

   $('#menu2').append('<h4>'+item.fields.headline+'</h4>');
   $('#menu2').append('<img src="'+item.fields.thumbnail+'"><br>');
   $('#menu2').append('<p>'+item.fields.trailText+'</p>');
   $('#menu2').append('<button class=" BackButton btn btn-info my-2 my-sm-0"  onclick="return ExtraInfoMenu2('+index+');"> More info </button>');
   var date2=JSON.stringify(item.webPublicationDate);
   var dateString3=date2.slice(1,11);
   var dateString4=date2.slice(12,20);
   $('#menu2').append('<br><p style="font-weight: bold;">'+dateString3+'  '+dateString4+'</p>');

  }

  function outPutExtraInfoMenu1(item){
      $('html,body').scrollTop(0);
  $('#ButtonDiv').hide();
    console.log(item);
    console.log(item.fields.headline);
  $('#menu1').hide();
    $('#menu2').hide();

    $('#menu2Extrainfo').append('<section class = "col-lg-12 card" ><h4>'+item.fields.headline+'</h4><p>'+item.fields.main+'</p><br><br><p style="font-weight: bold;text-align:center;">'+item.webPublicationDate.slice(2,10)+'  '+item.webPublicationDate.slice(11,19)+'</p><p>'+item.fields.bodyText+'</p> <button class=" BackButton btn btn-info"  onclick=" return BackToSection();"> Back </button>');

  }



  function outPutExtraInfoMenu2(item){
      $('html,body').scrollTop(0);
  $('#ButtonDiv').hide();
    console.log(item);
  $('#menu1').hide();
    $('#menu2').hide();
    $('#menu2Extrainfo').show();
    $('#menu2Extrainfo').append('<section class = "col-lg-12 card" ><h4>'+item.fields.headline+'</h4><p>'+item.fields.main+'</p><p style="font-weight: bold;text-align:center;">'+item.webPublicationDate.slice(2,10)+'  '+item.webPublicationDate.slice(11,19)+'</p><p>'+item.fields.bodyText+'</p> <button class=" BackButton btn btn-info"  onclick=" return BackToSection();"> Back </button>');

  }


/*NEXT PAGE FUNCTION*/
function NextPage(){
     page = page +1;
     $('#menu2').empty();
     myGetJSON2(section,page);
 }

 /*PREVIOUS PAGE FUNCTION*/
 function PreviousPage(){
      page = page -1;
      if(page==1){
        page=2;
        $('#menu2').empty();
        myGetJSON2(section,page);
      }
      else{
      $('#menu2').empty();
      myGetJSON2(section,page);
  }
}

/*BUTTONS FOR SEARCH PAGE*/
function NextPageSearch(){
     page = page +1;
     $('#menu3').empty();
     myGetJSONSearch(searchValue,page);
 }

 /*PREVIOUS PAGE FUNCTION FOR SEARCH*/
 function PreviousPageSearch(){
      page = page -1;
      if(page==1){
        page=2;
        $('#menu3').empty();
        myGetJSONSearch(searchValue,page);
      }
      else{
      $('#menu3').empty();
      myGetJSONSearch(searchValue,page);
  }
}

/*--------------------------------------------SEARCH-----------------------------------------------*/

 var searchValue="";

function search(){

  searchValue = document.SearchBar.SearchTerm.value;
$('footer').removeClass ("footerweather") ;
$('#SearchExtraInfo').empty();
$('#menu2Extrainfo').empty();
  $("#WeatherTab").empty();
$('#menu3').show();
  $("button").hide();
  $('#menu3').empty();
  $('#home').hide();
  $('#menu1').hide();
  $('#menu2').hide();
  location.href="#menu3";
  $('<button type="button" class="btn btn-info" id="PreviousPage"onclick="return PreviousPageSearch();">Previous Page</button>').appendTo('#ButtonDiv');
    $('<button type="button" class="btn btn-info" id="NextPage"onclick="return NextPageSearch();">Next Page</button>').appendTo('#ButtonDiv');
  return myGetJSONSearch(searchValue,page);


}

function myGetJSONSearch(searchValue,page) {
  $.getJSON({
    url: "https://content.guardianapis.com/search?q="+ searchValue +"&show-fields=all&page-size=6&api-key=c8ac215c-7caf-426e-8f50-a1a990e5117d&page="+ page,
  error: function(xhr){alert("An error occured: " + xhr.status + " " + xhr.statusText);},
  success:function(data){
    var check=data.response.results.length;
    console.log(check);
    if (check===0){
      alert('No Results');
      document.location.reload();
}


else{

    var resultsSearch = data.response.results;
      resultsSearch.forEach(outputSearch);
      var test1=resultsSearch[0];
    var test2=resultsSearch[1];
    var test3=resultsSearch[2];
    var test4=resultsSearch[3];
    var test5=resultsSearch[4];
    var test6=resultsSearch[5];
appendSearchVariables(resultsSearch);
}
  }
 });
}

var item1="";
var item2="";
var item3="";
var item4="";
var item5="";
var item6="";

function appendSearchVariables(item){

  item0=item[0];
  item1=item[1];
  item2=item[2];
  item3=item[3];
  item4=item[4];
  item5=item[5];

}

function OutputExtraInfo(index){
$('#ButtonDiv').hide();
$('#menu3').hide();

if (index=="0"){
  $('html,body').scrollTop(0);
$('#SearchExtraInfo').append('<section class = "col-lg-12 card" ><h3 id="HeadersSearched">'+item0.fields.headline+'</h3><p>'+item0.fields.main+'</p><br> <p style="font-weight: bold;text-align:center;">'+item0.webPublicationDate.slice(2,10)+'  '+item0.webPublicationDate.slice(11,19)+'</p><p>'+item0.fields.bodyText+'</p> <button class=" BackButton btn btn-info"  onclick="BackToSearch();"> Back </button>');

}
if (index=="1"){
  $('html,body').scrollTop(0);
$('#SearchExtraInfo').append('<section class = "col-lg-12 card" ><h3 id="HeadersSearched">'+item1.fields.headline+'</h3><p>'+item1.fields.main+'</p><br><p style="font-weight: bold;text-align:center;">'+item1.webPublicationDate.slice(2,10)+'  '+item1.webPublicationDate.slice(11,19)+'</p><p>'+item1.fields.bodyText+'</p> <button class=" BackButton btn btn-info"  onclick="BackToSearch();"> Back </button>');

}
if (index=="2"){
  $('html,body').scrollTop(0);
$('#SearchExtraInfo').append('<section class = "col-lg-12 card" ><h3 id="HeadersSearched">'+item2.fields.headline+'</h3><p>'+item2.fields.main+'</p><br><p style="font-weight: bold;text-align:center;">'+item2.webPublicationDate.slice(2,10)+'  '+item2.webPublicationDate.slice(11,19)+'</p><p>'+item2.fields.bodyText+'</p> <button class=" BackButton btn btn-info"  onclick="BackToSearch();"> Back </button>');

}
if (index=="3"){
  $('html,body').scrollTop(0);
$('#SearchExtraInfo').append('<section class = "col-lg-12 card" ><h3 id="HeadersSearched">'+item3.fields.headline+'</h3><p>'+item3.fields.main+'</p><br><p style="font-weight: bold;text-align:center;">'+item3.webPublicationDate.slice(2,10)+'  '+item3.webPublicationDate.slice(11,19)+'</p><p>'+item3.fields.bodyText+'</p> <button class=" BackButton btn btn-info"  onclick="BackToSearch();"> Back </button>');

}
if (index=="4"){
  $('html,body').scrollTop(0);
$('#SearchExtraInfo').append('<section class = "col-lg-12 card" ><h3 id="HeadersSearched">'+item4.fields.headline+'</h3><p>'+item4.fields.main+'</p><br><p style="font-weight: bold;text-align:center;">'+item4.webPublicationDate.slice(2,10)+'  '+item4.webPublicationDate.slice(11,19)+'</p><p>'+item4.fields.bodyText+'</p> <button class=" BackButton btn btn-info"  onclick="BackToSearch();"> Back </button>');

}

if (index=="5"){
  $('html,body').scrollTop(0);
$('#SearchExtraInfo').append('<section class = "col-lg-12 card" ><h3 id="HeadersSearched">'+item5.fields.headline+'</h3><p>'+item5.fields.main+'</p><br><p style="font-weight: bold;text-align:center;">'+item5.webPublicationDate.slice(2,10)+'  '+item5.webPublicationDate.slice(11,19)+'</p><p>'+item5.fields.bodyText+'</p> <button class=" BackButton btn btn-info"  onclick="BackToSearch();"> Back </button>');


}
}

function BackToSearch(){
$('html,body').scrollTop(0);
  $('#SearchExtraInfo').empty();
  $('#ButtonDiv').show();
  $('#menu3').show();
}



function outputSearch(item, index){
  var dateSearch=JSON.stringify(item.webPublicationDate);
  var dateStringSearch1=dateSearch.slice(1,11);
  var dateStringSearch2=dateSearch.slice(12,20);
$('#menu3').append('<section class = "col-lg-6 md-6 card" id="SearchSection" ><h3 id="HeadersSearched">'+item.fields.headline+'</h3><img src="'+item.fields.thumbnail+'"><br> <button class=" BackButton btn btn-info my-2 my-sm-0"  onclick="return OutputExtraInfo('+index+');"> More Info</button><p>'+item.fields.trailText+'</p><br><p style="font-weight: bold;text-align:center;" class="dateHome">'+dateStringSearch1+'  '+dateStringSearch2+'</p><br> </section>');


}


/*--------------------------------------------WEATHER-----------------------------------------------*/
function weather(){
$('#WeatherTab').empty();
$('#SearchExtraInfo').empty();
$('#menu2Extrainfo').empty();
  $("button").hide();
  $('#menu3').hide();
  $('#home').hide();
  $('#menu1').hide();
  $('#menu2').hide();
  $('footer').addClass ("footerweather") ;
$('#WeatherTab').append('<h1 style="text-align:center;font-style:italic;font-family:Montserrat,sans-serif;">12 Hour Forecast (Every 3 Hours)</h1>');
$('#WeatherTab').append('<form id="WeatherSearchBar" name="WeatherSearchBar" onsubmit="return false"> <input type="text" id="CityInput"name="SearchTermWeather" value=""  ><input type="submit" id="searchButton" class="btn btn-primary my-2 my-sm-0" name="" value="Search" onclick="WeatherSearch();" ></form>');

}


function WeatherSearch(){

  $('#Table').remove();


  var weatherSearchValue = document.WeatherSearchBar.SearchTermWeather.value;
console.log(weatherSearchValue);
myGetJSONWeather(weatherSearchValue);

}

function myGetJSONWeather(searchValue) {
  $.getJSON({
  url: "https://api.openweathermap.org/data/2.5/forecast?q="+searchValue+",uk&units=metric&appid=870f73c5ff55e3290fe5e687e9ee3b7f" ,
  error: function(xhr){alert("Try a Valid UK City Name: " + xhr.status + " " + xhr.statusText);
return weather();},
  success:function(data){
    outputWeatherSearch(data);



  }
 });
}

function outputWeatherSearch(data){

$('#WeatherTab').append('<table class="table table-bordered table-sm bg-light " id="Table"><tbody id="TableBody"></tbody></table>');
var icon1=data.list[0].weather[0].icon;
var icon2=data.list[1].weather[0].icon;
var icon3=data.list[2].weather[0].icon;
var icon4=data.list[3].weather[0].icon;

var weather1 =data.list[0].weather[0].main;
var weather2 =data.list[1].weather[0].main;
var weather3 =data.list[2].weather[0].main;
var weather4 =data.list[3].weather[0].main;


var date1=data.list[0].dt_txt;
var dateSlice1=date1.slice(11,19);

var date2=data.list[1].dt_txt;
var dateSlice2=date2.slice(11,19);

var date3=data.list[2].dt_txt;
var dateSlice3=date3.slice(11,19);

var date4=data.list[3].dt_txt;
var dateSlice4=date4.slice(11,19);

$('#TableBody').append('<tr><td style="text-align:center;">'+dateSlice1+'</td> <td style="text-align:center;">'+dateSlice2+'</td> <td style="text-align:center;">'+dateSlice3+'</td> <td style="text-align:center;">'+dateSlice4+'</td></tr>');
$('#TableBody').append('<tr><td class="WeatherCheck1"> '+weather1+'<br><img src="http://openweathermap.org/img/wn/'+icon1+'@2x.png" class="WeatherImage"></td> <td class="WeatherCheck1"> '+weather2+'<br><img src="http://openweathermap.org/img/wn/'+icon2+'@2x.png"class="WeatherImage"></td> <td class="WeatherCheck1"> '+weather3+'<br><img src="http://openweathermap.org/img/wn/'+icon3+'@2x.png" class="WeatherImage"></td><td class="WeatherCheck1"> '+weather4+'<br><img src="http://openweathermap.org/img/wn/'+icon4+'@2x.png"class="WeatherImage"></td> </tr>');
$('#TableBody').append('<tr><td>'+data.list[0].main.temp.toFixed(0)+'°'+'</td> <td>'+data.list[1].main.temp.toFixed(0)+'°'+'</td><td>'+data.list[2].main.temp.toFixed(0)+'°'+'</td> <td>'+data.list[3].main.temp.toFixed(0)+'°'+'</td></tr>');




}
