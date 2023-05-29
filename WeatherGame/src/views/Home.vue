<script setup>
    import { ref, watch } from 'vue'
    const props = defineProps(['weather'])

    let conditions = {
        1 : {name:"Clear sky",url:new URL('../assets/1.png', import.meta.url).href},
        2 : {name:"Nearly clear sky",url:new URL('../assets/2.png', import.meta.url).href},
        3 : {name:"Variable cloudiness",url:new URL('../assets/3.png', import.meta.url).href},
        4 : {name:"Halfclear sky",url:new URL('../assets/4.png', import.meta.url).href},
        5 : {name:"Cloudy sky",url:new URL('../assets/5.png', import.meta.url).href},
        6 : {name:"Overcast",url:new URL('../assets/6.png', import.meta.url).href},
        7 : {name:"Fog",url:new URL('../assets/7.png', import.meta.url).href},
        8 : {name:"Light rain showers",url:new URL('../assets/8.png', import.meta.url).href},
        9 : {name:"Moderate rain showers",url:new URL('../assets/9.png', import.meta.url).href},
        10: {name:"Heavy rain showers",url:new URL('../assets/10.png', import.meta.url).href},
        11: {name:"Thunderstorm",url:new URL('../assets/11.png', import.meta.url).href},
        12: {name:"Light sleet showers",url:new URL('../assets/12.png', import.meta.url).href},
        13: {name:"Moderate sleet showers",url:new URL('../assets/13.png', import.meta.url).href},
        14: {name:"Heavy sleet showers",url:new URL('../assets/14.png', import.meta.url).href},
        15: {name:"Light snow showers",url:new URL('../assets/15.png', import.meta.url).href},
        16: {name:"Moderate snow showers",url:new URL('../assets/16.png', import.meta.url).href},
        17: {name:"Heavy snow showers",url:new URL('../assets/17.png', import.meta.url).href},
        18: {name:"Light rain",url:new URL('../assets/18.png', import.meta.url).href},
        19: {name:"Moderate rain",url:new URL('../assets/19.png', import.meta.url).href},
        20: {name:"Heavy rain",url:new URL('../assets/20.png', import.meta.url).href},
        21: {name:"Thunder",url:new URL('../assets/21.png', import.meta.url).href},
        22: {name:"Light sleet",url:new URL('../assets/22.png', import.meta.url).href},
        23: {name:"Moderate sleet",url:new URL('../assets/23.png', import.meta.url).href},
        24: {name:"Heavy sleet",url:new URL('../assets/24.png', import.meta.url).href},
        25: {name:"Light snowfall",url:new URL('../assets/25.png', import.meta.url).href},
        26: {name:"Moderate snowfall",url:new URL('../assets/26.png', import.meta.url).href},
        27: {name:"Heavy snowfall",url:new URL('../assets/27.png', import.meta.url).href}
    };
    let location = "";
    let condition;
    let windDirection;
    let img = new URL(`@/assets/1.png`, import.meta.url).href

    watch(props,(oldval,newval) => {
        console.log(props.weather.weatherSymbolInteger.value)
        console.log(`@/assets/${props.weather.weatherSymbolInteger.value}.png`)
        console.log(img)
        let conditionIndex = props.weather.weatherSymbolInteger.value
        img = conditions[conditionIndex].url;
        condition = conditions[conditionIndex].name
        console.log(img)
        windDirection = convertWindDirection(props.weather.windDirection.value)

    }) 
</script>

<script>
    import DesktopWarning from "../components/DesktopWarning.vue"
    // let conditions = {
    //     1: "Clear sky",
    //     2: "Nearly clear sky",
    //     3: "Variable cloudiness",
    //     4: "Halfclear sky",
    //     5: "Cloudy sky",
    //     6: "Overcast",
    //     7: "Fog",
    //     8: "Light rain showers",
    //     9: "Moderate rain showers",
    //     10: "Heavy rain showers",
    //     11: "Thunderstorm",
    //     12: "Light sleet showers",
    //     13: "Moderate sleet showers",
    //     14: "Heavy sleet showers",
    //     15: "Light snow showers",
    //     16: "Moderate snow showers",
    //     17: "Heavy snow showers",
    //     18: "Light rain",
    //     19: "Moderate rain",
    //     20: "Heavy rain",
    //     21: "Thunder",
    //     22: "Light sleet",
    //     23: "Moderate sleet",
    //     24: "Heavy sleet",
    //     25: "Light snowfall",
    //     26: "Moderate snowfall",
    //     27: "Heavy snowfall"
    // };
    
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

