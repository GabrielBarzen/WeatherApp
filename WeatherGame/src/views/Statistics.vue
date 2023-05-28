<script setup>
    import {ref} from 'vue';
    //
    // let tempUnit = localStorage["tempUnit"];
    // let stats = {};
    //
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
    const statistics = JSON.parse(localStorage.getItem("stats"))
    let printStatistics = statistics;

    let hideList = ["Weather symbol", "Weather category"]
    printStatistics = Object.entries(printStatistics).filter((item) => {
        if (hideList.includes(item[1].name) || item[1].name == undefined ){
            return false;
        }
        return true;
    })
    printStatistics = ref(Object.fromEntries(printStatistics));

    console.log("=========")
</script>

<template>
    <h1 class="text-2xl p-2">Statistics</h1>
    <div id="stats-container" class="p-2">
        <div id="temp-box" v-for="item in printStatistics">
            <ul id="temp-list" class="p-3 bg-gray-700 m-1 rounded text-xl">
                <li id="highest-temp" class=" flex justify-between">
                    <span>{{item.name}}:     </span>
                    <span>{{item.value}} {{item.unit}}</span>
                    

                    <!-- <span class="text">Highest achieved temperature:</span> -->
                    <!-- <span class="value">{{ displayTemp(tempUnit, stats.highestTemp) }}</span> -->
                    <!-- <span class="unit">°{{ tempUnit }}</span> -->
                </li>
            </ul>
        </div>
    </div>

</template>

<style scoped>
</style>
