<script setup>
    import { ref, watch } from 'vue'
    const props = defineProps(['weather'])
    watch(props,(oldval,newval) => {
        console.log(props.weather.weatherSymbolInteger.value)
        console.log(`@/assets/${props.weather.weatherSymbolInteger.value}.png`)
        console.log(img)
        let imageInteger = props.weather.weatherSymbolInteger.value
        img = new URL('../assets/'+imageInteger+'.png', import.meta.url).href;
        condition = conditions[props.weather.weatherSymbolInteger.value]
        console.log(img)
        windDirection = convertWindDirection(props.weather.windDirection.value)

    }) 
</script>

<script>
    import DesktopWarning from "../components/DesktopWarning.vue"

    let conditions = {
        1: "Clear sky",
        2: "Nearly clear sky",
        3: "Variable cloudiness",
        4: "Halfclear sky",
        5: "Cloudy sky",
        6: "Overcast",
        7: "Fog",
        8: "Light rain showers",
        9: "Moderate rain showers",
        10: "Heavy rain showers",
        11: "Thunderstorm",
        12: "Light sleet showers",
        13: "Moderate sleet showers",
        14: "Heavy sleet showers",
        15: "Light snow showers",
        16: "Moderate snow showers",
        17: "Heavy snow showers",
        18: "Light rain",
        19: "Moderate rain",
        20: "Heavy rain",
        21: "Thunder",
        22: "Light sleet",
        23: "Moderate sleet",
        24: "Heavy sleet",
        25: "Light snowfall",
        26: "Moderate snowfall",
        27: "Heavy snowfall"
    };
    
    function convertWindDirection(degrees) {
        let arr = ["N", "NNE", "NE", "ENE", "E", "ESE", "SE", "SSE", "S", "SSW", "SW", "WSW", "W", "WNW", "NW", "NNW"];
        let val = Math.floor((degrees / 22.5) + 0.5);
        return arr[(val % 16)];
    }


    // function displayTemp(unit, temp) {
    //     if (unit == "Cel" || unit == "C") {
    //         return temp;
    //
    //     } else if (unit == "Far" || unit == "F") {
    //         let farTemp = (temp * (9/5)) + 32;
    //         return farTemp;    
    //
    //     } else {
    //         throw new Error('Wrong unit. Only C, Cel, F or Far allowed');
    //     }
    // }

    let conditionValue = 8;

    let tempUnit = localStorage["tempUnit"];
    let location = "[Not working]";
    let condition = conditions[conditionValue];
    let windSpeed = 2;
    let windSpeedUnit = "m/s";
    let windDirectionDegrees = 0;
    let windDirection = convertWindDirection(windDirectionDegrees);
    let img = new URL(`@/assets/1.png`, import.meta.url).href
</script>

<template>

    <div v-if="props.weather.temperature != null" id="weather-content" class="relative mt-40 flex flex-col justify-center items-center content-center">
        <div id="location" class="text-2xl bg-secondary-background">
            {{ location }}
        </div>

        <div id="temperature-container" class="mt-2 mb-3" >
            <span id="temperature" class="text-8xl">
                <span>{{ props.weather.temperature.value }}</span>
            </span>
            <span id="temperature-unit" class="text-8xl">
                <span>°{{ props.weather.temperature.unit }}</span>
            </span>
        </div>

        <div id="condition" class="text-xl">
            {{ condition }}
        </div>

        <div id="wind-container" class="my-1">
            <span id="wind-speed">{{ props.weather.windSpeed.value }}</span>
            <span id="wind-speed-unit" class="ml-0.5 mr-1">{{ props.weather.windSpeed.unit }}</span>
            <span id="wind-direction" > {{ windDirection }}</span>
        </div>

        <img id="weather-img" class="w-24 mt-2"  :src="img" />
    </div>
    <div v-else id="loading-container" class="relative mt-40 flex flex-col justify-center items-center content-center">
        <span id="Loading" class="text-8xl">
            LOADING
        </span>
    </div>
    <DesktopWarning class="absolute bottom-36 right-20"/>
</template>

