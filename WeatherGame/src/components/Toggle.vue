<script setup>
    import { ref } from "vue"

    const props = defineProps(["val1", "val2", "name"]);
    let currTempUnit = ref(localStorage.getItem("tempUnit"));

    function changeTemp() {
        if (currTempUnit.value == "C") {
            currTempUnit.value = "F";
        } else {
            currTempUnit.value = "C";
        }
        localStorage.setItem("tempUnit", currTempUnit.value);
    }
</script>

<template>
  <div class="grid w-[10rem] grid-cols-2 rounded-md bg-gray-200" x-data="app">
    <div>
      <input @change="changeTemp()" v-if="currTempUnit == 'C'" type="radio" :name="props.name" :id="props.val1" class="peer hidden" checked/>
      <input @change="changeTemp()" v-else type="radio" :name="props.name" :id="props.val1" class="peer hidden"/>
      <label :for="props.val1"
        class="block cursor-pointer select-none rounded-md p-2 text-center peer-checked:bg-blue-500 peer-checked:font-medium peer-checked:text-white"
        >°{{ props.val1 }}</label>
    </div>

    <div>
      <input @change="changeTemp()" v-if="currTempUnit == 'F'"  type="radio" :name="props.name" :id="props.val2" class="peer hidden" checked/>
      <input @change="changeTemp()" v-else  type="radio" :name="props.name" :id="props.val2" class="peer hidden"/>
      <label :for="props.val2"
        class="block cursor-pointer select-none rounded-md p-2 text-center peer-checked:bg-blue-500 peer-checked:font-medium peer-checked:text-white"
        >°{{ props.val2 }}</label>
    </div>
  </div>

</template>

<style scoped>
</style>