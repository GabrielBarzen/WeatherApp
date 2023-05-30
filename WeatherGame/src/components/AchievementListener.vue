<script setup>
    import {ref, defineExpose} from "vue";
    let achievementTemplate = ([
        {
            id : 0,
            title: "Death Valley",
            description: "Experienced temperatures of 30°C or more.",
            unlocked: false,
            condition: ((temp) => {
                return temp >= 30 ;
            }),
            image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.drivethenation.com%2Fwp-content%2Fuploads%2F2015%2F09%2FDeath-Valley-Badge-300x300.png&f=1&nofb=1&ipt=e8a1be204d44143d9332088f046949d1a2de84cfd8db936384b29301923a987f&ipo=images"
        },
        {
            id : 1,
            title: "Antarctica",
            description: "Experienced temperatures of -10°C or less.",
            condition: ((temp) => {
                return temp <= -10;
            }),
            unlocked: false,
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiaato.org%2Fwp-content%2Fuploads%2F2020%2F04%2FAntarctic-Ambassadors-Logo-1024x1024.png&f=1&nofb=1&ipt=22704b142b3a33bd97d261bb77a1804b6753d809bb4487968f737202758935de&ipo=images"
        },
        {
            id : 2,
            title: "Skånsk Winter",
            description: "Experienced rain and winds over 10m/s at the same time.",
            condition: ((temp,windSpeed,weatherIcon) => {
                let tc = windSpeed >= 10 ? true : false;
                let ic = weatherIcon >= 8 ? true : false;
                return tc && ic ? true : false
            }),
            unlocked: false,
            image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FDPxpq2kW4AAyNVh.png%3Alarge&f=1&nofb=1&ipt=829e7abcda35fceaede76daa6e5182f35d7dc06e08b3db39e4a770f074a56634&ipo=images"
        },
        {
            id : 3,
            title: "Swedish summer",
            description: "Experienced temperatures over 10 degrees.",
            condition: ((temp,windSpeed,weatherIcon) => {
                return temp > 10;
            }),
            unlocked: false,
            image: "https://www.freeiconspng.com/uploads/sweden-icon-32.png"
        },
    ]);

    function updateAchievements() {
        if (localStorage.getItem("achievements") === null) {
            localStorage.setItem("achievements",JSON.stringify(achievementTemplate))
        }
        console.log("CHECKING ACHIEVEMENTS")
        let historicalData = JSON.parse(localStorage.getItem("weatherHistory"));
        let historicalDataEntries = Object.entries(historicalData);
        achievementTemplate.forEach(achievement => {
            historicalDataEntries.forEach(entry => {
                if (entry[0] != "undefined") {
                    let entryValues = entry[1];
                    if (achievement.condition(
                        entryValues.temperature.value,
                        entryValues.windSpeed.value,
                        entryValues.weatherSymbolInteger.value)) {
                        let achievements = JSON.parse(localStorage.getItem("achievements"));
                        if (!achievements[achievement.id].unlocked) {
                            //Put code for achievement popup here
                            alert("achievement get: "+ achievements[achievement.id].title+"\n"+achievements[achievement.id].description)
                            achievements[achievement.id].unlocked = true
                        };
                        localStorage.setItem("achievements",JSON.stringify(achievements));
                    }
                }
            })
        })
    }
    defineExpose({
        updateAchievements,
    })
</script>
