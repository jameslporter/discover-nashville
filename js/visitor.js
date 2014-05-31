$( document ).ready(function() {

url = 'http://data.nashville.gov/resource/bta3-7qkc.json';

var center = new google.maps.LatLng(36.1866405,-86.7852455);
var mapOptions = {
    zoom: 10,
    center: center
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

$.getJSON(url, function(data, textstatus) {
    openwindows = [];
    //console.log(data);
    $.each(data, function(i, entry) {
        console.log(entry);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(entry.latitude, entry.longitude),
            map: map,
            title: entry.title
        });
        contentString = '<h4>'+entry.title+'</h4><p>'+entry.description+'</p>';
        infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 150
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
            openwindows.push(infowindow);
        });
    }); // end $.each
}); // end $.getJSON
google.maps.event.addListener(map,'click',function(){
    console.log(openwindows);
    for(var num = 0; num < openwindows.length;num++){
        openwindows[num].close();
    }
    openwindows = [];
});
});