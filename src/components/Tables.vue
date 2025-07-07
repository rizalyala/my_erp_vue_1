<template>
    <div class="overflow-x-auto">
        <table class="min-w-full divide-y divide-gray-200 bg-white">
            <thead class="bg-gray-100">
                <tr>
                    <th
                        v-for="(header, index) in headers"
                        :key="index"
                        class="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider"
                    >
                        {{ header }}
                    </th>
                </tr>
            </thead>
            <tbody class="divide-y divide-gray-200">
                <tr v-for="(row, rowIndex) in rows" :key="rowIndex" class="hover:bg-gray-50">
                    <td
                        v-for="(header, colIndex) in headers"
                        :key="colIndex"
                        class="px-6 py-4 whitespace-nowrap text-sm text-gray-900"
                    >
                        {{ row[header] }}
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
export default {
    name: 'Tables',
    props: {
        headers: {
            type: Array,
            required: true
        },
        rows: {
            type: Array,
            required: true
        }
    }
};
</script>