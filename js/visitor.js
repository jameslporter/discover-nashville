// Construct the catalog query string
url = 'http://data.nashville.gov/resource/bta3-7qkc.json';

var center = new google.maps.LatLng(36.1866405,-86.7852455);
var mapOptions = {
    zoom: 10,
    center: center
}
var map = new google.maps.Map(document.getElementById("map"), mapOptions);

$.getJSON(url, function(data, textstatus) {
    //console.log(data);
    $.each(data, function(i, entry) {
        console.log(entry);
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(entry.latitude, entry.longitude),
            map: map,
            title: location.title
        });
    }); // end $.each
}); // end $.getJSON