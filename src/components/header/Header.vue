<script setup lang="ts">
import SearchBar from './searchbar/SearchBar.vue';
import HeaderButton from './HeaderButton.vue';
import './Header.scss';

const openMobileMenu = () => {
  let headerButtons = document.querySelector('.header__buttons');

  if (!headerButtons) return;

  headerButtons.classList.toggle('header__buttons--active');
};
</script>

<template>
  <header class="header">
    <div class="header__panel">
      <HeaderButton icon="mobile" @click="openMobileMenu"></HeaderButton>
      <div class="header__buttons">
        <HeaderButton icon="back" @click=""></HeaderButton>
        <HeaderButton icon="forward" @click=""></HeaderButton>
        <HeaderButton icon="undo" @click=""></HeaderButton>
        <HeaderButton icon="home" @click=""></HeaderButton>
      </div>
      <SearchBar></SearchBar>
      <img src="@Assets/icons/search_icon.svg" alt="The Microsoft logo used for their 365 branding" decoding="async" loading="lazy" width="65" height="72" class="header__logo">
    </div>
  </header>
</template>