import { createWebHistory, createRouter } from "vue-router";
import Home from "../views/Home.vue";
import About from "../views/About.vue";
import FormComponent from "../views/FormComponent.vue";
const routes = [
    {
        path: '/',
        name: 'home',
        component: Home,
    },
    {
        path: '/about',
        name: 'about',
        component: About,
    },
    {
        path: '/form',
        name: 'form',
        component: FormComponent,
    },
];
const router = createRouter({
    history: createWebHistory('/'),
    routes,
});
export default router;