<script setup>
    function closeElement() {
        document.getElementById("desktopwarn-container").classList.remove("md:block");
    }
</script>

<template>
    <div id="desktopwarn-container" class="hidden md:block absolute rounded-lg border border-gray-200 shadow-lg">
        <button class="absolute -end-1 -top-1 rounded-full border border-gray-300 bg-gray-100 p-1" @click="closeElement">
            <span class="sr-only">Close</span>
            <svg xmlns="http://www.w3.org/2000/svg" class="h-3 w-3" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
            </svg>
        </button>

        <div class="flex items-center gap-4 p-4">
            <img alt="Women" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Floonietimes.com%2Fwp-content%2Fuploads%2F2018%2F06%2FSanta-Clara-Valley-Water-Drop-Mascot-min.jpg&f=1&nofb=1&ipt=3c387530f2d0c40878873f4ec4af5139be005214b497e58fa56bf268ed0eec3e&ipo=images" class="h-12 w-12 rounded-lg object-cover" />
            <div>
                <p class="font-medium text-gray-900">Rain Man</p>
                <p class="max-w-md line-clamp-3 text-sm text-gray-500">The website is best used on your mobile device. Some functions might not be available on desktop!</p>
            </div>
        </div>
    </div>
</template>

<style scoped>
</style>