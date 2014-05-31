function fetchAndMark(url,infoTemplate){

$.getJSON(url, function(data, textstatus) {
    openwindows = [];
    //console.log(data);
    $.each(data, function(i,entry){
        console.log(entry);
        if(!entry.description){ entry.description = 'No description available.';}
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(entry.latitude, entry.longitude),
            map: map,
            title: entry.title
        });
        contentString = _.template(infoTemplate,entry);
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

}

