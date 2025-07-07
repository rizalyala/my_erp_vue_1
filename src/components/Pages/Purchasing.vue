<template>
    <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Purchasing Dashboard</h2>

        <!-- KPI Cards -->
        <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">
            <KpiCard title="Total Purchase Orders" :value="totalPurchaseOrders" valueColor="text-purple-500" />
            <KpiCard title="Total Purchase Cost" :value="`${totalPurchaseCost.toFixed(2)}`" valueColor="text-purple-500" />
            <KpiCard title="Number of Suppliers" :value="numberOfSuppliers" valueColor="text-purple-500" />
        </div>

        <h3 class="text-xl font-semibold mb-4">Purchase Order List</h3>
        <Tables
            :headers="['ID', 'Supplier', 'Item', 'Quantity', 'Cost']"
            :rows="purchaseRows"/>
    </div>
</template>
<script>
import Tables from '../Tables.vue';
import KpiCard from '../KpiCard.vue';
import { purchases, products } from '@/data/mockData.js';

export default{
    name: 'Purchasing',
    components: {
        Tables, KpiCard
    },
    data() {
        return {
            purchaseData: purchases,
            productData: products
        }
    },
    computed: {
        totalPurchaseOrders() {
            return this.purchaseData.length;
        },
        totalPurchaseCost() {
            return this.purchaseData.reduce((sum, purchase) => sum + purchase.cost, 0);
        },
        numberOfSuppliers() {
            const uniqueSuppliers = new Set(this.purchaseData.map(purchase => purchase.supplier));
            return uniqueSuppliers.size;
        },
        purchaseRows() {
            return this.purchaseData.map(p => ({
                ID: p.id,
                Supplier: p.supplier,
                Item: this.productData.find(prod => prod.id === p.productId)?.name || 'N/A',
                Quantity: p.quantity,
                Cost: `${p.cost.toFixed(2)}`
            }));
        }
    }
}
</script>