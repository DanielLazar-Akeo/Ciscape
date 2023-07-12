<script setup lang="ts">
import { store } from '../../../store.ts';
import { ref } from 'vue';
import './SearchBar.scss';

const searchText = ref('');
let count = 0;

  // TODO: animation stuffs
const submitToTimeline = () => {
  count++;
  store.setSearchTimeline({
    id: count,
    query: searchText.value
  });
  searchText.value = '';
};
</script>

<template>
  <section class="search-bar">
    <ul class="search-timeline">
      <li v-for="searchQuery in store.searchTimeline" :key="searchQuery.id">{{ searchQuery.query }}</li>
    </ul>
    <form @submit.prevent="submitToTimeline">
      <input type="text" placeholder="Ask us anything..." class="search-bar__input" v-model="searchText" >
    </form>
  </section>
</template>

