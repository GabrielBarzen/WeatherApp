<script setup>
    import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/vue'
    import ApiTicker from './ApiTicker.vue'
    import { Bars3Icon, Cog6ToothIcon, XMarkIcon } from '@heroicons/vue/24/outline'

    const navigation = [
        { name: 'Home', to: '/', current: true },
        { name: 'Statistics', to: '/statistics', current: false },
        { name: 'Achievements', to: "/achievements", current: false }
        // { name: 'Settings', to: "/settings", current: false },
    ]

    //intervalID = window.setInterval(emit('weather',weather),60000);

</script>

<template>
    <Disclosure as="nav" class="" v-slot="{ open }">
        <div class="mx-auto max-w-7xl px-2 md:px-6 lg:px-8">
            <div class="relative flex h-16 items-center justify-between">
                
                <!-- Hamburger menu-->
                <div class="absolute inset-y-0 left-0 flex items-center md:hidden">
                    <DisclosureButton class="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white">
                    <span class="sr-only">Open main menu</span>
                    <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                    <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
                    </DisclosureButton>
                </div>

                <div class="flex flex-1 items-center justify-center md:items-stretch md:justify-start">
                    <div class="flex flex-shrink-0 items-center">
                        <p class="text-text-highlight">Weather App</p>
                    </div>
                    <div class="hidden md:ml-6 md:block">
                    <div class="flex space-x-4">
                        <router-link v-for="item in navigation" :key="item.name" :to="item.to" :class="['text-text-color hover:bg-background-highlight', 'rounded-md px-3 py-2 text-md font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>

                    </div>
                    </div>
                </div>
                <div class="absolute inset-y-0 right-0 flex items-center pr-2 md:static md:inset-auto md:ml-6 md:pr-0">
                    <router-link type="button" to="/settings" class="rounded-full p-1 text-text-color hover:bg-background-highlight">
                        <Cog6ToothIcon class="h-6 w-6" aria-hidden="true"/>
                    </router-link>
                </div>
            </div>
        </div>

        <DisclosurePanel class="md:hidden" v-slot="{close}">
            <div class="space-y-1 px-2 pb-3 pt-2">
                <router-link @click="close()" v-for="item in navigation" :key="item.name" :to="item.to" :class="['text-gray-300 hover:bg-gray-700 hover:text-white', 'block rounded-md px-3 py-2 text-base font-medium']" :aria-current="item.current ? 'page' : undefined">{{ item.name }}</router-link>
            </div>
        </DisclosurePanel>
    </Disclosure>
</template>

<style scoped>
</style>
