import { createRouter, createWebHistory } from 'vue-router';
import BusinessList from "@/views/business/BusinessList.vue";
import BusinessDetail from "@/views/business/BusinessDetail.vue";

const routes = [
    {
        path: '/',
        component: BusinessList
    },
    {
        path: '/:id',
        name:'BusinessDetail',
        component: BusinessDetail
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router