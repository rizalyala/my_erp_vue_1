<template>
  <div class="bg-white border border-gray-200 rounded-lg p-6 text-center">
    <h4 class="text-gray-800 mb-2">{{ title }}</h4>
    <p :class="['text-2xl', 'font-bold', valueColor]">{{ value }}</p>
  </div>
</template>

<script>
export default {
  name: 'KpiCard',
  props: {
    title: {
      type: String,
      required: true
    },
    value: {
      type: [String, Number],
      required: true
    },
    valueColor: {
      type: String,
      default: 'text-green-500' // Default color
    }
  }
}
</script>
