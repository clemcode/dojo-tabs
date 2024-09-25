<script setup lang="ts">
defineProps<{
  tabs: Array<{ name: string; content: string }>;
}>();
</script>

<template>
  <div class="tabs">
    <button v-for="(tab, key) in tabs" :key="tab.name">
      {{ tab.name }}
    </button>
  </div>
  <div v-for="tab in tabs" :key="tab.name" class="tabs-content" />
</template>
