<script setup lang="ts">
import './Card.scss';

const props = defineProps<{ type: string }>()

const typeData = props.type.split(' ');
const typeBackground = typeData[1] ? typeData[1] : 'black';
</script>

<template>
  <div class="content-icon" :class="typeBackground">
    <div class="icon-loading"></div>
  </div>
</template>
