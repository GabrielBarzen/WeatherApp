<script setup>
    import Toggle from "../components/Toggle.vue"
    import DeleteButton from "../components/DeleteButton.vue"
</script>

<template>
    <div class="md:max-w-7xl mx-auto">
        <h1 class="text-2xl p-4 m-1">Settings</h1>
            <div id="settings-container" class="">
                <ul class="p-4 m-1 text-lg">
                    <li class="flex justify-between items-center bg-secondary-background p-4 my-4 rounded max-sm:flex-col">
                        <span class="max-sm:mb-2">Temperature Unit</span>
                        <Toggle val1="C" val2="F" name="tempUnit" />
                    </li>

                    <li class="flex justify-between items-center bg-secondary-background p-4 my-4 rounded max-sm:flex-col">
                        <span class="max-sm:mb-2">Temperature Unit</span>
                        <Toggle val1="On" val2="Off" name="test" />
                    </li>
                </ul>
                <div class="flex justify-center mt-8">
                    <DeleteButton buttonText="Delete all my data" class="" />
                </div>
            </div>
    </div>
</template>

<style scoped>
</style>