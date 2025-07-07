<template>
    <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Sales</h2>
        <Tables
            :headers="['Sale ID', 'Customer', 'Item', 'Quantity', 'Total']"
            :rows="[ 
                { 'Sale ID': 1, Customer: 'Customer A', Item: 'Item X', Quantity: 2, Total: 200 },
                { 'Sale ID': 2, Customer: 'Customer B', Item: 'Item Y', Quantity: 1, Total: 100 },
                { 'Sale ID': 3, Customer: 'Customer C', Item: 'Item Z', Quantity: 5, Total: 500 }
            ]"/>
    </div>
</template>
<script>
// This is a placeholder component for Sales page
import Tables from '../Tables.vue';
export default{
    name: 'Sales',
    components: {
        Tables
    },
}
</script>