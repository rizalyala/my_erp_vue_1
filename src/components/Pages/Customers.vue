<script>
import Tables from '../Tables.vue';
import { customers } from '@/data/mockData.js';

export default{
    name: 'Customers',
    components: {
        Tables
    },
    data() {
        return {
            customerRows: customers.map(c => ({ ID: c.id, Name: c.name, Email: c.email, Phone: c.phone, Company: c.company }))
        }
    }
}
</script>
<template>
    <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Customers</h2>
        <Tables
            :headers="['ID', 'Name', 'Email', 'Phone', 'Company']"
            :rows="customerRows"/>
    </div>
</template>
