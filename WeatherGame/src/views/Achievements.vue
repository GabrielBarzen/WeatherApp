<script setup>
import { ref } from "vue";
import Achievement from "../components/Achievement.vue"
import popup from "../components/AchievementPopup.vue"


// let achievements = ref([
//     {
//         title: "Death Valley",
//         description: "Experienced temperatures of 30°C or more.",
//         unlocked: true,
//         image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.drivethenation.com%2Fwp-content%2Fuploads%2F2015%2F09%2FDeath-Valley-Badge-300x300.png&f=1&nofb=1&ipt=e8a1be204d44143d9332088f046949d1a2de84cfd8db936384b29301923a987f&ipo=images"
//     },
//     {
//         title: "Antarctica",
//         description: "Experienced temperatures of -10°C or less.",
//         unlocked: false,
//         image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fiaato.org%2Fwp-content%2Fuploads%2F2020%2F04%2FAntarctic-Ambassadors-Logo-1024x1024.png&f=1&nofb=1&ipt=22704b142b3a33bd97d261bb77a1804b6753d809bb4487968f737202758935de&ipo=images"
//     },
//     {
//         title: "Skånsk Winter",
//         description: "Experienced rain and winds over 10m/s at the same time.",
//         unlocked: false,
//         image: "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FDPxpq2kW4AAyNVh.png%3Alarge&f=1&nofb=1&ipt=829e7abcda35fceaede76daa6e5182f35d7dc06e08b3db39e4a770f074a56634&ipo=images"
//     }
// ]);
let achievements = ref(JSON.parse(localStorage.getItem("achievements")));

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
    <div class="md:max-w-7xl mx-auto">
        <h1 class="text-2xl py-2 px-3">Achievements</h1>
        <div class="flex flex-col items-center">
            <ul id="achievement-list" class="min-w-full md:px-3">
                <Achievement v-for="achievement in achievements" 
                :title="achievement.title" 
                :unlocked="achievement.unlocked" 
                :description="achievement.description" 
                :image="achievement.image"
                />
            </ul>
        </div>
    </div>
</template>

<style scoped>
</style>
