<script setup lang="ts">
const props = defineProps<{ type: string }>()

const typeData = props.type.split(' ');
const typeIcon = typeData[0];
const typeBackground = typeData[1] ? typeData[1] : 'black';

</script>

<template>
  <div class="content-icon" :class="typeBackground">
    <img src="@Assets/icons/book_open.svg" alt="An open book" v-if="typeIcon === 'book'">
    <img src="@Assets/icons/text_box.svg" alt="A representation of a text box" v-if="typeIcon === 'textbox'">
    <img src="@Assets/icons/headphones.svg" alt="A pair of active headphones emitting sound waves" v-if="typeIcon === 'headphones'">
    <img src="@Assets/icons/question.svg" alt="The question mark symbol" v-if="typeIcon === 'question'">
    <img src="@Assets/icons/video.svg" alt="A video camera" v-if="typeIcon === 'video'">
    <img src="@Assets/icons/cursor.svg" alt="A mouse cursor/pointer having clicked on something" v-if="typeIcon === 'cursor'">
  </div>
</template>

<style scoped>
  .black {
    background: #242424;
  }
  .lighter-purple {
    background: #9859DD;
  }
  .redish {
    background: #F35325;
  }
  .green {
    background: #81BC06;
  }
  .blue {
    background: #3581EA;
  }
  .purple {
    background: #623096;
  }
  .orange {
    background: #F1984D
  }
</style>