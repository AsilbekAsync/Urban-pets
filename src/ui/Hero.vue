<template>
  <section id="home" class="relative h-screen w-full">
    <img
      src="../images/hero_2.jpg"
      alt="Hero background"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <div class="absolute inset-0 bg-black opacity-60"></div>
    <div class="relative z-10 flex items-center justify-center h-full">
      <div class="text-center text-white px-6">
        <h1 class="text-5xl md:text-7xl font-extrabold drop-shadow-lg mb-6">
          Welcome to <span class="text-primary">Urban Pets</span>
        </h1>
        <p class="text-lg md:text-2xl max-w-2xl mx-auto mb-8 drop-shadow-md">
          Discover the perfect companion among a diverse collection of furry
          friends. Experience quality care and endless joy.
        </p>
        <div
          class="flex flex-col md:flex-row items-center justify-center gap-4"
        >
          <button
            type="button"
            @click="scroll('#pets')"
            class="bg-primary hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded inline-flex items-center transition"
          >
            <ArrowRightCircleIcon class="w-6 h-6 mr-2" />
            Explore Pets
          </button>
          <button
            type="button"
            @click="scroll('#about')"
            class="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-6 rounded inline-flex items-center transition"
          >
            <GlobeAltIcon class="w-6 h-6 mr-2" />
            Learn More
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { ArrowRightCircleIcon, GlobeAltIcon } from "@heroicons/vue/24/outline";
import scroll from "../scroll.js";
</script>
