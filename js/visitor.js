$( document ).ready(function() {

url = 'http://data.nashville.gov/resource/bta3-7qkc.json';

var center = new google.maps.LatLng(36.1866405,-86.7852455);
var mapOptions = {
    zoom: 12,
    center: center
}
map = new google.maps.Map(document.getElementById("map"), mapOptions);
openwindows = [];
categories = {};

publicArtTemplate = '<h3>Public Art</h3><h4><%= title %></h4><p><%= description %></p>';
fetchAndMark(url,publicArtTemplate,'art');

metro_public_art = 'http://data.nashville.gov/resource/eviu-nxp6.json';
fetchAndMark(metro_public_art,'<h2><%= artwork %></h2><h3><%= first_name %> <%= last_name %></h3><h4><%= location %></h4> <p><%= description %></p><p><a href="<%= page_link %>">More Information</a></p>','art')


parkTemplate = '<h3>Public Park</h3><h4><%= park_name %></h4><p><%= park_notes %></p>';
fetchAndMark('http://data.nashville.gov/resource/geur-py3i.json',parkTemplate,'parks');

historicmarkers = 'http://data.nashville.gov/resource/vk65-u7my.json';
fetchAndMark(historicmarkers,'<h2><%= title %></h2><h3><%= location %></h3><p><%= description %></p>','historic');
google.maps.event.addListener(map,'click',function(){
    console.log(openwindows);
    for(var num = 0; num < openwindows.length;num++){
        openwindows[num].close();
    }
    openwindows = [];
});
filterList = $('body').append('<ul class="filter"');
$.each(categories, function(i,entry){
    filterList.append('<li><a href="#" class="filter" id="'+i+'">'+i+'</a> </li>')
});
$('.filter').click(function(c){
    console.log(c.target.id);
    clickedCategory = c.target.id;
    $.each(categories.clickedCategory, function(i,w){ w.setVisible(false);});
});
});