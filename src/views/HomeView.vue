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
      <div
        class="lg:text-center lg:absolute top-1/2 left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 m-5 lg:m-0 grid gap-4 lg:justify-items-center max-w-[75%] lg:max-w-none pb-6 md:pb-24 lg:pb-0">
        <h3 class="text-primary text-sm md:text-2xl lg:text-4xl font-bold uppercase">DISCOVER A WORLD OF OPPORTUNITIES
        </h3>
        <p class="lg:text-white leading-normal text-xs md:text-base lg:text-xl">We empower a diverse IT service-oriented
          workforce where strong individuals are unified by a clear common purpose – to deliver excellence and high level
          of customer satisfaction.</p>
        <MainButton text="Get Started" class="w-fit" />
      </div>
    </section>

    <section class="grid lg:flex flex-row-reverse items-center lg:pt-20">
      <div
        class="bg-gradient-to-br from-[rgba(235,_63,_113,_0.40)] via-[rgba(29,_16,_68,_0.40)] via-[91%] to-[rgba(18,_14,_66,_0.40)] rounded-tr-[8.75rem] md:rounded-tr-[20rem] rounded-bl-[8.75rem] md:rounded-bl-[20rem] lg:max-w-[50%] lg:mx-0 mx-6 h-fit">
        <img src="../assets/images/section2.jpeg" alt=""
          class="rounded-tr-[8.75rem] md:rounded-tr-[20rem] rounded-bl-[8.75rem] md:rounded-bl-[20rem] opacity-60">
      </div>
      <div class="grid md:gap-8 lg:gap-12 w-fit md:mx-6 xl:mx-24">
        <div class="grid gap-2 mx-6">
          <h6 class="text-darkGray uppercase text-sm md:text-2xl lg:text-4xl">who <br>we are</h6>
          <svg xmlns="http://www.w3.org/2000/svg" width="76" height="24" viewBox="0 0 76 24" fill="none">
            <path
              d="M75.0607 13.0607C75.6464 12.4749 75.6464 11.5251 75.0607 10.9393L65.5147 1.3934C64.9289 0.807611 63.9792 0.807611 63.3934 1.3934C62.8076 1.97919 62.8076 2.92893 63.3934 3.51472L71.8787 12L63.3934 20.4853C62.8076 21.0711 62.8076 22.0208 63.3934 22.6066C63.9792 23.1924 64.9289 23.1924 65.5147 22.6066L75.0607 13.0607ZM0 13.5H74V10.5H0V13.5Z"
              fill="#EB3F57" />
          </svg>
        </div>
        <div
          class="mx-6 lg:m-0 grid gap-4 max-w-[75%] lg:max-w-none pb-24 lg:pb-0 justify-self-end text-right lg:text-left justify-items-end lg:justify-items-start">
          <h3 class="text-primary text-sm md:text-2xl lg:text-4xl font-bold uppercase">Technology investments as a
            differentiator</h3>
          <p class="leading-normal text-xs md:text-base lg:text-xl">No forced partnership technology here. We focus on the
            right solution to drive our clients’ business forward and employ a technology-agnostic approach for all needed
            stages of the activity cycle, allowing access to current, robust, and advanced solutions. Paramount to this is
            ensuring the security and compliant use of all information. In the end, it’s not just technology; we ensure
            our methodologies, staff, industry knowledge, and governance align with the technology to drive the right
            client results.</p>
          <MainButton text="Get Started" class="w-fit mt-2" />
        </div>
      </div>
    </section>

    <section class="grid lg:flex flex-row items-center lg:pt-20">
      <div
        class="bg-gradient-to-br from-[rgba(235,_63,_113,_0.40)] via-[rgba(29,_16,_68,_0.40)] via-[91%] to-[rgba(18,_14,_66,_0.40)] rounded-tl-[8.75rem] md:rounded-tl-[20rem] rounded-br-[8.75rem] md:rounded-br-[20rem] lg:max-w-[50%] lg:mx-0 mx-6 h-fit">
        <img src="../assets/images/section3.jpeg" alt=""
          class="rounded-tl-[8.75rem] md:rounded-tl-[20rem] rounded-br-[8.75rem] md:rounded-br-[20rem] opacity-60">
      </div>
      <div class="grid md:gap-8 lg:gap-12 w-fit md:mx-6 xl:mx-24">
        <div class="grid gap-2 mx-6 justify-end justify-items-end">
          <h6 class="text-darkGray text-right uppercase text-sm md:text-2xl lg:text-4xl">we build <br>future</h6>
          <svg xmlns="http://www.w3.org/2000/svg" width="76" height="24" viewBox="0 0 76 24" fill="none">
            <path
              d="M0.939339 13.0607C0.353554 12.4749 0.353554 11.5251 0.939339 10.9393L10.4853 1.3934C11.0711 0.807611 12.0208 0.807611 12.6066 1.3934C13.1924 1.97919 13.1924 2.92893 12.6066 3.51472L4.12132 12L12.6066 20.4853C13.1924 21.0711 13.1924 22.0208 12.6066 22.6066C12.0208 23.1924 11.0711 23.1924 10.4853 22.6066L0.939339 13.0607ZM76 13.5H2V10.5H76V13.5Z"
              fill="#EB3F57" />
          </svg>
        </div>
        <div class="mx-6 lg:m-0 pb-8 md:pb-12 lg:pb-24 grid gap-6 md:gap-[4.5rem] md:max-w-[75%] lg:max-w-none">
          <div class="grid grid-flow-col gap-2 md:gap-12">
            <img src="../assets/icons/target1.svg" alt="" class="w-12 md:w-full">
            <div class="grid gap-1 md:gap-3">
              <h6 class="font-bold md:text-xl">Our Mission & Vision</h6>
              <p class="text-xs md:text-lg">As experienced professionals in the field of software development, user
                experience, and marketing performance, we are aware of the hard work, dedication, and overall diligence
                required to prosper in modern-day business.</p>
            </div>
          </div>
          <div class="grid grid-flow-col gap-2 md:gap-12">
            <img src="../assets/icons/pathway1.svg" alt="" class="w-12 md:w-full px-[0.25rem] md:px-[0.875rem]">
            <div class="grid gap-1 md:gap-3">
              <h6 class="font-bold md:text-xl"> Our Approach</h6>
              <p class="text-xs md:text-lg">As a result, we offer our clients with the development of CRM cloud systems,
                bespoke website development and design, project and R&D management, custom development, and system
                integration.</p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="grid gap-16">
      <div class="grid gap-2 mx-6">
        <h6 class="text-darkGray uppercase text-sm md:text-2xl lg:text-4xl">Our <br>products</h6>
        <svg xmlns="http://www.w3.org/2000/svg" width="76" height="24" viewBox="0 0 76 24" fill="none">
          <path
            d="M75.0607 13.0607C75.6464 12.4749 75.6464 11.5251 75.0607 10.9393L65.5147 1.3934C64.9289 0.807611 63.9792 0.807611 63.3934 1.3934C62.8076 1.97919 62.8076 2.92893 63.3934 3.51472L71.8787 12L63.3934 20.4853C62.8076 21.0711 62.8076 22.0208 63.3934 22.6066C63.9792 23.1924 64.9289 23.1924 65.5147 22.6066L75.0607 13.0607ZM0 13.5H74V10.5H0V13.5Z"
            fill="#EB3F57" />
        </svg>
      </div>
      <div class="grid lg:grid-flow-col gap-9 xl:gap-[4.75rem] w-full lg:w-fit px-6 justify-self-center">
        <div class="lg:max-w-[23rem] grid gap-[0.625rem] h-fit">
          <div
            class="xl:w-[23rem] h-52 grid place-content-center place-items-center bg-darkGray lg:rounded-none rounded-2xl lg:shadow-none shadow-[0px_0px_30px_0px_rgba(0,_0,_0,_0.10)]">
            <img src="../assets/icons/support1.svg" alt="">
            <h6 class="font-bold md:text-xl text-white mt-4 lg:hidden">Our Approach</h6>
          </div>
          <div class="lg:grid gap-[0.375rem] hidden">
            <h6 class="font-bold md:text-xl">System Integration</h6>
            <p class="text-xs md:text-lg">In today’s digital world, the ability to effectively integrate across different
              systems, data sources, and channels is fundamental. Indium technologies has a long history of successfully
              and efficiently integrating a variety of client-based systems.</p>
            <p
              class="pb-1 w-fit border-b text-primary border-primary text-sm font-bold uppercase hover:text-darkGray hover:border-darkGray">
              READ MORE</p>
          </div>
        </div>
        <div class="lg:max-w-[23rem] grid gap-[0.625rem] lg:mt-24 h-fit">
          <div
            class="xl:w-[23rem] h-52 grid place-content-center place-items-center bg-darkGray lg:rounded-none rounded-2xl lg:shadow-none shadow-[0px_0px_30px_0px_rgba(0,_0,_0,_0.10)]">
            <img src="../assets/icons/support1.svg" alt="">
            <h6 class="font-bold md:text-xl text-white mt-4 lg:hidden">Our Approach</h6>
          </div>
          <div class="lg:grid gap-[0.375rem] hidden">
            <h6 class="font-bold md:text-xl">System Integration</h6>
            <p class="text-xs md:text-lg">In today’s digital world, the ability to effectively integrate across different
              systems, data sources, and channels is fundamental. Indium technologies has a long history of successfully
              and efficiently integrating a variety of client-based systems.</p>
            <p
              class="pb-1 w-fit border-b text-primary border-primary text-sm font-bold uppercase hover:text-darkGray hover:border-darkGray">
              READ MORE</p>
          </div>
        </div>
        <div class="lg:max-w-[23rem] grid gap-[0.625rem] h-fit">
          <div
            class="xl:w-[23rem] h-52 grid place-content-center place-items-center bg-darkGray lg:rounded-none rounded-2xl lg:shadow-none shadow-[0px_0px_30px_0px_rgba(0,_0,_0,_0.10)]">
            <img src="../assets/icons/support1.svg" alt="">
            <h6 class="font-bold md:text-xl text-white mt-4 lg:hidden">Our Approach</h6>
          </div>
          <div class="lg:grid gap-[0.375rem] hidden">
            <h6 class="font-bold md:text-xl">System Integration</h6>
            <p class="text-xs md:text-lg">In today’s digital world, the ability to effectively integrate across different
              systems, data sources, and channels is fundamental. Indium technologies has a long history of successfully
              and efficiently integrating a variety of client-based systems.</p>
            <p
              class="pb-1 w-fit border-b text-primary border-primary text-sm font-bold uppercase hover:text-darkGray hover:border-darkGray">
              READ MORE</p>
          </div>
        </div>
      </div>
    </section>

    <section class="grid place-content-center">
      <div class="bg-white p-10 grid grid-flow-col rounded-2xl shadow-[0px_4px_4px_0px_rgba(0,_0,_0,_0.25)]">
        <div class=" w-[41rem]">
          <div class="grid gap-2 mb-[4.5rem]">
            <h5 class="text-4xl font-bold text-primary tracking-[-0.8px]">Say Hi!</h5>
            <p class="text-[#67748E] text-xl leading-[18px]">We’d like to talk with you.</p>
          </div>
          <form action="#" class="grid gap-6">
            <div class="grid gap-1">
              <label class="text-xs font-bold leading-[1px] pb-3">My name is</label>
              <input type="text" placeholder="Full name" class="rounded-2xl placeholder:text-[#7878AB] placeholder:leading-10 bg-background px-8 py-2 shadow-[-5px_-5px_10px_0px_#FFF_inset,_5px_5px_10px_0px_rgba(170,_170,_204,_0.50)_inset,_2px_2px_4px_0px_rgba(170,_170,_204,_0.25)_inset,_-2px_-2px_4px_0px_rgba(255,_255,_255,_0.50)_inset]">
            </div>
            <div class="grid gap-1">
              <label class="text-xs font-bold leading-[1px] pb-3">My email is</label>
              <input type="text" placeholder="Email" class="rounded-2xl placeholder:text-[#7878AB] placeholder:leading-10 bg-background px-8 py-2 shadow-[-5px_-5px_10px_0px_#FFF_inset,_5px_5px_10px_0px_rgba(170,_170,_204,_0.50)_inset,_2px_2px_4px_0px_rgba(170,_170,_204,_0.25)_inset,_-2px_-2px_4px_0px_rgba(255,_255,_255,_0.50)_inset]">
            </div>
            <div class="grid gap-1">
              <label class="text-xs font-bold leading-[1px] pb-3">Your message</label>
              <input type="text" placeholder="I want to say that..." class="rounded-2xl h-36 placeholder:text-[#7878AB] placeholder:leading-10 bg-background px-8 py-2 shadow-[-5px_-5px_10px_0px_#FFF_inset,_5px_5px_10px_0px_rgba(170,_170,_204,_0.50)_inset,_2px_2px_4px_0px_rgba(170,_170,_204,_0.25)_inset,_-2px_-2px_4px_0px_rgba(255,_255,_255,_0.50)_inset]">
              <textarea cols="30" rows="10"></textarea>
            </div>
            <MainButton text="Send Message" class="w-fit justify-self-end" />
          </form>
        </div>
        <div class="relative max-h-[40rem]">
          <img src="../assets/images/contact.jpeg" alt="">
          <svg class="absolute top-0 left-0" xmlns="http://www.w3.org/2000/svg" width="75" height="669" viewBox="0 0 75 669" fill="none">
            <g filter="url(#filter0_d_25_65)">
              <path d="M37.5 0H0V669H67C60.3333 652 44.9 612.5 36.5 590.5C26 563 20 528.5 12.5 477.5C5 426.5 37.5 339 39 333.5C40.5 328 64.5 281.5 70 192.5C74.4 121.3 50.1667 34.5 37.5 0Z" fill="white"/>
            </g>
            <defs>
              <filter id="filter0_d_25_65" x="-4" y="0" width="78.527" height="677" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                <feOffset dy="4"/>
                <feGaussianBlur stdDeviation="2"/>
                <feComposite in2="hardAlpha" operator="out"/>
                <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
                <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_25_65"/>
                <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_25_65" result="shape"/>
              </filter>
            </defs>
          </svg>
          <img src="../assets/images/Shape-desktop.png" alt="" class="rotate-90 absolute left-0 top-0">
        </div>
      </div>
    </section>
  </main>
</template>
