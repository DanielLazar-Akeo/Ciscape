<script setup lang="ts">
import { store } from '@Src/store.ts';
import { reactive, defineAsyncComponent, watch } from 'vue';
import CardType from './CardType.vue';
import LOAD_CardText from './LOAD_CardText.vue';
import ERROR_CardText from './ERROR_CardText.vue';
import LOAD_CardBackground from './LOAD_CardBackground.vue';
import ERROR_CardBackground from './ERROR_CardBackground.vue';
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

function fakeLoader (obj : any) : any {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(obj);
      store.setFakeLoading(false);
    }, store.ASYNC_FAKE_DELAY)
  });
};

let asyncBG: any = null,
  asyncText: any = null;

watch(
  () => store.getFakeLoading(),
  () => {
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
)

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

// asyncCard = defineAsyncComponent({
//   loader: () => fakeLoader({
//     template: `
//     <div class="card" :class="[ cardSizeStyle ]" :style="{ maxWidth: width + 'px' }" :data-direction="direction">
//       <div class="card__background" :class="cardBackgroundStyle">
//         <CardType class="card__icon" :type="type" v-if="layout === 'post'"></CardType>
//         <asyncBG :background="background"></asyncBG>
//       </div>
//       <div class="card__text" :class="cardTextStyle">
//         <asyncText :title="title" :author="author" :date="date" :layout="layout" :hasAudio="hasAudio">
//           <slot />
//         </asyncText>
//       </div>
//       <CardType class="card__icon" :type="type" v-if="layout !== 'post'"></CardType>
//     </div>
//     `
//   }),
//   loadingComponent: {
//     template: `
//     <div class="card" :class="[ cardSizeStyle ]" :style="{ maxWidth: width + 'px' }" :data-direction="direction">
//       <div class="card__background" :class="cardBackgroundStyle">
//         <CardType class="card__icon" :type="type" v-if="layout === 'post'"></CardType>
//         <div class="img-loading"></div>
//       </div>
//       <div class="card__text" :class="cardTextStyle">
//         <h3 class="title-loading"></h3>
//         <div class="message-loading"></div>
//         <div class="message-loading" style="width: 70%"></div>
//         <div class="message-loading" style="width: 85%"></div>
//       </div>
//       <CardType class="card__icon" :type="type" v-if="layout !== 'post'"></CardType>
//     </div>
//     `
//   },
//   errorComponent: {
//     template: `
//     <div class="card" :class="[ cardSizeStyle ]" :style="{ maxWidth: width + 'px' }" :data-direction="direction">
//       <div class="card__background" :class="cardBackgroundStyle">
//         <CardType class="card__icon" :type="type" v-if="layout === 'post'"></CardType>
//         <asyncBG :background="background"></asyncBG>
//       </div>
//       <div class="card__text" :class="cardTextStyle">
//         <asyncText :title="title" :author="author" :date="date" :layout="layout" :hasAudio="hasAudio">
//           <slot />
//         </asyncText>
//       </div>
//       <CardType class="card__icon" :type="type" v-if="layout !== 'post'"></CardType>
//     </div>
//     `
//   },
// });
</script>

<!-- <template>
  <asyncCard :class="[ cardSizeStyle ]" :style="{ maxWidth: width + 'px' }" :data-direction="direction" :type="type" :background="background" :title="title" :author="author" :date="date" :layout="layout" :hasAudio="hasAudio" ></asyncCard>
</template> -->
<template>
  <div class="card" :class="[ cardSizeStyle ]" :style="{ maxWidth: width + 'px' }" :data-direction="direction">
    <div class="card__background" :class="cardBackgroundStyle">
      <CardType class="card__icon" :type="type" v-if="layout === 'post'"></CardType>
      <asyncBG :background="background"></asyncBG>
    </div>
    <div class="card__text" :class="cardTextStyle">
      <asyncText :title="title" :author="author" :date="date" :layout="layout" :hasAudio="hasAudio">
        <slot />
      </asyncText>
    </div>
    <CardType class="card__icon" :type="type" v-if="layout !== 'post'"></CardType>
  </div>
</template>
