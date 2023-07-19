<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue';
import { store } from '@Src/store.ts';
import { debounce } from './components/utils'

import './style.scss';

import Header from "./components/header/Header.vue";
import Footer from "./components/footer/Footer.vue";
import CardLoader from "./components/card/CardLoader.vue";

import Card from "./components/card/Card.vue";
import Masonry from 'masonry-layout';

import example2 from '@Assets/images/image_example_2.png';
import example3 from '@Assets/images/image_example_3.jpg';
import example4 from '@Assets/images/image_example_4.jpg';
import example5 from '@Assets/images/image_example_5.jpg';
import example6 from '@Assets/images/image_example_6.jpg';
import example7 from '@Assets/images/image_example_7.jpg';

const masonryOptions = {
  itemSelector: '.card',
  gutter: 40,
  horizontalOrder: true,
  resize: true
};

let cardLayout : any = {};
function readjustMasonryLayout() {
  let cardGrid: Element = document.querySelector('.card-list') as Element;

  if (cardLayout._isLayoutInited) {
    cardLayout.destroy();
  };

  cardLayout = new Masonry(cardGrid, masonryOptions);
}

onMounted(() => {
  store.setFakeLoading(true);

  readjustMasonryLayout();

  window.addEventListener('resize', debounce(readjustMasonryLayout, 200));
});

onUnmounted(() => {
  window.removeEventListener('resize', debounce(readjustMasonryLayout, 200));
});

watch(
  () => store.getFakeLoading(),
  () => {
    setTimeout(() => {
      store.setFakeLoading(false);
    }, store.ASYNC_FAKE_DELAY);
  }
)
</script>

<template>
  <Header></Header>
  <CardLoader :class="{'card-loader--loading': store.getFakeLoading(), 'card-loader--new-query': store.getSearchTimelineLength() && store.getFakeLoading()}">
    <div class="card-list">
      <Card type="book lighter-purple" size="small" layout="mixed" title="Helping startups deliver AI responsibly" @finishedLoading="readjustMasonryLayout"></Card>
      <Card type="cursor orange" size="small" layout="cta" title="Take your idea to 
      the next stage with Microsoft for Startups Founders Hub" :background="example6" @finishedLoading="readjustMasonryLayout">Free Microsoft tools | Azure credits | Exclusive partner offers | Expert guidance</Card>
      <Card type="question blue" size="small" layout="mixed" title="How to deliver AI responsibly" :background="example3" @finishedLoading="readjustMasonryLayout"></Card>
      <Card type="headphones green" size="small" layout="background" title="How AI can assist you" :background="example7" @finishedLoading="readjustMasonryLayout"></Card>
      <Card type="video purple" size="large" layout="background" title="How will GenAI transform Webinars?" :background="example5" @finishedLoading="readjustMasonryLayout"></Card>
      <Card type="question blue" size="small" layout="mixed" title="How to Differentiate your product from the competition" :background="example2" @finishedLoading="readjustMasonryLayout"></Card>
      <Card type="headphones orange" size="small" layout="background" title="How can AI assist you?" @finishedLoading="readjustMasonryLayout"></Card>
      <Card type="book purple" size="small" layout="mixed" title="Helping startups deliver AI responsibly" @finishedLoading="readjustMasonryLayout"></Card>
      <Card type="textbox blue" size="small" layout="full-text" title="Transform your startup with AI" @finishedLoading="readjustMasonryLayout">
        Microsoft for Startups Founders Hub helps startups embrace the transformative power of AI with free access to industry-leading AI technology, including OpenAI, that empowers startups to unlock increased scalability and supercharged growth.
      </Card>
      <Card type="headphones purple" size="huge" layout="post" direction="horizontal" title="Up to $150k towards Azure OpenAI Service to supercharge you" author="Johnathan Miller" date="Jul 02, 2023" hasAudio :background="example4"  @finishedLoading="readjustMasonryLayout">Microsoft for Startups Founders Hub helps startups embrace the transformative power of AI with free access to industry-leading AI technology, including OpenAI, that empowers startups to unlock increased scalability and supercharged growth.</Card>
      <Card type="book lighter-purple" size="small" layout="mixed" title="Helping startups deliver AI responsibly" @finishedLoading="readjustMasonryLayout"></Card>
      <Card type="question blue" size="small" direction="horizontal" title="How to stay ahead of the curve?" @finishedLoading="readjustMasonryLayout"></Card>
      <Card type="question blue" size="medium" direction="horizontal" title="How to Support your growing startup?" @finishedLoading="readjustMasonryLayout"></Card>
      <Card type="headphones orange" size="small" layout="background" title="How can AI assist you?" @finishedLoading="readjustMasonryLayout"></Card>
    </div>
  </CardLoader>
  <Footer></Footer>
</template>

<style scoped lang="scss">
.card-loader {
  display: block;
  padding-bottom: 428px;
}
.card-list {
  /* 3xCardSmall + 2xGutter */
  $CardSmall3x: 370px * 3;
  $Gutter2x: 80px;
  $padding: 30px;
  max-width: ($CardSmall3x + $Gutter2x + ($padding * 2));
  margin: 0 auto;
  padding: 0 $padding;

  &::before,
  &::after {
    content: '';
    display: none;
    background: green;
    opacity: 0.5;
    width: $padding;
    position: absolute;
    height: 100%;
    top: 0;
    z-index: 9;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
}

.card:nth-child(1) {
  margin-top: 120px;
}
.card:nth-child(3) {
  margin-top: 60px;
}
</style>

<!-- <style scoped>
.card-loader {
  flex-direction: row;
  padding-bottom: 428px;
  justify-content: center;
  flex-wrap: wrap;
}
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  justify-content: center;
}
.card-list--vertical {
  display: flex;
  flex-direction: column;
  gap: 30px;
  justify-content: center;
}

@media screen and (min-width: 1024px) {
  .card-list--vertical:nth-child(1) {
    margin-top: 240px;
  }
  .card-list--vertical:nth-child(2) {
    margin-top: -240px;
  }
  .card-list--vertical:nth-child(3) {
    margin-top: 0;
  }
}
</style> -->
