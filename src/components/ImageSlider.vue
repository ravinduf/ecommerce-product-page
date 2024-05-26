<script setup>
import { ref } from 'vue';
import product1 from '../assets/product-1.jpg';
import product2 from '../assets/product-2.jpg';
import product3 from '../assets/product-3.jpg';
import product4 from '../assets/product-4.jpg';

const productImgs = [
  product1,
  product2,
  product3,
  product4,
]

const productImgId = ref(0)

const showLightBox = ref(false)

const increaseProductImgId = () => {
  productImgId.value = productImgId.value < productImgs.length - 1 ? productImgId.value + 1 : 0
}

const decreaseProductImgId = () => {
  productImgId.value = productImgId.value === 0 ? productImgs.length - 1 : productImgId.value - 1
}
</script>

<template>
  <section>
    <div class="md:hidden">
      <span class="absolute flex justify-between w-full top-52 px-3">
        <div class="w-10 h-10 bg-white rounded-full flex items-center pl-[15px] " @click="decreaseProductImgId()">
          <img src="../assets/icon-previous.svg" alt="prev" class="w-2" />
        </div>
        <div class="w-10 h-10 bg-white rounded-full flex items-center pl-[15px] " @click="increaseProductImgId()">
          <img src="../assets/icon-next.svg" alt="next" class="w-2" />
        </div>
      </span>
      <img :src="productImgs[productImgId]" class="h-[300px] w-full" />
    </div>

    <div class="hidden md:block mt-6">
      <img :src="productImgs[productImgId]" alt="product" class="w-full lg:w-[445px] rounded-md"
        @click="showLightBox = true" />
      <span class="flex flex-row md:justify-between lg:space-x-7 lg:justify-normal mt-5">
        <div v-for="(img, index) in productImgs">
          <div :class="{ 'opacity-50 border-primaryOrange border-[3px] rounded-lg': index === productImgId }">
            <img :src="img" alt="prod" class="md:w-[60px] lg:w-[90px] h-auto rounded-md " @click="productImgId = index"
            :class="{ 'opacity-60': index === productImgId }">
          </div>
        </div>
      </span>


      <!-- Light Box -->
      <div>
        <div class="bg-black opacity-80 w-[100vw] h-[100vh] absolute top-0 left-0 z-10"
          :class="{ 'hidden': !showLightBox }"></div>
        <div class="fixed top-20 z-20 left-[calc(50vw-250px)]" :class="{ 'hidden': !showLightBox }">
          <div class="flex flex-col items-end justify-end">
            <svg @click="showLightBox = false" width="14" height="15" class="fill-white mb-3 hover:fill-primaryOrange"
              xmlns="http://www.w3.org/2000/svg">
              <path
                d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z"
                fill="fill-current" fill-rule="evenodd" />
            </svg>
            <span class="absolute flex justify-between w-full top-[40%] px-3">
              <div class="w-10 h-10 bg-white rounded-full flex items-center pl-[15px] -ml-8"
                @click="decreaseProductImgId()">
                <img src="../assets/icon-previous.svg" alt="prev" class="w-2" />
              </div>
              <div class="w-10 h-10 bg-white rounded-full flex items-center pl-[16px] -mr-8"
                @click="increaseProductImgId()">
                <img src="../assets/icon-next.svg" alt="next" class="w-2" />
              </div>
            </span>
            <div>
              <img :src="productImgs[productImgId]" alt="product" class="w-[500px] h-[500px] rounded-md" />
            </div>
            <span class="flex flex-row w-full justify-center space-x-4 mt-5">
              <div v-for="(img, index) in productImgs" class="">
                <div  :class="{'border-primaryOrange border-2 rounded-lg bg-white': index === productImgId }">
                  <img :src="img" alt="prod" class="md:w-[60px] lg:w-[90px] h-auto rounded-md "
                  @click="productImgId = index"
                  :class="{'opacity-50': index === productImgId }"
                  />
                </div>
                
              </div>
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>