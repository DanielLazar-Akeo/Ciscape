<script setup lang="ts">
import './Card.scss';

defineProps<{
  author?: string,
  title?: string,
  date?: string,
  hasAudio?: boolean,

  layout?: string,
}>();
</script>

<template>
  <div class="card__author" v-if="author">{{ author }}</div>
  <h3 class="card__title">{{ title }}</h3>
  <div class="card__info" v-if="layout === 'post'">
    <button class="card__play-audio" v-if="hasAudio">
      <span class="card__play-icon">
        <svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M13.9829 26.4649V10.7233L24.9986 18.5884L13.9829 26.4536V26.4649ZM16.2495 15.1319V22.0564L21.1001 18.5884L16.2495 15.1205V15.1319Z" fill="white"/>
          <path d="M18.5175 36.7329C8.52168 36.7329 0.384521 28.5958 0.384521 18.6C0.384521 8.6042 8.52168 0.467041 18.5175 0.467041C28.5132 0.467041 36.6504 8.6042 36.6504 18.6C36.6504 28.5958 28.5132 36.7329 18.5175 36.7329ZM18.5175 2.73366C9.76832 2.73366 2.65114 9.85084 2.65114 18.6C2.65114 27.3491 9.76832 34.4663 18.5175 34.4663C27.2666 34.4663 34.3838 27.3491 34.3838 18.6C34.3838 9.85084 27.2666 2.73366 18.5175 2.73366Z" fill="white"/>
          </svg>
      </span>
      <span class="card__play-text">20 min</span>
    </button>
    <div class="card__date" v-if="date">{{ date }}</div>
  </div>
  <div class="card__message">
    <div class="card__message-label" v-if="layout === 'post'">Description</div>
    <slot />
  </div>
</template>
