<script setup lang="ts">
import CardType from './CardType.vue';
import './Card.scss';
import { reactive } from 'vue';

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
    direction: 'vertical'
  }
);

const bgImage : string = props.background ? props.background : './src/assets/images/image_placeholder.jpg';

const cardBackgroundStyle = reactive({
  'card__background--overlay': props.layout === 'background',
  'card__background--hidden': props.layout === 'full-text',
});
const cardTextStyle = reactive({
  'card__text--transparent': props.layout === 'background',
  'card__text--full-text': props.layout === 'full-text',
});
const cardSizeStyle = props.size ? `card--${props.size}` : '';

</script>

<template>
  <div class="card" :class="[ cardSizeStyle ]" :style="{ maxWidth: width + 'px' }" :data-direction="direction">
    <div class="card__background" :class="cardBackgroundStyle">
      <img :src="bgImage" alt="A placeholder picture" decoding="async" loading="lazy">
    </div>
    <div class="card__text" :class="cardTextStyle">
      <h3 class="card__title">{{ title }}</h3>
      <div class="card__message" v-if="$slots.default">
        <slot />
      </div>
    </div>
    <CardType class="card__icon" :type="type"></CardType>
  </div>
</template>
