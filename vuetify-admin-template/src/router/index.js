import { createWebHistory, createRouter } from "vue-router";
import DashBoard from '../views/DashBoard.vue'
import GridSystem from '../views/GridSystem.vue'

const routes = [
    {
        path: '/',
        name: 'DashBoard',
        component: DashBoard
    },
    {
        path: '/grid-system',
        name: 'GridSystem',
        component: GridSystem
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router; 