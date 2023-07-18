<script setup lang="ts">
defineProps<{ type: string }>()
</script>

<template>
  <div class="content-icon" :class="type">
    <img src="@Assets/icons/book_open.svg" alt="An open book" v-if="type === 'book'">
    <img src="@Assets/icons/text_box.svg" alt="A representation of a text box" v-if="type === 'textbox'">
    <img src="@Assets/icons/headphones.svg" alt="A pair of active headphones emitting sound waves" v-if="type === 'headphones'">
    <img src="@Assets/icons/question.svg" alt="The question mark symbol" v-if="type === 'question'">
    <img src="@Assets/icons/video.svg" alt="A video camera" v-if="type === 'video'">
    <img src="@Assets/icons/cursor.svg" alt="A mouse cursor/pointer having clicked on something" v-if="type === 'cursor'">
  </div>
</template>

<style scoped>
  .book {
    background: #9859DD;
  }
  .textbox {
    background: #F35325;
  }
  .headphones {
    background: #81BC06;
  }
  .question {
    background: #3581EA;
  }
  .video {
    background: #623096;
  }
  .cursor {
    background: #F1984D
  }
</style>