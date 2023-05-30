<script setup>
    import { ref } from "vue"
    import Toggle from "../components/Toggle.vue"
    import DeleteButton from "../components/DeleteButton.vue"
    import DeleteWarning from "../components/DeleteWarning.vue"

    let deletePopup = ref(false);

    function pressButton () {
        deletePopup.value = !deletePopup.value; //should set to true, and button inside popup will set to false
    }

    function confirmButton () {
        //clear local storage
        //website doesn't work until you refresh it afterwards
        localStorage.clear()
        pressButton();
    }

    function tempUnit () {
        console.log(tempUnit);
        
    }

</script>

<template>
    <div class="md:max-w-7xl mx-auto">
        <!-- <DeleteWarning v-if="deletePopup" class="fixed top-44 left" /> -->
        <div v-if="deletePopup" class="rounded-lg bg-white p-8 shadow-2xl">
        <h2 class="text-lg font-bold">Are you sure you want to do that?</h2>
    
        <p class="mt-2 text-sm text-gray-500">
        Doing that could have cause some issues elsewhere, are you 100% sure it's
        OK?
        </p>
    
        <div class="mt-4 flex gap-2">
        <button @click="confirmButton"
            type="button"
            class="rounded bg-green-50 px-4 py-2 text-sm font-medium text-green-600"
        >
            Yes, I'm sure
        </button>
    
        <button @click="pressButton"
            type="button"
            class="rounded bg-gray-50 px-4 py-2 text-sm font-medium text-gray-600"
        >
        No, go back
        </button>
        </div>
    </div>





        <h1 class="text-2xl p-4 m-1">Settings</h1>
            <div id="settings-container" class="">
                <ul class="p-4 m-1 text-lg">
                    <li class="flex justify-between items-center bg-secondary-background p-4 my-4 rounded max-sm:flex-col">
                        <span class="max-sm:mb-2">Temperature Unit</span>
                        <Toggle val1="C" val2="F" name="tempUnit" />
                    </li>
                </ul>
                <div class="flex justify-center mt-8">
                    <DeleteButton v-on:click="pressButton" buttonText="Delete all my data" class="" />
                </div>
            </div>
    </div>
</template>

<style scoped>
</style>