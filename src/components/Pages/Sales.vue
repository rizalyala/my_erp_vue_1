<template>
  <div class="p-8 bg-gray-50 min-h-screen">
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
        <h2 class="text-2xl font-bold mb-4">Recent Sales</h2>
        <Tables
            :headers="['Sale ID', 'Customer', 'Product', 'Quantity', 'Total']"
            :rows="saleRows"/>
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
    }
}
</script>