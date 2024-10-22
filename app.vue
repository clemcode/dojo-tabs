<script setup>
const tabs = [
  {
    name: "Tab1",
    icon: "🔥",
    content: "Content1",
  },
  { name: "Tab2", icon: "🔥", content: "Content2" },
  { name: "Tab3", content: "Content3" },
  { name: "Tab4", content: "Content4" },
];

const preventSelect = (index, callback) => {
  if (confirm("sur ??")) 
    callback(index);
};
</script>

<template>
  <div>
    <Tabs :tabs="tabs">
      <!-- tab btn -->
      <template #tab-1="{ tab, select, index }">
        <button @click="preventSelect(index, select)">
          <i>{{ tab.icon }}</i>
          <i>{{ tab.name }}</i>
        </button>
      </template>

      <!-- tab content -->
      <template #tab-content="{ title, content, index }">
        <div v-if="index == 1" :style="{ background: 'red' }">
          coucou
          <h3>{{ title }}</h3>
          <p>{{ content }}</p>
        </div>
        <div v-else>
          else
          <h1>{{ title }}</h1>
          <p>{{ content }}</p>
        </div>
      </template>
    </Tabs>
  </div>
</template>
