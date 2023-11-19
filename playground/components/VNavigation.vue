<script setup lang="ts">
const localeRoute = useLocaleRoute()

const items = [
  {
    label: 'Home',
    name: 'index'
  },
  {
    label: 'Complex',
    name: 'complex'
  },
  {
    label: 'Overload',
    name: 'overload'
  }
]

</script>
<template>
  <ul class="flex gap-6">
    <li v-for="{ name, label } in items" :key="name">
      <ULink :to="localeRoute({ name })" active-class="text-primary"
        inactive-class="text-gray-500 dark:text-gray-400 hover:text-gray-700 dark:hover:text-gray-200">
        {{ label }}
      </ULink>
    </li>
  </ul>
</template>
