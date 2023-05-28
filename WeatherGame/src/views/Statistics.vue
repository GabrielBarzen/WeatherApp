<script setup>
    let tempUnit = localStorage["tempUnit"];

    let stats = {
        "highestTemp" : null,
        "lowestTemp" : null,
        "rainyDays" : null,
        "snowyDays" : null
    };

    function displayTemp(unit, temp) {
        if (unit == "Cel" || unit == "C") {
            return temp;

        } else if (unit == "Far" || unit == "F") {
            let farTemp = (temp * (9/5)) + 32;
            return farTemp;    

        } else {
            throw new Error('Wrong unit. Only C, Cel, F or Far allowed');
        }
    }

    if (localStorage["stats"] == null) {
        localStorage["stats"] = JSON.stringify(stats);
    } else {
        stats = JSON.parse(localStorage["stats"]);
    }
    
    let allHistory = JSON.parse(localStorage.getItem("weatherHistory"));

    for (let key of Object.keys(allHistory)) {
        let data = allHistory[key];

        if ( (stats["highestTemp"] == null) || (data.temperature.unit == "Cel" && data.temperature.value > stats["highestTemp"]) ) {
            stats["highestTemp"] = data.temperature.value;
        }

        if ( (stats["lowestTemp"] == null) || (data.temperature.unit == "Cel" && data.temperature.value < stats["lowestTemp"]) ) {
            stats["lowestTemp"] = data.temperature.value;
        }
    }

    localStorage["stats"] = JSON.stringify(stats);
</script>

<template>
    <h1>Statistics</h1>
    <div id="stats-container">
        <div id="temp-box">
            <ul id="temp-list">
                <li id="highest-temp">
                    <span class="text">Highest achieved temperature:</span>
                    <span class="value">{{ displayTemp(tempUnit, stats.highestTemp) }}</span>
                    <span class="unit">°{{ tempUnit }}</span>
                </li>
                <li id="lowest-temp">
                    <span class="text">Lowest achieved temperature:</span>
                    <span class="value">{{ displayTemp(tempUnit, stats.lowestTemp) }}</span>
                    <span class="unit">°{{ tempUnit }}</span>
                </li>
            </ul>
        </div>

        <div id="wind-box">
            <ul id="wind-list">
                <li id="highest-wind">
                    <span class="text">Highest achieved wind speed:</span>
                    <span class="value">00000000</span>
                    <span class="unit">m/s</span>
                </li>
                <li id="lowest-wind">
                    <span class="text">Lowest achieved wind speed:</span>
                    <span class="value">00000000</span>
                    <span class="unit">m/s</span>
                </li>
            </ul>
        </div>

        <div id="misc-box">
            <ul id="misc-list">
                <li id="rainy-days">
                    <span class="text">Amount of rainy days:</span>
                    <span class="value">00000000</span>
                    <span class="unit">days</span>
                </li>
                <li id="snowy-days">
                    <span class="text">Amount of clear sky days:</span>
                    <span class="value">00000000</span>
                    <span class="unit">days</span>
                </li>
            </ul>
        </div>

    </div>

</template>

<style scoped>
</style>
