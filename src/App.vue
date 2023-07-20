<script setup lang="ts">
import { onMounted, onUnmounted, watch } from 'vue';
import { store } from '@Src/store.ts';
import { debounce } from './components/utils'
import Masonry from 'masonry-layout';

import './style.scss';

import Header from "./components/header/Header.vue";
import Footer from "./components/footer/Footer.vue";
import CardLoader from "./components/card/CardLoader.vue";

import Card from "./components/card/Card.vue";

import example2 from '@Assets/images/image_example_2.png';
import example3 from '@Assets/images/image_example_3.jpg';
import example4 from '@Assets/images/image_example_4.jpg';
import example5 from '@Assets/images/image_example_5.jpg';
import example6 from '@Assets/images/image_example_6.jpg';
import example7 from '@Assets/images/image_example_7.jpg';
import example8 from '@Assets/images/image_example_8.jpg';
// import example9 from '@Assets/images/image_example_9.jpg';
// import example10 from '@Assets/images/image_example_10.jpg';

let cardLayout : any = {};
function readjustMasonryLayout() {
  if (cardLayout._isLayoutInited) {
    cardLayout.destroy();
  };

  cardLayout = new Masonry(document.querySelector('.card-list') as Element, {
    itemSelector: '.card',
    // columnWidth: '.card-column-sizer',
    columnWidth: 1,
    gutter: '.card-gutter',
  });
}

onMounted(() => {
  store.setFakeLoading(true);
  document.querySelectorAll('.card').forEach(card => {
    card.classList.add('card--is-loading');
  });

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
      document.querySelectorAll('.card').forEach(card => {
        card.classList.remove('card--is-loading');
      });
    }, store.ASYNC_FAKE_DELAY);
  }
)
</script>

<template>
  <Header></Header>
  <CardLoader :class="{'card-loader--loading': store.getFakeLoading(), 'card-loader--new-query': store.getSearchTimelineLength() && store.getFakeLoading()}">
    <div class="card-list">
      <div class="card-column-sizer"></div>
      <div class="card-gutter"></div>
      <Card type="book lighter-purple" size="small" layout="mixed" title="Helping startups deliver AI responsibly" @finishedLoading="readjustMasonryLayout"></Card>
      <Card type="cursor orange" size="small" layout="cta" title="Take your idea to 
      the next stage with Microsoft for Startups Founders Hub" :background="example6" @finishedLoading="readjustMasonryLayout">Free Microsoft tools | Azure credits | Exclusive partner offers | Expert guidance</Card>
      <Card type="question blue" size="small" layout="mixed" title="How to deliver AI responsibly" :background="example3" @finishedLoading="readjustMasonryLayout"></Card>
      <Card type="headphones green" size="small" layout="background" title="How AI can assist you" :background="example7" @finishedLoading="readjustMasonryLayout"></Card>
      <Card type="video purple" size="large" layout="background" title="How will GenAI transform Webinars?" :background="example5" @finishedLoading="readjustMasonryLayout"></Card>
      <Card type="question blue" size="small" layout="mixed" title="How to Differentiate your product from the competition" :background="example2" @finishedLoading="readjustMasonryLayout"></Card>
      <Card type="textbox orange" size="large" layout="full-text" title="Differentiate your product with training support for your models">We provide you training support for your models so you can successfully differentiate your product on the market. Gain additional support to build and train your own models with further credits as your startup grows.<br>
      <br>
      * Currently available to select startups.</Card>
      <Card type="headphones purple" size="huge" layout="post" direction="horizontal" title="Up to $150k towards Azure OpenAI Service to supercharge you" author="Johnathan Miller" date="Jul 02, 2023" hasAudio :background="example4"  @finishedLoading="readjustMasonryLayout">Microsoft for Startups Founders Hub helps startups embrace the transformative power of AI with free access to industry-leading AI technology, including OpenAI, that empowers startups to unlock increased scalability and supercharged growth.</Card>
      <Card type="textbox blue" size="small" layout="full-text" title="Transform your startup with AI" @finishedLoading="readjustMasonryLayout">
        Microsoft for Startups Founders Hub helps startups embrace the transformative power of AI with free access to industry-leading AI technology, including OpenAI, that empowers startups to unlock increased scalability and supercharged growth.
      </Card>
      <Card type="book lighter-purple" size="large" layout="mixed" title="A New Generation of Products" @finishedLoading="readjustMasonryLayout" :background="example8"></Card>
      <!-- <Card type="question blue" size="medium" direction="horizontal" title="How to stay ahead of the curve?" @finishedLoading="readjustMasonryLayout" :background="example9"></Card>
      <Card type="question blue" size="medium" direction="horizontal" title="How to Support your growing startup?" @finishedLoading="readjustMasonryLayout" :background="example10"></Card> -->
    </div>
  </CardLoader>
  <Footer></Footer>
</template>

<style scoped lang="scss">
</style>