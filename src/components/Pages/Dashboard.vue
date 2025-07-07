<template>
  <div class="p-4">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
      <KpiCard title="Total Sales" :value="`${totalSalesRevenue.toFixed(2)}`" valueColor="text-green-500" />
      <KpiCard title="Total Purchases" :value="`${totalPurchaseCost.toFixed(2)}`" valueColor="text-green-500" />
      <KpiCard title="Total Products" :value="totalProducts" valueColor="text-green-500" />
      <KpiCard title="Total Customers" :value="totalCustomers" valueColor="text-green-500" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-4">
        <div class="bg-gray-50 border border-gray-300 rounded-lg p-6 text-center shadow-sm">
            <h3 class="mt-0 text-gray-800 text-xl font-semibold">Sales</h3>
            <p class="text-gray-600">Monitor sales orders, invoices, and customer payments.</p>
        </div>
        <div class="bg-gray-50 border border-gray-300 rounded-lg p-6 text-center shadow-sm">
            <h3 class="mt-0 text-gray-800 text-xl font-semibold">Purchasing</h3>
            <p class="text-gray-600">Manage purchase orders, supplier bills, and payments.</p>
        </div>
        <div class="bg-gray-50 border border-gray-300 rounded-lg p-6 text-center shadow-sm">
            <h3 class="mt-0 text-gray-800 text-xl font-semibold">Inventory</h3>
            <p class="text-gray-600">Track stock levels, manage warehouses, and value inventory.</p>
        </div>
        <div class="bg-gray-50 border border-gray-300 rounded-lg p-6 text-center shadow-sm">
            <h3 class="mt-0 text-gray-800 text-xl font-semibold">Accounts</h3>
            <p class="text-gray-600">Oversee your chart of accounts, general ledger, and financial reports.</p>
        </div>
    </div>

    <div class="mt-8 p-4 bg-white rounded-lg shadow-md flex justify-center">
      <div class="w-full md:w-2/3 lg:w-1/2">
        <BarChart :chartData="salesChartData" />
      </div>
    </div>
  </div>
</template>

<script>
import BarChart from '../charts/BarChart.vue'
import KpiCard from '../KpiCard.vue';
import { sales, purchases, products, customers } from '@/data/mockData.js';

export default {
  name: 'Dashboard',
  components: { BarChart, KpiCard },
  data() {
    return {
      salesData: sales,
      purchasesData: purchases,
      productsData: products,
      customersData: customers
    }
  },
  computed: {
    totalSalesRevenue() {
      return this.salesData.reduce((sum, sale) => sum + sale.total, 0);
    },
    totalPurchaseCost() {
      return this.purchasesData.reduce((sum, purchase) => sum + purchase.cost, 0);
    },
    totalProducts() {
      return this.productsData.length;
    },
    totalCustomers() {
      return this.customersData.length;
    },
    salesChartData() {
      // Example: Aggregate sales by month (dummy for now, needs proper date handling)
      return {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
          {
            label: 'Monthly Sales',
            backgroundColor: '#42b983',
            data: [40, 20, 12, 39, 10, 40, 39] // This data is still dummy, needs to be derived from salesData with date logic
          }
        ]
      }
    }
  }
}
</script>