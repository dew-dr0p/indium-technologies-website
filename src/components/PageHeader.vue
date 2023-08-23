<script setup lang="ts">
import MainButton from './MainButton.vue';
import { RouterLink } from 'vue-router';
</script>

<template>
    <div class="flex fixed z-[999999] w-full items-center justify-between px-[0.625rem] py-[0.375rem] md:px-6 md:py-3 xl:px-24 bg-white">
        <img src="../assets/images/logo.png" alt="" class="w-36 md:w-72">
        <img src="../assets/icons/radix-icons_hamburger-menu.svg" alt="" class="w-4 md:w-9 lg:hidden">
        <div class="hidden lg:flex gap-[4.5rem] items-center text-xl">
            <RouterLink to="/">Home</RouterLink>
            <RouterLink to="about">About Us</RouterLink>
            <RouterLink to="services">Services</RouterLink>
            <RouterLink to="careers">Careers</RouterLink>
            <RouterLink to="contact"><MainButton text="Contact Us" /></RouterLink>
        </div>
    </div>
</template>