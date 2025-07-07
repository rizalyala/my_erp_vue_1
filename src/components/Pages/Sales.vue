<template>
  <div class="p-8 min-h-screen">
    <h1 class="text-3xl font-bold mb-8 text-gray-800">Sales Dashboard</h1>

    <!-- Sales KPI Cards -->
    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
      <KpiCard title="Total Revenue" :value="`${totalRevenue.toFixed(2)}`" valueColor="text-gray-800" />
      <KpiCard title="Total Orders" :value="totalOrders" valueColor="text-gray-800" />
      <KpiCard title="Total Customers" :value="totalCustomers" valueColor="text-gray-800" />
      <KpiCard title="Avg. Order Value" :value="`${averageOrderValue.toFixed(2)}`" valueColor="text-gray-800" />
    </div>

    <!-- Recent Sales Table -->
    <div class="bg-white rounded-lg shadow p-6">
        <div class="flex justify-between items-center mb-4">
            <h2 class="text-2xl font-bold text-gray-800">Recent Sales</h2>
            <div>
                <button class="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mr-2">
                    +
                </button>
                <button class="bg-red-300 hover:bg-red-600 text-white font-bold py-2 px-4 rounded">
                    Delete Selected
                </button>
            </div>
        </div>
        <Tables
            :headers="['Sale ID', 'Customer', 'Product', 'Quantity', 'Total', 'Actions']"
            :rows="saleRows"
            :enable-actions="true"/>
    </div>
  </div>
</template>
<script>
import Tables from '../Tables.vue';
import KpiCard from '../KpiCard.vue';
import { sales, customers, products } from '@/data/mockData.js';

export default{
    name: 'Sales',
    components: {
        Tables, KpiCard
    },
    data() {
        return {
            salesData: sales,
            customerData: customers,
            productData: products
        }
    },
    computed: {
        totalRevenue() {
            return this.salesData.reduce((sum, sale) => sum + sale.total, 0);
        },
        totalOrders() {
            return this.salesData.length;
        },
        totalCustomers() {
            const uniqueCustomerIds = new Set(this.salesData.map(sale => sale.customerId));
            return uniqueCustomerIds.size;
        },
        averageOrderValue() {
            return this.totalOrders > 0 ? this.totalRevenue / this.totalOrders : 0;
        },
        saleRows() {
            return this.salesData.map(s => ({
                'Sale ID': s.id,
                Customer: this.customerData.find(c => c.id === s.customerId)?.name || 'N/A',
                Product: this.productData.find(p => p.id === s.productId)?.name || 'N/A',
                Quantity: s.quantity,
                Total: `${s.total.toFixed(2)}`
            }));
        }
    },
    methods: {
        handleDeleteRow(row) {
            // In a real application, you would send a request to your backend to delete the sale
            // For now, we'll just remove it from the local data
            this.salesData = this.salesData.filter(sale => sale.id !== row['Sale ID']);
        }
    }
}
</script>