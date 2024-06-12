function createMap(result, status) {
    if (status === google.maps.GeocoderStatus.OK) {
        var myPosition = result[0].geometry.location;
        var myOptions = {
            zoom: 14,
            center: myPosition,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var myMap = new google.maps.Map(document.getElementById("map_canvas"), myOptions);
    }
}

function drawMap(myAddress) {
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({
        address: myAddress
    }, 
        createMap);
}


function createMap2(result, status) {
    if (status === google.maps.GeocoderStatus.OK) {
        var myPosition = result[0].geometry.location;
        var myOptions = {
            zoom: 14,
            center: myPosition,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var myMap2 = new google.maps.Map(document.getElementById("map_canvas2"), myOptions);
    }
}

function drawMap2(myAddress) {
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({
        address: myAddress
    }, 
        createMap2);
}



function createMap3(result, status) {
    if (status === google.maps.GeocoderStatus.OK) {
        var myPosition = result[0].geometry.location;
        var myOptions = {
            zoom: 14,
            center: myPosition,
            mapTypeId: google.maps.MapTypeId.ROADMAP
        };
        var myMap3 = new google.maps.Map(document.getElementById("map_canvas3"), myOptions);
    }
}

function drawMap3(myAddress) {
    var geocoder = new google.maps.Geocoder();

    geocoder.geocode({
        address: myAddress
    }, 
        createMap3);
}
