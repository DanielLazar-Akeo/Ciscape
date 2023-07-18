<script setup lang="ts">
import './Card.scss';

defineProps<{ background?: string }>();
</script>

<template>
  <img :src="background" alt="A placeholder picture" decoding="async" loading="lazy">
</template>
