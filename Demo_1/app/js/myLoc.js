//функция округления числа до нужного количества знаков
function roundPlus(x, n) { //x - число, n - количество знаков
  if(isNaN(x) || isNaN(n)) return false;
  var m = Math.pow(10,n);
  return Math.round(x*m)/m;
}

//опции отслеживания проверка положения каждые 100мс без кэширования и высокая точность
var options = {
    enableHightAccuracy: true,
    timeout: 100,
    maximumAge: 0
};

var watchId = null; //переменная для сброса отслеживания
var map;
var prevCoords; //координаты для вычисления предыдущей части пути

//координаты компании
var ourCoords = {
    lat: 61.778344,
    lng: 34.407477
};

window.onload = getMyLocation;

function getMyLocation() {
    if(navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(displayLocation, displayError, options);

        var watchButton = document.getElementById("watch");
        watchButton.onclick = watchLocation;

        var clearWatchButton = document.getElementById("clearWatch");
        clearWatch.onclick = clearWatch;

        var getRoute = document.getElementById("getRoute");
        getRoute.onclick = route;
        // var getRoute = document.getElementById("getRoute");
        // getRoute.onclick = navigator.geolocation.getCurrentPosition(route, displayError, options);

    } else {
        alert("no support geolocation");
    }
}

function watchLocation () {
    watchId = navigator.geolocation.watchPosition(displayLocation, displayError, options);
}

function clearWatch() {
    if(watchId) {
        navigator.geolocation.clearWatch(watchId);
        watchId = null;
    }
}

function displayLocation(position) {
    var latitude = position.coords.latitude;
    var longitude = position.coords.longitude;

    var location = document.getElementById("location");
    location.innerHTML = "Ваша широта: " + latitude + ", долгота: " + longitude;
    location.innerHTML += " (определено за " + options.timeout + " миллисекунд)";

    var km = computeDistance(position.coords, ourCoords);
    var distance = document.getElementById("distance");
    distance.innerHTML = "Вы в " + km + " км от нашей компании";
    distance.innerHTML += " (c " + position.coords.accuracy + " точностью метров)"
    if (map == null) {
        showMap(position.coords);
        prevCoords = position.coords;
    } else {
        var meters = computeDistance(position.coords, prevCoords) * 1000;
        if (meters > 0) {
            scrollMapToPosition(position.coords);
            position.coords = null;
        }
    }
}

function displayError(error) {
    var errorTypes = {
        0: "Unknown error",
        1: "Permission denied by user",
        2: "Position is no available",
        3: "Request timed out"
    };
    var errorMessage = errorTypes[error.code];
    if (error.code == 0 || error.code == 2) {
        errorMessage = errorMessage + " " + error.message;
    }
    var div = document.getElementById("location");
    div.innerHTML = errorMessage;
    options.timeout +=100;
    navigator.geolocation.getCurrentPosition(
        displayLocation,
        displayError,
        options);
    div.innerHTML += "... попытка с timeout = " + options.timeout + " мс";
}

//computeDistance////////////////////////////////////////
function computeDistance (startCoords, destCoords) {
    var startLatRads = degreesToRadians(startCoords.latitude);
    var startLongRads = degreesToRadians(startCoords.longitude);
    var destLatRads = degreesToRadians(destCoords.lat);
    var destLongRads = degreesToRadians(destCoords.lng);

    var Radius = 6371;
    var distance = Math.acos(Math.sin(startLatRads)*Math.sin(destLatRads)+Math.cos(startLatRads)*Math.cos(destLatRads)*Math.cos(startLongRads - destLongRads))*Radius;
    return roundPlus(distance, 2);
}

function degreesToRadians(degrees) {
    var radians = (degrees * Math.PI) / 180;
    return radians;
}
//////////////////////////////////////////////////////////

function showMap(coords) {
    var googleLatAndLong = new google.maps.LatLng(coords.latitude, coords.longitude);

    var mapOptions = {
        scrollwheel: false,
        zoom: 13,
        center: googleLatAndLong,
        mapTypeId: google.maps.MapTypeId.ROADMAP
    };

    var mapDiv = document.getElementById("map");
    map = new google.maps.Map(mapDiv, mapOptions);

    var title = "Ваше местоположение";
    var content = "Вы находитесь здесь: " + coords.latitude + ", " + coords.longitude;
    addMarker(map, googleLatAndLong, title, content);
}

//////////////////////////////////////////////////////////

function addMarker(map, latlong, title, content) {
    //маркер для компании
    var companyImage = new google.maps.MarkerImage(
        '../img/map-marker/marker-images/image.png',
        new google.maps.Size(90,29),
        new google.maps.Point(0,0),
        new google.maps.Point(45,29)
    );

    var companyShape = {
        coord: [89,0,89,1,89,2,89,3,89,4,89,5,89,6,89,7,89,8,89,9,89,10,89,11,89,12,89,13,89,14,89,15,89,16,89,17,89,18,89,19,89,20,89,21,89,22,89,23,89,24,89,25,89,26,89,27,89,28,0,28,0,27,0,26,0,25,0,24,0,23,0,22,0,21,0,20,0,19,0,18,0,17,0,16,0,15,0,14,0,13,0,12,0,11,0,10,0,9,0,8,0,7,0,6,0,5,0,4,0,3,0,2,0,1,0,0,89,0],
        type: 'poly'
    };

    var markerCompanyOptions = {
        icon: companyImage,
        shape: companyShape,
        position: ourCoords,
        map: map,
        title: "Наша компания",
        clickable: true
    };

    var markerCompany = new google.maps.Marker(markerCompanyOptions);

    //маркер вашего местоположения
    var markerOptions = {
        position: latlong,
        map: map,
        title: title,
        clickable: true
    };

    var marker = new google.maps.Marker(markerOptions);

  var infoWindowOptions = {
    content: content,
    position: latlong
  };

  var infoWindow = new google.maps.InfoWindow(infoWindowOptions);

  google.maps.event.addListener(marker, "click", function(){
    infoWindow.open(map);
        });
}

function scrollMapToPosition(coords) {
    var latitude = coords.latitude;
    var longitude = coords.longitude;
    var latlong = new google.maps.LatLng(latitude, longitude);

    map.panTo(latlong);

    addMarker(map, latlong, "Ваше новое положение ", "Вы переместились: " + latitude + ", " + longitude);
}

function route() {
    // var latitude = position.coords.latitude;
    // var longitude = position.coords.longitude;

    // console.log(latitude, longitude);

    var directionsService = new google.maps.DirectionsService;
    var directionsDisplay = new google.maps.DirectionsRenderer;

    var request = {
        origin: new google.maps.LatLng(33, 44), //точка старта
        destination: new google.maps.LatLng(44,61), //точка финиша
        travelMode: google.maps.DirectionsTravelMode.DRIVING //режим прокладки маршрута
    };

    directionsService.route(request, function(response, status) {
        if (status == google.maps.DirectionsStatus.OK) {
            directionsDisplay.setDirections(response);
        }
    });

    directionsDisplay.setMap(map);
}