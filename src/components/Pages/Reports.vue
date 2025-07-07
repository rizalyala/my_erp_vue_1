<template>
    <div class="p-6">
        <h2 class="text-2xl font-bold mb-4">Reports</h2>
        <Tables
            :headers="['Report ID', 'Title', 'Date', 'Status']"
            :rows="[ 
                { 'Report ID': 1, Title: 'Sales Report', Date: '2023-10-01', Status: 'Completed' },
                { 'Report ID': 2, Title: 'Inventory Report', Date: '2023-10-02', Status: 'Pending' },
                { 'Report ID': 3, Title: 'Financial Report', Date: '2023-10-03', Status: 'In Progress' }
            ]"/>
    </div>
</template>
<script>
import Tables from '../Tables.vue';
export default{
    name: 'Reports',
    components: {
        Tables
    },
}
</script>