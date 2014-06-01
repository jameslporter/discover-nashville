function fetchAndMark(url,infoTemplate,category){
if(category == null){ category = 'default';}
categories[category] = [];
$.getJSON(url, function(data, textstatus) {

    //console.log(data);
    $.each(data, function(i,entry){
        if(!entry.description){ entry.description = 'No description available.';}
        if(!entry.park_notes){ entry.park_notes = 'No park notes provided.'; }
        if(entry.park_notes != null){ entry.longitude=entry.mapped_location.longitude;entry.latitude=entry.mapped_location.latitude;}
        var marker = new google.maps.Marker({
            position: new google.maps.LatLng(entry.latitude, entry.longitude),
            map: map,
            title: entry.title
        });
        categories[category].push(marker);
        var contentString = _.template(infoTemplate,entry);
        var infowindow = new google.maps.InfoWindow({
            content: contentString,
            maxWidth: 180
        });
        google.maps.event.addListener(marker, 'click', function() {
            infowindow.open(map,marker);
            $.each(openwindows,function(k,w){w.close();});
            openwindows.push(infowindow);
        });
    }); // end $.each
}); // end $.getJSON

}

