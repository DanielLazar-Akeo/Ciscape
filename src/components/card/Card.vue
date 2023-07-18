<script setup lang="ts">
import { reactive, defineAsyncComponent } from 'vue';
import CardType from './CardType.vue';
import LOAD_CardText from './LOAD_CardText.vue';
import ERROR_CardText from './ERROR_CardText.vue';
import LOAD_CardBackground from './LOAD_CardBackground.vue';
import ERROR_CardBackground from './ERROR_CardBackground.vue';
import defaultImage from '@Assets/images/image_placeholder.jpg';
import './Card.scss';

const props =
  withDefaults(defineProps<{
    type: string,
    title: string,
    layout?: string,
    direction?: string,
    background?: string,
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
});
const cardSizeStyle = props.size ? `card--${props.size}` : '';

const ASYNC_FAKE_DELAY = 10000;

function fakeLoader (obj : any) : any {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(obj);
    }, ASYNC_FAKE_DELAY)
  });
};

const asyncBG = defineAsyncComponent({
  loader: () => fakeLoader(import('./CardBackground.vue')),
  loadingComponent: LOAD_CardBackground,
  errorComponent: ERROR_CardBackground,
});

const asyncText = defineAsyncComponent({
  loader: () => fakeLoader(import('./CardText.vue')),
  loadingComponent: LOAD_CardText,
  errorComponent: ERROR_CardText,
});
</script>

<template>
  <div class="card" :class="[ cardSizeStyle ]" :style="{ maxWidth: width + 'px' }" :data-direction="direction">
    <div class="card__background" :class="cardBackgroundStyle">
      <asyncBG :background="background"></asyncBG>
    </div>
    <div class="card__text" :class="cardTextStyle">
      <asyncText :title="title">
        <slot />
      </asyncText>
    </div>
    <CardType class="card__icon" :type="type"></CardType>
  </div>
</template>
