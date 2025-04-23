<template>
  <section id="about" class="container mx-auto mt-20 p-8 rounded-lg bg-white shadow-lg">
    <h1 class="text-4xl font-bold text-gray-800 mb-8 text-center">
      About Our Pet Shop
    </h1>
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
      <div class="space-y-6">
        <div class="flex items-start space-x-4">
          <CheckBadgeIcon class="h-8 w-8 text-primary" />
          <p class="text-gray-700 text-lg leading-relaxed">
            Welcome to our Pet Shop! We are passionate about providing quality
            products and expert advice for your furry, feathered, and finned
            family members.
          </p>
        </div>
        <div class="flex items-start space-x-4">
          <HeartIcon class="h-8 w-8 text-red-500" />
          <p class="text-gray-700 text-lg leading-relaxed">
            Our mission is to ensure the well-being of your pets by offering a
            wide array of supplies and personalized service that exceeds your
            expectations.
          </p>
        </div>
        <div class="flex items-start space-x-4">
          <PlusCircleIcon class="h-8 w-8 text-yellow-500" />
          <p class="text-gray-700 text-lg leading-relaxed">
            Whether you're looking for the perfect accessory or need guidance on
            pet care, we're here to help make your pet's life happier and
            healthier.
          </p>
        </div>
        <div class="flex items-start space-x-4">
          <StarIcon class="h-8 w-8 text-green-500" />
          <p class="text-gray-700 text-lg leading-relaxed">
            Visit us today and experience the difference of a pet shop that
            truly cares about you and your pets!
          </p>
        </div>
      </div>
      <div class="flex justify-center">
        <div class="overflow-hidden rounded-lg shadow-md">
          <img src="../images/hero.jpg" alt="Our Pet Shop"
            class="w-full max-w-md h-auto transition-transform duration-300 hover:scale-105" />
        </div>
      </div>
    </div>
  </section>
</template>

<script setup>
import { CheckBadgeIcon, HeartIcon, PlusCircleIcon, StarIcon } from '@heroicons/vue/24/solid';
</script>