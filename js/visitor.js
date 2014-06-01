$( document ).ready(function() {

url = 'http://data.nashville.gov/resource/bta3-7qkc.json';

var center = new google.maps.LatLng(36.1866405,-86.7852455);
var mapOptions = {
    zoom: 10,
    center: center
}
map = new google.maps.Map(document.getElementById("map"), mapOptions);
openwindows = [];

publicArtTemplate = '<h4><%= title %></h4><p><%= description %></p>';
fetchAndMark(url,publicArtTemplate);
parkTemplate = '<h4><%= park_name %></h4><p><%= park_notes %></p>';
//fetchAndMark('http://data.nashville.gov/resource/geur-py3i.json',parkTemplate);
specialeventspart = 'https://data.nashville.gov/api/views/vygj-v677/rows.json?accessType=DOWNLOAD';
fetchAndMark(specialeventspart,'special event');
    google.maps.event.addListener(map,'click',function(){
        console.log(openwindows);
        for(var num = 0; num < openwindows.length;num++){
            openwindows[num].close();
        }
        openwindows = [];
    });
});