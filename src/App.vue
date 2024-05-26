<script setup>
import HeaderVue from './components/Header.vue';
import ImageSlider from './components/ImageSlider.vue';
import ProductInfo from './components/ProductInfo.vue';

</script>
<template>
  <section class="md:w-4/5 md:mx-auto">
    <HeaderVue />
    <div class="flex flex-col md:flex-none md:grid md:grid-cols-2 md:gap-6 md:mt-10 md:px-10">
      <ImageSlider />
      <ProductInfo/>
    </div>
  </section>
</template>

<style scoped>

</style>
