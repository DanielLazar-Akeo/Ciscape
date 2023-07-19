<script setup lang="ts">
import { store } from '@Src/store.ts';
import { reactive, defineAsyncComponent, watch, ref } from 'vue';
import LOAD_CardText from './LOAD_CardText.vue';
import ERROR_CardText from './ERROR_CardText.vue';
import LOAD_CardBackground from './LOAD_CardBackground.vue';
import ERROR_CardBackground from './ERROR_CardBackground.vue';
import LOAD_CardType from './LOAD_CardType.vue';
import ERROR_CardType from './ERROR_CardType.vue';
import defaultImage from '@Assets/images/image_placeholder.jpg';
import './Card.scss';

const props =
  withDefaults(defineProps<{
    // Content
    type: string,
    title: string,
    author?: string,
    date?: string,
    background?: string,
    hasAudio?: boolean,

    // Card layout
    layout?: string,
    direction?: string,
    size?: string,
    width?: number,
  }>(),
    {
    layout: 'mixed',
    direction: 'vertical',
    background: defaultImage
  }
);

const cardBackgroundStyle = reactive({
  'card__background--overlay': props.layout === 'background',
  'card__background--hidden': props.layout === 'full-text',
});
const cardTextStyle = reactive({
  'card__text--transparent': props.layout === 'background',
  'card__text--full-text': props.layout === 'full-text',
  'card__text--cta': props.layout === 'cta',
  'card__text--post': props.layout === 'post',
});
const cardSizeStyle = props.size ? `card--${props.size}` : '';

const componentKey = ref(0);

function fakeLoader (obj : any) : any {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(obj);
    }, store.ASYNC_FAKE_DELAY)
  });
};

watch(() => store.getSearchTimelineLength(),
  () => {
    setTimeout(() => {
      componentKey.value += 1;
      doAsyncFakeLoading();
    }, 0.5);
  });

let asyncBG: any = null,
  asyncText: any = null,
  asyncIcon: any = null;

const doAsyncFakeLoading = () => {
  asyncIcon = defineAsyncComponent({
    loader: () => fakeLoader(import('./CardType.vue')),
    loadingComponent: LOAD_CardType,
    errorComponent: ERROR_CardType,
  });

  asyncBG = defineAsyncComponent({
    loader: () => fakeLoader(import('./CardBackground.vue')),
    loadingComponent: LOAD_CardBackground,
    errorComponent: ERROR_CardBackground,
  });

  asyncText = defineAsyncComponent({
    loader: () => fakeLoader(import('./CardText.vue')),
    loadingComponent: LOAD_CardText,
    errorComponent: ERROR_CardText,
  });
}
doAsyncFakeLoading();

</script>

<template>
  <div class="card" :class="[ cardSizeStyle ]" :style="{ maxWidth: width + 'px' }" :data-direction="direction" >
    <div class="card__background" :class="cardBackgroundStyle">
      <asyncIcon class="card__icon" :type="type" v-if="layout === 'post'" :key="componentKey"></asyncIcon>
      <asyncBG :background="background" @finishedLoading="$emit('finishedLoading')" :key="componentKey"></asyncBG>
    </div>
    <div class="card__text" :class="cardTextStyle">
      <asyncText :title="title" :author="author" :date="date" :layout="layout" :hasAudio="hasAudio" :key="componentKey">
        <slot />
      </asyncText>
    </div>
    <asyncIcon class="card__icon" :type="type" v-if="layout !== 'post'" :key="componentKey"></asyncIcon>
  </div>
</template>
