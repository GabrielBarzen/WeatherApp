<script setup>
    const props = defineProps(["title","description","image","show"])
</script>

<template>
<div v-if="show" class="" >
    <a href="/achievements"
      class="fixed left-1/3 right-1/3 bottom-64 mx-auto block rounded-xl border border-gray-800 bg-secondary-background p-4 shadow-xl sm:p-6 lg:p-8 text-center" 
    >
    <img :src="image" :alt="altText" class="mx-auto object-cover h-32">
      <h3 class="mt-3 text-lg font-bold text-text-color sm:text-xl">
        {{title}}
      </h3>

      <p class="mt-4 text-sm text-text-color">
        {{description}}
      </p>
    </a>
</div>

</template>
