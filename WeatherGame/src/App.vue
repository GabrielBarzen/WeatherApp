<script setup>

</script>

<template>
  <main>
    <p>Vue is running</p>
    <router-link to="/">Home</router-link>
    <router-link to="/statistics">Statistics</router-link>
    <router-link to="/achievements">Achievements</router-link>
    <router-link to="/settings">Settings</router-link>
  </main>
  <router-view />
</template>

<style scoped>
</style>
