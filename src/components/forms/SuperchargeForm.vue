<script setup lang="ts">
import './SuperchargeForm.scss';
import { store } from '@Src/store';
import { reactive } from 'vue';

const form = reactive({
  name: '',
  email: '',
  company: ''
});

function submitForm() {
  store.setFormState('success');
  document.querySelectorAll('.form-panel__field').forEach(el => {
    el.setAttribute('value', '');
  });
};
</script>

<template>
  <div class="form-panel" v-if="store.formState !== 'success'">
    <div class="form-panel__title">Apply For A Supercharge</div>
    <form action="#" class="form-panel__form" @submit.prevent="submitForm">
      <input type="text" placeholder="First & Last Name" class="form-panel__field" v-model="form.name">
      <input type="email" placeholder="Email Address" class="form-panel__field" v-model="form.email">
      <input type="text" placeholder="Company Website" class="form-panel__field" v-model="form.company">
      <button type="submit" class="form-panel__submit">Apply Now</button>
    </form>
  </div>
  <div class="form-success" v-if="store.formState === 'success'">
    <img src="@Assets/icons/form_success.svg" class="form-success__icon">
    <div class="form-success__message">
      Congratulations,<br>
      You're Approved!
    </div>
  </div>
</template>
