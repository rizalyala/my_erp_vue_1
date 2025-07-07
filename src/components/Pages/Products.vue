<script>
import Tables from '../Tables.vue';
import { products } from '@/data/mockData.js';

export default{
    name: 'Products',
    components: {
        Tables
    },
    data() {
        return {
            productRows: products.map(p => ({ ID: p.id, Name: p.name, Category: p.category, Price: `${p.price.toFixed(2)}`, Stock: p.stock }))
        }
    }
}
</script>
<template>
    <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Products</h2>
        <Tables
            :headers="['ID', 'Name', 'Category', 'Price', 'Stock']"
            :rows="productRows"/>
    </div>
</template>
