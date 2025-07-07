<template>
    <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Purchasing</h2>
        <Tables
            :headers="['ID', 'Supplier', 'Item', 'Quantity', 'Price']"
            :rows="[ 
                { ID: 1, Supplier: 'Supplier A', Item: 'Item X', Quantity: 10, Price: 100 },
                { ID: 2, Supplier: 'Supplier B', Item: 'Item Y', Quantity: 5, Price: 50 },
                { ID: 3, Supplier: 'Supplier C', Item: 'Item Z', Quantity: 20, Price: 200 }
            ]"/>
    </div>
</template>
<script>
import Tables from '../Tables.vue';
export default{
    
    name: 'Purchasing',
    components: {
        Tables
    },
}
</script>