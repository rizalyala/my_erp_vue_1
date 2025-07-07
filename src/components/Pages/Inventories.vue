<template>
    <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Inventories Dashboard</h2>

        <!-- KPI Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <KpiCard title="Total Inventory Value" :value="`${totalInventoryValue.toFixed(2)}`" valueColor="text-blue-500" />
            <KpiCard title="Total Items" :value="totalItems" valueColor="text-blue-500" />
            <KpiCard title="Items Low on Stock" :value="lowStockItems" valueColor="text-red-500" />
            <KpiCard title="Number of Products" :value="numberOfProducts" valueColor="text-blue-500" />
        </div>

        <h3 class="text-xl font-semibold mb-4">Inventory List</h3>
        <Tables
            :headers="['ID', 'Name', 'Quantity', 'Location']"
            :rows="inventoryRows"/>
    </div>
</template>

<script>
import Tables from '../Tables.vue';
import KpiCard from '../KpiCard.vue';
import { products } from '@/data/mockData.js';

export default{
    name: 'Inventories',
    components: {
        Tables, KpiCard
    },
    data() {
        return {
            productData: products
        }
    },
    computed: {
        totalInventoryValue() {
            return this.productData.reduce((sum, product) => sum + (product.price * product.stock), 0);
        },
        totalItems() {
            return this.productData.reduce((sum, product) => sum + product.stock, 0);
        },
        lowStockItems() {
            return this.productData.filter(product => product.stock < 100).length; // Example: low stock if quantity < 100
        },
        numberOfProducts() {
            return this.productData.length;
        },
        inventoryRows() {
            return this.productData.map(p => ({
                ID: p.id,
                Name: p.name,
                Quantity: p.stock,
                Location: 'Warehouse 1' // Placeholder, as location is not in mockData
            }));
        }
    }
}
</script>

