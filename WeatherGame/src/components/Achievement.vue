<script setup>
    const props = defineProps(["image", "title", "description", "unlocked"]);
    let unlocked = (props.unlocked === true);

</script>

<template>
    <li v-if="unlocked" class="achievment-container flex flex-col p-4 m-4 h-80 min-h-full rounded shadow bg-green-500 md:bg-red-800">
        <img class="achievement-badge" :src="props.image" />
        <div class="achievement-text flex flex-col py-2">
            <span class="achievement-title text-center line-clamp-1 text-lg font-medium">{{ props.title }}</span>
            <span class="achievement-description text-center line-clamp-2">{{ props.description }}</span>
        </div>
    </li>

    <li v-else class="achievment-container flex flex-col p-4 m-4 h-80 min-h-full rounded shadow bg-gray-300 md:bg-red-800 opacity-50">
        <img class="achievement-badge opacity-50" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fcdn1.iconfinder.com%2Fdata%2Ficons%2Fhawcons%2F32%2F698630-icon-114-lock-512.png&f=1&nofb=1&ipt=226e3db9ebcb9093504b449228f135aea00dafd36debc68be962230d5a9ca272&ipo=images" />
        <div class="achievement-text flex flex-col py-2">
            <span class="achievement-title text-center line-clamp-1 text-lg font-medium">{{ props.title }}</span>
            <span class="achievement-description text-center line-clamp-2">{{ props.description }}</span>
        </div>
    </li>
</template>


<style scoped>
.achievement-badge {
    max-width: 200px;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
}
</style>