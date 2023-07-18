<script setup lang="ts">
import SuperchargeForm from "./components/forms/SuperchargeForm.vue";
import Card from "./components/card/Card.vue";
import Header from "./components/header/Header.vue";
import './style.scss';


import example2 from '@Assets/images/image_example_2.png';
import example3 from '@Assets/images/image_example_3.jpg';
import example4 from '@Assets/images/image_example_4.jpg';
</script>

<template>
  <div class="card-loader">
    <div class="card-list">
      <Card type="book" size="small" layout="mixed" title="Helping startups deliver AI responsibly"></Card>
      <Card type="textbox" size="small" layout="full-text" title="Transform your startup with AI">
        Microsoft for Startups Founders Hub helps startups embrace the transformative power of AI with free access to industry-leading AI technology, including OpenAI, that empowers startups to unlock increased scalability and supercharged growth.
      </Card>
      <Card type="headphones" size="small" layout="background" title="How can AI assist you?"></Card>
      <Card type="question" size="small" layout="mixed" title="How to Differentiate your product from the competition" :background="example2"></Card>
      <Card type="cursor" size="small" layout="cta" title="Take your idea to 
      the next stage with Microsoft for Startups Founders Hub" :background="example4">Free Microsoft tools | Azure credits | Exclusive partner offers | Expert guidance</Card>
    </div>
    <div class="card-list">
      <Card type="video" size="large" layout="background" title="How will GenAI transform Webinars?"></Card>
      <Card type="question" size="small" layout="mixed" title="How to deliver AI responsibly" :background="example3"></Card>
    </div>  
    <Header></Header>
    <div class="card-list">
      <Card type="question" size="small" direction="horizontal" title="How to stay ahead of the curve?"></Card>
      <Card type="question" size="medium" direction="horizontal" title="How to Support your growing startup?"></Card>
    </div>
    <div class="card-list">
      <Card type="textbox" size="medium" layout="full-text" title="Differentiate your product with training support for your models">We provide you training support for your models so you can successfully differentiate your product on the market. Gain additional support to build and train your own models with further credits as your startup grows.<br>
      <br>
      * Currently available to select startups.</Card>
      <Card type="headphones" :width="550" layout="mixed" title="Up to $150k towards Azure OpenAI Service to supercharge you" :background="example4"></Card>
    </div>
  </div>
  <SuperchargeForm></SuperchargeForm>
</template>

<style scoped>
.card-list {
  display: flex;
  flex-wrap: wrap;
  gap: 60px;
  margin: 60px 0;
}
</style>
