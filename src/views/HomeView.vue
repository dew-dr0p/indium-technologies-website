<script setup lang="ts">
import MainButton from '@/components/MainButton.vue';
</script>

<template>
  <main>

    <section class="relative">
      <div class="relative bg-gradient-to-br from-gradientTwo-a to-gradientTwo-b to-50%">
        <img src="../assets/images/section1.jpeg" alt="" class=" opacity-40">
        <img src="../assets/images/Shape-mobile.png" alt="" class="absolute bottom-0 w-fit md:hidden">
        <img src="../assets/images/Shape-tablet.png" alt="" class="absolute bottom-0 w-fit hidden md:block lg:hidden">
        <img src="../assets/images/Shape-desktop.png" alt="" class="absolute bottom-0 w-fit hidden lg:block">
      </div>
      <div class="lg:text-center lg:absolute top-1/2 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 m-5 lg:m-0 grid gap-4 lg:justify-items-center max-w-[75%] lg:max-w-none pb-6 md:pb-24 lg:pb-0">
        <h3 class="text-primary text-sm md:text-2xl lg:text-4xl font-bold uppercase">DISCOVER A WORLD OF OPPORTUNITIES</h3>
        <p class="lg:text-white leading-normal text-xs md:text-base lg:text-xl">We empower a diverse IT service-oriented workforce where strong individuals are unified by a clear common purpose – to deliver excellence and high level of customer satisfaction.</p>
        <MainButton text="Get Started" class="w-fit"/>
      </div>
    </section>

    <section class="grid lg:flex flex-row-reverse items-center lg:pt-20">
      <div class="bg-gradient-to-br from-[rgba(235,_63,_113,_0.40)] via-[rgba(29,_16,_68,_0.40)] via-[91%] to-[rgba(18,_14,_66,_0.40)] rounded-tr-[8.75rem] md:rounded-tr-[20rem] rounded-bl-[8.75rem] md:rounded-bl-[20rem] lg:max-w-[50%] lg:mx-0 mx-6 h-fit">
        <img src="../assets/images/section2.jpeg" alt="" class="rounded-tr-[8.75rem] md:rounded-tr-[20rem] rounded-bl-[8.75rem] md:rounded-bl-[20rem] opacity-60">
      </div>
      <div class="grid md:gap-8 lg:gap-12 w-fit md:mx-6 xl:mx-24">
        <div class="grid gap-2 mx-6">
          <h6 class="text-darkGray uppercase text-sm md:text-2xl lg:text-4xl">who <br>we are</h6>
          <svg xmlns="http://www.w3.org/2000/svg" width="76" height="24" viewBox="0 0 76 24" fill="none">
          <path d="M75.0607 13.0607C75.6464 12.4749 75.6464 11.5251 75.0607 10.9393L65.5147 1.3934C64.9289 0.807611 63.9792 0.807611 63.3934 1.3934C62.8076 1.97919 62.8076 2.92893 63.3934 3.51472L71.8787 12L63.3934 20.4853C62.8076 21.0711 62.8076 22.0208 63.3934 22.6066C63.9792 23.1924 64.9289 23.1924 65.5147 22.6066L75.0607 13.0607ZM0 13.5H74V10.5H0V13.5Z" fill="#EB3F57"/>
          </svg>
        </div>
        <div class="mx-6 lg:m-0 grid gap-4 max-w-[75%] lg:max-w-none pb-24 lg:pb-0 justify-self-end text-right lg:text-left justify-items-end lg:justify-items-start">
          <h3 class="text-primary text-sm md:text-2xl lg:text-4xl font-bold uppercase">Technology investments as a differentiator</h3>
          <p class="leading-normal text-xs md:text-base lg:text-xl">No forced partnership technology here. We focus on the right solution to drive our clients’ business forward and employ a technology-agnostic approach for all needed stages of the activity cycle, allowing access to current, robust, and advanced solutions. Paramount to this is ensuring the security and compliant use of all information. In the end, it’s not just technology; we ensure our methodologies, staff, industry knowledge, and governance align with the technology to drive the right client results.</p>
          <MainButton text="Get Started" class="w-fit mt-2"/>
        </div>
      </div>
    </section>

    <section>
      <div class="bg-gradient-to-br from-[rgba(235,_63,_113,_0.40)] via-[rgba(29,_16,_68,_0.40)] via-[91%] to-[rgba(18,_14,_66,_0.40)] rounded-tl-[8.75rem] md:rounded-tl-[20rem] rounded-br-[8.75rem] md:rounded-br-[20rem] lg:max-w-[50%] lg:mx-0 mx-6 h-fit">
        <img src="../assets/images/section3.jpeg" alt="" class="rounded-tl-[8.75rem] md:rounded-tl-[20rem] rounded-br-[8.75rem] md:rounded-br-[20rem] opacity-60">
      </div>
      <div class="grid md:gap-8 lg:gap-12 w-fit md:mx-6 xl:mx-24">
        <div class="grid gap-2 mx-6 justify-end justify-items-end">
          <h6 class="text-darkGray text-right uppercase text-sm md:text-2xl lg:text-4xl">we build <br>future</h6>
          <svg xmlns="http://www.w3.org/2000/svg" width="76" height="24" viewBox="0 0 76 24" fill="none">
          <path d="M0.939339 13.0607C0.353554 12.4749 0.353554 11.5251 0.939339 10.9393L10.4853 1.3934C11.0711 0.807611 12.0208 0.807611 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939339 13.0607ZM76 13.5H2V10.5H76V13.5Z" fill="#EB3F57"/>
          </svg>
        </div>
        <div class="mx-6 lg:m-0 pb-8 md:pb-12 lg:pb-24 grid gap-6 md:gap-[4.5rem] md:max-w-[75%] lg:max-w-none">
          <div class="grid grid-flow-col gap-2 md:gap-12">
            <img src="../assets/icons/target1.svg" alt="" class="w-12 md:w-full">
            <div class="grid gap-1 md:gap-3">
              <h6 class="font-bold md:text-xl">Our Mission & Vision </h6>
              <p class="text-xs md:text-lg">As experienced professionals in the field of software development, user experience, and marketing performance, we are aware of the hard work, dedication, and overall diligence required to prosper in modern-day business.</p>
            </div>
          </div>
          <div class="grid grid-flow-col gap-2 md:gap-12">
            <img src="../assets/icons/target1.svg" alt="" class="w-12 md:w-full">
            <div class="grid gap-1 md:gap-3">
              <h6 class="font-bold md:text-xl">Our Mission & Vision </h6>
              <p class="text-xs md:text-lg">As experienced professionals in the field of software development, user experience, and marketing performance, we are aware of the hard work, dedication, and overall diligence required to prosper in modern-day business.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>
