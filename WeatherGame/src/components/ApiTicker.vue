<script setup>
import axios from 'axios';


    var previousLocation = null;
    var previousTime = null;
    //var intervalID = window.setInterval(tickWeatherApi,15000);
    tickWeatherApi();

    
    function tickWeatherApi() {
        navigator.geolocation.getCurrentPosition(success => checkWeatherApiRequest(success), (error) => console.log(error));   
    }

    function checkWeatherApiRequest(success) {
        let currentTime = Date.now();
        let currentLocation = success;
        previousLocation = success;
        console.log(success)
        if (previousTime === null || previousLocation === null) {
            var previousLocation = currentLocation;
            makeApiRequest(currentLocation.coords.latitude,currentLocation.coords.longitude);
        } else if ((currentTime - previousTime) > 60000) {
            var previousLocation = currentLocation;
            makeApiRequest(currentLocation.coords.latitude,currentLocation.coords.longitude);
        } else {
            var previousCoord = previousLocation.coords;
            var currentCoord = currentLocation.coords;
            console.log(previousLocation)
            console.log(currentLocation)
            var distanceInKm = getDistanceFromLatLonInKm(
                previousCoord.latitude,
                previousCoord.longitude,
                currentCoord.latitude,
                currentCoord.longitude)
            console.log(distanceInKm)
            if (distanceInKm > 1) {
                var previousLocation = currentLocation;
                makeApiRequest(currentLocation.coords.latitude,currentLocation.coords.longitude);
            }
        }
    }

    function makeApiRequest(currentLatitude, currentLongitude) {
        
        axios({
            method: "get",
            url: `https://opendata-download-metfcst.smhi.se/api/category/pmp3g/version/2/geotype/point/lon/${currentLongitude}/lat/${currentLatitude}/data.json`
        }).then((data) => apiRequestSuccess(data));
    }

    function apiRequestSuccess(data) {
        previousTime = Date.now();
        let jsonData = JSON.parse(data.request.response);
        let now = jsonData.timeSeries[2];
        let temp = now.parameters[10];
        console.log(now)
        console.log(temp);
    }

    function getDistanceFromLatLonInKm(latitudeFrom,longitudeFrom,latitudeTo,longitudeTo) {
        console.log(latitudeFrom)
        console.log(latitudeTo)
        console.log(longitudeFrom)
        console.log(longitudeTo)
      var R = 6371; // Radius of the earth in km
      var distanceLatitude = degreeToRadian(latitudeTo-latitudeFrom);  // deg2rad below
      var distanceLongitude = degreeToRadian(longitudeTo-longitudeFrom); 
      var a = 
        Math.sin(distanceLatitude/2) * Math.sin(distanceLatitude/2) +
        Math.cos(degreeToRadian(latitudeFrom)) * Math.cos(degreeToRadian(latitudeTo)) * 
        Math.sin(distanceLongitude/2) * Math.sin(distanceLongitude/2); 
      var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a)); 
      var d = R * c; // Distance in km
      return d;
    }

    function degreeToRadian(degree) {
      return degree * (Math.PI/180)
    }
// msl 	hPa 	hmsl 	0 	Air pressure 	Decimal number, one decimal
// t 	C 	hl 	2 	Air temperature 	Decimal number, one decimal
// vis 	km 	hl 	2 	Horizontal visibility 	Decimal number, one decimal
// wd 	degree 	hl 	10 	Wind direction 	Integer
// ws 	m/s 	hl 	10 	Wind speed 	Decimal number, one decimal
// r 	% 	hl 	2 	Relative humidity 	Integer, 0-100
// tstm 	% 	hl 	0 	Thunder probability 	Integer, 0-100
// tcc_mean 	octas 	hl 	0 	Mean value of total cloud cover 	Integer, 0-8
// lcc_mean 	octas 	hl 	0 	Mean value of low level cloud cover 	Integer, 0-8
// mcc_mean 	octas 	hl 	0 	Mean value of medium level cloud cover 	Integer, 0-8
// hcc_mean 	octas 	hl 	0 	Mean value of high level cloud cover 	Integer, 0-8
// gust 	m/s 	hl 	10 	Wind gust speed 	Decimal number, one decimal
// pmin 	mm/h 	hl 	0 	Minimum precipitation intensity 	Decimal number, one decimal
// pmax 	mm/h 	hl 	0 	Maximum precipitation intensity 	Decimal number, one decimal
// spp 	% 	hl 	0 	Percent of precipitation in frozen form 	Integer, -9 or 0-100
// pcat 	category 	hl 	0 	Precipitation category 	Integer, 0-6
// pmean 	mm/h 	hl 	0 	Mean precipitation intensity 	Decimal number, one decimal
// pmedian 	mm/h 	hl 	0 	Median precipitation intensity 	Decimal number, one decimal
// Wsymb2 	code 	hl 	0 	Weather symbol 	Integer, 1-27

</script>
<template>
    <div>
        
    </div>
</template>
