<script setup>
    const props = defineProps(["buttonText"])
 
    function deleteData() {
        alert("lol")
    }
</script>

<template>
    <a class="inline-flex items-center cursor-pointer rounded border-2 border-red-600 bg-transparent px-8 py-3 text-sm font-medium text-red-600 hover:text-white transition-colors hover:bg-red-600 hover:border-red-500 active:opacity-75">{{ props.buttonText }}</a>
</template>

<style scoped>
</style>