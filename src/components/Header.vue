<script setup>
import { ref } from 'vue';

const showDropdown = ref(false)

</script>

<template>
  <section class="block md:hidden">
    <div :class="{ 'hidden': !showDropdown,}" class="absolute top-0 bg-black opacity-80 z-10 w-[100vw] h-[100vh] " @click="showDropdown = false"></div>
    <nav :class="{ 'hidden': !showDropdown,}" class="absolute top-0 bg-white z-20 w-4/6 h-[100vh] left-0 p-6 ">
      <img src="../assets/icon-close.svg" @click="showDropdown = false" class="cursor-pointer" />
      <div class="mt-10 space-y-5 font-kumbh font-bold text-[#1D2026]  cursor-pointer">
        <h3 class="hover:text-[#1D2026]/60 transition-colors duration-100 ease-in-out">Collections</h3>
        <h3 class="hover:text-[#1D2026]/60 transition-colors duration-100 ease-in-out">Men</h3>
        <h3 class="hover:text-[#1D2026]/60 transition-colors duration-100 ease-in-out">Women</h3>
        <h3 class="hover:text-[#1D2026]/60 transition-colors duration-100 ease-in-out">About</h3>
        <h3 class="hover:text-[#1D2026]/60 transition-colors duration-100 ease-in-out">Contact</h3>
      </div>
    </nav>
    <nav class="flex flex-row items-center justify-between m-6">
      <div class="flex flex-row">
        <img src="../assets/icon-menu.svg" class="h-5 cursor-pointer" @click="showDropdown = true" />
        <img src="../assets/logo.svg" class="h-5 ml-3" />
      </div>
      <div class="flex flex-row items-center">
        <img src="../assets/icon-cart.svg" class="h-6 mr-3" />
        <img src="../assets/avatar.png" class="h-7" />
      </div>
    </nav>
  </section>

  <nav class="hidden md:flex items-center justify-between 
      flex-row py-6 border-b-2 border-[#E4E9F2]">
    <div class="flex flex-row space-x-5 items-center text-[#69707D] text-base md:text-[15px]">
      <img src="../assets/logo.svg" class="h-5 mr-5" />
      <h3 class="hover:text-[#1D2026]/60 transition-colors duration-100 ease-in-out cursor-pointer">Collections</h3>
      <h3 class="hover:text-[#1D2026]/60 transition-colors duration-100 ease-in-out cursor-pointer">Men</h3>
      <h3 class="hover:text-[#1D2026]/60 transition-colors duration-100 ease-in-out cursor-pointer">Women</h3>
      <h3 class="hover:text-[#1D2026]/60 transition-colors duration-100 ease-in-out cursor-pointer">About</h3>
      <h3 class="hover:text-[#1D2026]/60 transition-colors duration-100 ease-in-out cursor-pointer">Contact</h3>
    </div>
    <div class="flex items-center">
      <img src="../assets/icon-cart.svg" class="h-5 mr-10" />
      <img src="../assets/avatar.png" class="h-12" />
    </div>
  </nav>
</template>