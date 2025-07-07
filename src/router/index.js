import { createRouter, createWebHistory } from 'vue-router';
import Inventories from '@/components/Pages/Inventories.vue';
import Sales from '@/components/Pages/Sales.vue';
import Reports from '@/components/Pages/Reports.vue';
import Settings from '@/components/Pages/Settings.vue';
import Purchasing from '@/components/Pages/Purchasing.vue';
import Dashboard from '@/components/Pages/Dashboard.vue';
import Products from '@/components/Pages/Products.vue';
import Customers from '@/components/Pages/Customers.vue';

const routes = [
    {path: '/', component: Dashboard, name: 'Dashboard'},
    {path: '/sales', component: Sales, name: 'Sales'},
    {path: '/inventories', component: Inventories, name: 'Inventories'},
    {path: '/purchases', component: Purchasing, name: 'Purchasing'},
    {path: '/products', component: Products, name: 'Products'},
    {path: '/customers', component: Customers, name: 'Customers'},
    {path: '/reports', component: Reports, name: 'Reports'},
    {path: '/settings', component: Settings, name: 'Settings'}
    
]

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
