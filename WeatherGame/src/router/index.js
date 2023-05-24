import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue"
import Statistics from "../views/Statistics.vue"
import Achievements from "../views/Achievements.vue"
import Settings from "../views/Settings.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: "/", name: "Home", component: Home},
        {path: "/statistics", name: "Statistics", component: Statistics},
        {path: "/achievements", name: "Achievements", component: Achievements},
        {path: "/settings", name: "Settings", component: Settings}
    ]
})

export default router