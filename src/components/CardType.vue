<script setup lang="ts">
defineProps<{ type: string }>()
</script>

<template>
  <div class="content-icon" :class="type">
    <img src="../assets/icons/book_open.svg" alt="An open book" v-if="type === 'book'">
    <img src="../assets/icons/text_box.svg" alt="A representation of a text box" v-if="type === 'textbox'">
    <img src="../assets/icons/headphones.svg" alt="A pair of active headphones emitting sound waves" v-if="type === 'headphones'">
    <img src="../assets/icons/question.svg" alt="The question mark symbol" v-if="type === 'question'">
    <img src="../assets/icons/video.svg" alt="A video camera" v-if="type === 'video'">
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
</style>