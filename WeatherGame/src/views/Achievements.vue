<script setup>
import { ref } from "vue";
import Achievement from "../components/Achievement.vue"
/* Achievement ideas
    - Snowman: have seen snow
    - Wet shoes: have had 5 consecutive days of rain
    - Dry spell: haven't got any rain for a full week
    - Death valley: have experienced 30 degrees celsius or warmer


    Logic:
    Collect stats array from localStorage
    Loop through array
    check if snow days > 0
*/

let achievements = ref([
    {
        title: "Death Valley",
        description: "Experienced temperatures of 30°C or more.",
        unlocked: true,
        image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.drivethenation.com%2Fwp-content%2Fuploads%2F2015%2F09%2FDeath-Valley-Badge-300x300.png&f=1&nofb=1&ipt=e8a1be204d44143d9332088f046949d1a2de84cfd8db936384b29301923a987f&ipo=images"
    },
    {
        title: "Antarctica",
        description: "Experienced temperatures of -10°C or less.",
        unlocked: false,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiaato.org%2Fwp-content%2Fuploads%2F2020%2F04%2FAntarctic-Ambassadors-Logo-1024x1024.png&f=1&nofb=1&ipt=22704b142b3a33bd97d261bb77a1804b6753d809bb4487968f737202758935de&ipo=images"
    },
    {
        title: "Skånsk Winter",
        description: "Experienced rain and winds over 10m/s at the same time.",
        unlocked: false,
        image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FDPxpq2kW4AAyNVh.png%3Alarge&f=1&nofb=1&ipt=829e7abcda35fceaede76daa6e5182f35d7dc06e08b3db39e4a770f074a56634&ipo=images"
    }
]);


function setAchievements() {
    //sets all achievements to locked or not based on stats list
    sortAchievements()
}

function sortAchievements() {
    achievements.value.sort(function(x, y) { 
        return y.unlocked - x.unlocked;
    });
}

setAchievements();

</script>

<template>
    <div class="flex flex-col items-center">
        <h1 class="text-3xl mt-8 mb-1 text-left">Achievements</h1>
        <ul id="achievement-list" class="min-w-full md:px-4">
            <Achievement v-for="achievement in achievements" 
            :title="achievement.title" 
            :unlocked="achievement.unlocked" 
            :description="achievement.description" 
            :image="achievement.image"
            />
        </ul>
    </div>
</template>


<!-- <template>
    <div class="mt-12 grid grid-cols-1 justify-items-center">
        <h1 class="text-3xl font-medium">Achievements</h1>
        <ul id="achievement-list" class="mt-6 w-8/12">
            <li class="h-44 achievment-container flex bg-green-400 p-6">
                <img class="achievement-badge" src="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fpiq.codeus.net%2Fstatic%2Fmedia%2Fuserpics%2Fpiq_79647.png&f=1&nofb=1&ipt=86e0a1fad48655f665104a31e34e16d7bfc6cebc3a14e2bb0a69845406b933c3&ipo=images" />
                <div class="achievement-text flex flex-col justify-center pl-6 pb-6">
                    <span class="achievement-title text-xl font-medium">Death Valley</span>
                    <span class="achievement-description text-lg">Experienced temperatures of 30°C or more. Dogman </span>
                </div>
            </li>
        </ul>
    </div>
</template> -->

<style scoped>

.achievement-badge {
    max-width: 200px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}
</style>