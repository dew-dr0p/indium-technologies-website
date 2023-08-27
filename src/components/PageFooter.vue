<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="grid px-[0.625rem] text-black md:px-6 xl:px-24 bg-white">
        <div class="flex flex-col md:flex-row w-full items-center justify-between py-3 md:border-b md:border-[#F0EDED]">
            <img src="../assets/images/logo.png" alt="" class="w-40 pt-2 md:pt-0 md:w-72">
            <div class="flex flex-wrap justify-center pt-8 md:pt-0 gap-8 md:gap-5 lg:gap-[4.5rem] items-center md:text-sm lg:text-xl">
                <RouterLink to="/">Home</RouterLink>
                <RouterLink to="about">About Us</RouterLink>
                <RouterLink to="services">Services</RouterLink>
                <RouterLink to="careers">Careers</RouterLink>
                <RouterLink to="contact">Contact Us</RouterLink>
            </div>
        </div>
        <div class="flex flex-col pt-6 pb-4 gap-4 md:gap-0 md:flex-row text-xs lg:text-sm md:justify-between items-center md:py-1">
            <p>© 2021 IndiumTechnologies All Rights Reserved </p>
            <p>Deák Ferenc utca 23.2.emelet , Budapest, 1052,HU</p>
        </div>
    </div>
</template>