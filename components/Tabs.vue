<script setup lang="ts">
const props = defineProps<{
  tabs: Array<{ name: string; content: string }>;
}>();

const selectedTabIndex = ref(0);
const selectedTab = computed(() => props.tabs[selectedTabIndex.value]);

const select = (index: number) => (selectedTabIndex.value = index);
</script>

<template>
  <div class="parent">
    <div class="tabs">
      <slot
        v-for="(tab, index) in tabs"
        :name="`tab-${index}`"
        :tab="tab"
        :index="index"
        :select="select"
      >
        <button :key="tab.name" @click="select(index)">
          {{ tab.name }}
        </button>
      </slot>
    </div>
    <div class="tabs-content">
      <slot
        name="tab-content"
        :title="selectedTab.name"
        :content="selectedTab.content"
        :index="selectedTabIndex"
      ></slot>
    </div>
  </div>
</template>
