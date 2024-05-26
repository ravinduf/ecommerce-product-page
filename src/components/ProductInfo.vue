<template>
  <section class="font-kumbh mx-4 mb-4 mt-6 md:mt-20">
    <div>
      <p class="text-primaryOrange font-bold  text-xs">SNEAKER COMPANY</p>
      <h1 class="my-4 text-[28px] text-[#1D2026] font-bold leading-8 md:text-[44px] md:leading-10">Fall Limited Edition Sneakers</h1>
      <p class="text-[#69707D] text-base">These low-profile sneakers are your perfect casual wear
        companion. Featuring a durable rubber outer sole, they’ll
        withstand everything the weather can offer.</p>
    </div>
    <div class="my-3 flex flex-row justify-between items-center md:flex-col md:items-start">
      <span class="flex flex-row items-center space-x-3">
        <h1 class="text-[28px] font-bold">$125.00</h1>
        <span class="text-base font-bold text-primaryOrange bg-primaryPaleOrange px-2 py-1 rounded-lg">50%</span>
      </span>
      <span class="text-neutralGrayishBlue font-bold text-base line-through">$250.00</span>
    </div>

    <div class="space-y-3 md:flex md:flex-row md:items-stretch md:space-x-3 md:space-y-0 md:mt-10">
      <div class="flex flex-row justify-between bg-[#F6F8FD] px-5 py-3 md:px-3 md:py-4 items-center rounded-xl font-bold mt-4 md:space-x-10 md:mt-0">
        <img src="../assets/icon-minus.svg" alt="minus" class="w-[12px] h-[4px] cursor-pointer"/>
        <p>0</p>
        <img src="../assets/icon-plus.svg" alt="plus" class="w-[12px] h-[12px] cursor-pointer"/>
      </div>
      <div class="flex flex-row justify-center items-center space-x-3 bg-primaryOrange text-white font-kumbh text-base font-bold px-5 py-3 md:px-14 md:py-4 rounded-xl shadow-2xl shadow-primaryOrange/50 hover:shadow-primaryOrange/80 cursor-pointer transition-shadow ease-in-out duration-100">
        <svg width="22" height="20" class="fill-white" xmlns="http://www.w3.org/2000/svg"><path d="M20.925 3.641H3.863L3.61.816A.896.896 0 0 0 2.717 0H.897a.896.896 0 1 0 0 1.792h1l1.031 11.483c.073.828.52 1.726 1.291 2.336C2.83 17.385 4.099 20 6.359 20c1.875 0 3.197-1.87 2.554-3.642h4.905c-.642 1.77.677 3.642 2.555 3.642a2.72 2.72 0 0 0 2.717-2.717 2.72 2.72 0 0 0-2.717-2.717H6.365c-.681 0-1.274-.41-1.53-1.009l14.321-.842a.896.896 0 0 0 .817-.677l1.821-7.283a.897.897 0 0 0-.87-1.114ZM6.358 18.208a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm10.015 0a.926.926 0 0 1 0-1.85.926.926 0 0 1 0 1.85Zm2.021-7.243-13.8.81-.57-6.341h15.753l-1.383 5.53Z"  fill-rule="nonzero"/></svg>
        <p>Add to cart</p>
      </div>

    </div>
  </section>
</template>