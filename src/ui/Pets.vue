<template>
    <section class="py-16" id="pets">
        <div class="container mx-auto px-4">
            <h2 class="text-3xl font-bold text-center mb-12 text-gray-800">
                Featured Pets
            </h2>
            <div class="rounded-lg p-6">
                <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    <div v-for="pet in pets" :key="pet.id" class="p-4">
                        <div class="rounded-lg shadow-md">
                            <img :src="pet.image" :alt="pet.name"
                                class="aspect-square w-full h-64 object-cover rounded-t-lg cursor-pointer" />
                            <div class="p-6">
                                <h3 class="text-xl font-bold text-gray-800 mb-2">
                                    {{ pet.name }}
                                </h3>
                                <p class="text-gray-600 mb-4">{{ pet.breed }}, {{ pet.age }}</p>
                                <div class="flex justify-between items-center">
                                    <span class="text-primary font-bold text-lg">${{ pet.price }}</span>
                                    <button
                                        class="bg-blue-500 group text-white py-2 px-4 rounded transition duration-300 hover:bg-blue-600 hover:text-white"
                                        type="button">
                                        <HeartIcon class="w-5 h-5 inline-block mr-1" />
                                        Adopt
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>

<script setup>
import { HeartIcon } from "@heroicons/vue/24/solid";

const pets = [
    {
        id: 1,
        name: "Max",
        breed: "Labrador Retriever",
        age: "3 months",
        price: 450 * 0.05,
        image: "/src/images/dog.jpg",
    },
    {
        id: 2,
        name: "Bella",
        breed: "Golden Retriever",
        age: "4 months",
        price: 500 * 0.05,
        image: "/src/images/cat.jpg",
    },
    {
        id: 3,
        name: "Charlie",
        breed: "Beagle",
        age: "2 months",
        price: 1200 * 0.05,
        image: "/src/images/parrot.jpg",
    },
    {
        id: 4,
        name: "Daisy",
        breed: "Angora Rabbit",
        age: "5 months",
        price: 350 * 0.05,
        image: "/src/images/rabbit.jpg",
    },
];
</script>
