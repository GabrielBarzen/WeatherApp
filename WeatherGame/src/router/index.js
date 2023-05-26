import { createRouter, createWebHistory } from "vue-router";

import Home from "../views/Home.vue"
import Statistics from "../views/Statistics.vue"
import Achievements from "../views/Achievements.vue"
import Settings from "../views/Settings.vue"

const routes = [
    {path: "/", name: "Home", component: Home, props:true},
    {path: "/statistics", name: "Statistics", component: Statistics},
    {path: "/achievements", name: "Achievements", component: Achievements},
    {path: "/settings", name: "Settings", component: Settings}
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes,
    linkActiveClass: "bg-gray-900 text-white"
})

export default router
