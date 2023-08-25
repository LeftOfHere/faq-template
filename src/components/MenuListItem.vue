<script setup lang="ts">
import { onMounted } from "vue";

defineProps<{ name: string; selected?: boolean; location: string }>();

onMounted(() => {});
</script>

<template>
  <a
    class="mdc-list-item"
    :class="{ 'mdc-list-item--activated': selected }"
    :href="location"
    aria-current="page"
  >
    <span class="mdc-list-item__ripple"></span>
    <span class="mdc-list-item__text">{{ name }}</span>
  </a>
</template>

<style scoped lang="scss">
@use "@material/list/evolution-mixins" as list-evolution-mixins;

@include list-evolution-mixins.core-styles;
</style>
