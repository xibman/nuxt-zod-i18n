<script setup lang="ts">
const localeRoute = useLocaleRoute()

const items = [
  {
    label: 'Home',
    name: 'index',
  },
  {
    label: 'Complex',
    name: 'complex',
  },
  {
    label: 'Overload',
    name: 'overload',
  },
]
</script>

<template>
  <ul class="flex gap-6">
    <li
      v-for="{ name, label } in items"
      :key="name"
    >
      <ULink :to="localeRoute({ name })">
        {{ label }}
      </ULink>
    </li>
  </ul>
</template>
