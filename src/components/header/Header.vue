<script setup lang="ts">
import { store } from '../../store.ts';
import SearchBar from './searchbar/SearchBar.vue';
import HeaderButton from './HeaderButton.vue';
import './Header.scss';
</script>

<template>
  <header class="header">
    <div class="header__panel">
      <div class="header__buttons">
        <HeaderButton icon="back" @click=""></HeaderButton>
        <HeaderButton icon="forward" @click=""></HeaderButton>
        <HeaderButton icon="undo" @click=""></HeaderButton>
        <HeaderButton icon="home" @click=""></HeaderButton>
      </div>
      <SearchBar></SearchBar>
      <img src="../../assets/icons/Microsoft_365_(2022).png" alt="The Microsoft logo used for their 365 branding" decoding="async" loading="lazy" width="65" height="72" class="header__logo">
    </div>
  </header>
</template>