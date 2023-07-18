<script setup lang="ts">
import './Card.scss';

defineProps<{
  title?: string,
}>();
</script>

<template>
  <h3 class="card__title">{{ title }}</h3>
  <div class="card__message">
    <slot />
  </div>
</template>
