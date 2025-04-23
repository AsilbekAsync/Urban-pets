<template>
  <header class="bg-gray-100 shadow z-50">
    <div class="container mx-auto px-3 py-2 flex justify-between items-center">
      <div class="flex items-center space-x-3">
        <h1
          class="text-2xl md:text-xl text-primary font-extrabold tracking-tight"
        >
          Urban Pets
        </h1>
      </div>
      <button
        type="button"
        class="md:hidden text-gray-800 focus:outline-none"
        @click="toggleMobileMenu"
      >
        <Bars3Icon class="w-8 h-8" />
      </button>
      <nav class="hidden md:flex space-x-6">
        <a
          href="#home"
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-gray-800 hover:text-white hover:bg-primary px-3 py-2 rounded font-semibold transition-colors"
          @click.prevent="scrollToSection(link.href)"
          >{{ link.text }}</a
        >
      </nav>
    </div>
    <nav
      :class="[
        'md:hidden bg-gray-100 px-1 py-4 pt-0 shadow-lg rounded-lg',
        { hidden: !isMobileMenuOpen },
      ]"
    >
      <div class="flex flex-col space-y-1">
        <a
          v-for="link in links"
          :key="link.href"
          :href="link.href"
          class="text-gray-800 hover:text-white hover:bg-primary font-semibold transition-colors px-3 py-2 rounded"
          @click.prevent="scrollToSection(link.href)"
          >{{ link.text }}</a
        >
      </div>
    </nav>
  </header>
</template>

<script setup>
import { ref } from "vue";
import { Bars3Icon } from "@heroicons/vue/24/outline";

const isMobileMenuOpen = ref(false);

const toggleMobileMenu = () => {
  isMobileMenuOpen.value = !isMobileMenuOpen.value;
};

const links = [
  { href: "#home", text: "Home" },
  { href: "#about", text: "About" },
  { href: "#services", text: "Services" },
  { href: "#contact", text: "Contact" },
];

const scrollToSection = (href) => {
  const section = document.querySelector(href);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
    isMobileMenuOpen.value = false;
  }
};
</script>
