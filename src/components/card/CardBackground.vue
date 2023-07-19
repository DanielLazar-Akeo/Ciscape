<script setup lang="ts">
import './Card.scss';
// import { getCurrentInstance, watch } from 'vue';
import { store } from '@Src/store.ts';

defineProps<{
  background?: string,
  finishedLoading?: any
}>();

const emit = defineEmits(['finishedLoading']);

function onImgLoad() {
  store.setFakeLoading(false);
  emit('finishedLoading');
}

// watch(() => store.getFakeLoading(),
//   () => {
//     const instance = getCurrentInstance();
//     console.log(instance);
//     instance?.proxy?.$forceUpdate();
//   });
</script>

<template>
  <img :src="background" alt="A placeholder picture" decoding="async" loading="lazy" @load="onImgLoad">
</template>
