<template>
    <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Inventories</h2>
        <Tables
            :headers="['ID', 'Name', 'Quantity', 'Location']"
            :rows="[
                { ID: 1, Name: 'Item A', Quantity: 100, Location: 'Warehouse 1' },
                { ID: 2, Name: 'Item B', Quantity: 50, Location: 'Warehouse 2' },
                { ID: 3, Name: 'Item C', Quantity: 200, Location: 'Warehouse 3' }
            ]"/>
    </div>
</template>

<script>
import Tables from '../Tables.vue';
export default{
    name: 'Inventories',
    components: {
        Tables
    },
}
</script>