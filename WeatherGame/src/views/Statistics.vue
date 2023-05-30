<script setup>
    import {ref, watch} from 'vue';
    //
    let tempUnit = localStorage["tempUnit"];
    // let stats = {};
    
    function displayTemp(unit, temp) {
        if (unit == "Cel" || unit == "C") {
            return temp;
    
        } else if (unit == "Far" || unit == "F") {
            let farTemp = ((temp * (9/5)) + 32).toFixed(1);
            return farTemp;    
    
        } else {
            throw new Error('Wrong unit. Only C, Cel, F or Far allowed');
        }
    }
    //
    // stats = JSON.parse(localStorage["stats"]);
    // 
    // let allHistory = JSON.parse(localStorage.getItem("weatherHistory"));
    //
    // for (let key of Object.keys(allHistory)) {
    //     let data = allHistory[key];
    //
    //     if ( (stats["highestTemp"] == null) || (data.temperature.unit == "Cel" && data.temperature.value > stats["highestTemp"]) ) {
    //         stats["highestTemp"] = data.temperature.value;
    //     }
    //
    //     if ( (stats["lowestTemp"] == null) || (data.temperature.unit == "Cel" && data.temperature.value < stats["lowestTemp"]) ) {
    //         stats["lowestTemp"] = data.temperature.value;
    //     }
    // }
    //
    // localStorage.setItem("stats",JSON.stringify(stats));
    // const statistics = ref(localStorage.getItem("stats"));
    // {"value":14.9,"unit":"Cel","name":"Temperature"}

    //{"temperature":{"value":14.9,"unit":"Cel","name":"Temperature"},"airPressure":{"value":1021.5,"unit":"hPa","name":"Air pressure"},"weatherSymbolInteger":{"value":1,"unit":"category","name":"Weather symbol"},"windSpeed":{"value":4.7,"unit":"m/s","name":"Wind speed"},"windDirection":{"value":313,"unit":"degree","name":"Wind direction"},"percipitationCategory":{"value":0,"unit":"category","name":"Weather category"},"horizontalVisibility":{"value":65,"unit":"km","name":"Horizontal visibility"},"frozenPercipitationPercentage":{"value":-9,"unit":"percent","name":"Hail percentage"},"time":"2023-05-28T16:00:00Z"}
    let printStatistics = {};
    if (localStorage.getItem("stats") != null){
        const statistics = JSON.parse(localStorage.getItem("stats"))
        printStatistics = statistics;

        let hideList = ["Weather symbol", "Weather category"]
        printStatistics = Object.entries(printStatistics).filter((item) => {
            if (hideList.includes(item[1].name) || item[1].name == undefined ){
                return false;
            }
            return true;
        })

        let history = JSON.parse(localStorage.getItem("weatherHistory"));
        console.log(history)
        printStatistics = Object.fromEntries(printStatistics);
        let tempHistoricLow = Number.MAX_VALUE;
        let tempHistoricHigh = Number.MIN_VALUE;
        let entries = Object.entries(history);
        
        entries.forEach(element => {
            if (element[1].temperature.value < tempHistoricLow) tempHistoricLow = element[1].temperature.value;
            if (element[1].temperature.value > tempHistoricHigh) tempHistoricHigh = element[1].temperature.value;
        });

        printStatistics.temperature = {
            name: "Temperature",
            unit: "°" + tempUnit,
            value: displayTemp(tempUnit, printStatistics.temperature.value)
        }
     
        printStatistics.tempHistoricLow = {
            name: "Temperature historical low",
            unit: "°" + tempUnit,
            value: displayTemp(tempUnit, tempHistoricLow)
        }
        printStatistics.tempHistoricHigh = {
            name: "Temperature historical High",
            unit: "°" + tempUnit,
            value: displayTemp(tempUnit, tempHistoricHigh)
        }

        printStatistics = ref(printStatistics);

        console.log("=========")
    }
</script>

<template>
    <h1 class="text-2xl p-2" >Statistics</h1>
    <div id="stats-container" class="p-2">
        <div id="temp-box" v-for="item in printStatistics">
            <ul id="temp-list" class="p-3 bg-secondary-background m-1 rounded text-xl">
                <li id="highest-temp" class=" flex justify-between">
                    <span>{{item.name}}:     </span>
                    <span>{{item.value}} {{item.unit}}</span>
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped>
</style>
