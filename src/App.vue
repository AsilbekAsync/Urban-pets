<template>
  <Navbar />
  <Hero />
  <About />
  <Pets />
  <section id="animals" class="py-16">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-4 text-gray-800">
        Our Animals
      </h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Browse our selection of adorable pets looking for their forever homes.
        All our animals are vaccinated, microchipped, and health-checked.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
          <img url="https://source.unsplash.com/random/600x400/?dogs" alt="Dogs" class="w-full h-64 object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Dogs</h3>
            <p class="text-gray-600 mb-4">
              Find your loyal companion from our selection of puppies and adult
              dogs.
            </p>
            <a href="#"
              class="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full transition duration-300">
              <i class="fas fa-paw mr-2"></i> View Dogs
            </a>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
          <img url="https://source.unsplash.com/random/600x400/?cats" alt="Cats" class="w-full h-64 object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Cats</h3>
            <p class="text-gray-600 mb-4">
              Adopt a purr-fect feline friend from our selection of kittens and
              cats.
            </p>
            <a href="#"
              class="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full transition duration-300">
              <i class="fas fa-cat mr-2"></i> View Cats
            </a>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
          <img url="https://source.unsplash.com/random/600x400/?hamster" alt="Small Pets"
            class="w-full h-64 object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Small Pets</h3>
            <p class="text-gray-600 mb-4">
              Discover our range of hamsters, guinea pigs, rabbits, and more.
            </p>
            <a href="#"
              class="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full transition duration-300">
              <i class="fas fa-rabbit mr-2"></i> View Small Pets
            </a>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
          <img url="https://source.unsplash.com/random/600x400/?birds" alt="Birds" class="w-full h-64 object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Birds</h3>
            <p class="text-gray-600 mb-4">
              From canaries to parakeets, find your perfect feathered friend.
            </p>
            <a href="#"
              class="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full transition duration-300">
              <i class="fas fa-dove mr-2"></i> View Birds
            </a>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
          <img url="https://source.unsplash.com/random/600x400/?fish" alt="Fish" class="w-full h-64 object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Fish</h3>
            <p class="text-gray-600 mb-4">
              Explore our colorful selection of freshwater and tropical fish.
            </p>
            <a href="#"
              class="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full transition duration-300">
              <i class="fas fa-fish mr-2"></i> View Fish
            </a>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-md overflow-hidden transition-transform duration-300 hover:scale-105">
          <img url="https://source.unsplash.com/random/600x400/?reptile" alt="Reptiles"
            class="w-full h-64 object-cover" />
          <div class="p-6">
            <h3 class="text-2xl font-bold text-gray-800 mb-2">Reptiles</h3>
            <p class="text-gray-600 mb-4">
              Discover our selection of turtles, lizards, and other reptiles.
            </p>
            <a href="#"
              class="inline-block bg-primary hover:bg-primary-dark text-white font-bold py-2 px-6 rounded-full transition duration-300">
              <i class="fas fa-dragon mr-2"></i> View Reptiles
            </a>
          </div>
        </div>
      </div>
    </div>
  </section>

  <section id="services" class="py-16 bg-gray-50">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-4 text-gray-800">
        Our Services
      </h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        We offer a wide range of services to keep your pets happy and healthy.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <div class="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-cut text-white text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Grooming</h3>
          <p class="text-gray-600">
            Professional grooming services for all breeds of dogs and cats.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <div class="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-stethoscope text-white text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Veterinary Care</h3>
          <p class="text-gray-600">
            Regular check-ups and medical care for your beloved pets.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <div class="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-bone text-white text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Pet Supplies</h3>
          <p class="text-gray-600">
            Quality food, toys, and accessories for all types of pets.
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md text-center">
          <div class="w-16 h-16 bg-primary-light rounded-full flex items-center justify-center mx-auto mb-4">
            <i class="fas fa-home text-white text-2xl"></i>
          </div>
          <h3 class="text-xl font-bold text-gray-800 mb-2">Boarding</h3>
          <p class="text-gray-600">
            Safe and comfortable boarding facilities for when you're away.
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="testimonials" class="py-16 bg-primary-light/10">
    <div class="container mx-auto px-4">
      <h2 class="text-3xl font-bold text-center mb-4 text-gray-800">
        What Our Customers Say
      </h2>
      <p class="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
        Hear from our happy customers and their furry friends.
      </p>

      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <img url="https://source.unsplash.com/random/100x100/?person" alt="Customer"
              class="w-12 h-12 rounded-full object-cover mr-4" />
            <div>
              <h3 class="font-bold text-gray-800">Sarah Johnson</h3>
              <div class="flex text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "I adopted my dog Max from Paws & Claws last year, and it was the
            best decision ever! The staff was incredibly helpful and made sure
            Max was the perfect match for my family."
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <img url="https://source.unsplash.com/random/100x100/?man" alt="Customer"
              class="w-12 h-12 rounded-full object-cover mr-4" />
            <div>
              <h3 class="font-bold text-gray-800">Michael Thompson</h3>
              <div class="flex text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star-half-alt"></i>
              </div>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "The grooming services at Paws & Claws are exceptional! My cat Luna
            always looks amazing after her appointments, and the staff treats
            her with such care."
          </p>
        </div>

        <div class="bg-white p-6 rounded-lg shadow-md">
          <div class="flex items-center mb-4">
            <img url="https://source.unsplash.com/random/100x100/?woman" alt="Customer"
              class="w-12 h-12 rounded-full object-cover mr-4" />
            <div>
              <h3 class="font-bold text-gray-800">Emily Rodriguez</h3>
              <div class="flex text-yellow-400">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
              </div>
            </div>
          </div>
          <p class="text-gray-600 italic">
            "I've been shopping at Paws & Claws for all my pet supplies for
            years. They have the best selection, competitive prices, and the
            staff is always ready to offer expert advice."
          </p>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="py-16">
    <div class="container mx-auto px-4">
      <div class="bg-white rounded-lg shadow-xl overflow-hidden">
        <div class="flex flex-col md:flex-row">
          <div class="md:w-1/2 bg-primary p-8 text-white">
            <h2 class="text-3xl font-bold mb-6">Contact Us</h2>
            <p class="mb-6">
              Have questions or need assistance? Reach out to our friendly team!
            </p>

            <div class="mb-6">
              <h3 class="text-xl font-bold mb-2">Visit Us</h3>
              <p class="flex items-start">
                <i class="fas fa-map-marker-alt mt-1 mr-3"></i>
                <span>123 Pet Street, Animalville, AV 12345</span>
              </p>
            </div>

            <div class="mb-6">
              <h3 class="text-xl font-bold mb-2">Opening Hours</h3>
              <p class="flex items-start mb-2">
                <i class="fas fa-clock mt-1 mr-3"></i>
                <span>Monday - Friday: 9am - 7pm</span>
              </p>
              <p class="flex items-start mb-2">
                <i class="fas fa-clock mt-1 mr-3 opacity-0"></i>
                <span>Saturday: 10am - 6pm</span>
              </p>
              <p class="flex items-start">
                <i class="fas fa-clock mt-1 mr-3 opacity-0"></i>
                <span>Sunday: 11am - 4pm</span>
              </p>
            </div>

            <div>
              <h3 class="text-xl font-bold mb-2">Get In Touch</h3>
              <p class="flex items-start mb-2">
                <i class="fas fa-phone mt-1 mr-3"></i>
                <span>(123) 456-7890</span>
              </p>
              <p class="flex items-start">
                <i class="fas fa-envelope mt-1 mr-3"></i>
                <span>info@pawsandclaws.com</span>
              </p>
            </div>
          </div>

          <div class="md:w-1/2 p-8">
            <h2 class="text-3xl font-bold mb-6 text-gray-800">
              Send Us a Message
            </h2>
            <form>
              <div class="mb-4">
                <label for="name" class="block text-gray-700 font-medium mb-2">Your Name</label>
                <input type="text" id="name"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>

              <div class="mb-4">
                <label for="email" class="block text-gray-700 font-medium mb-2">Email Address</label>
                <input type="email" id="email"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>

              <div class="mb-4">
                <label for="subject" class="block text-gray-700 font-medium mb-2">Subject</label>
                <input type="text" id="subject"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary" />
              </div>

              <div class="mb-6">
                <label for="message" class="block text-gray-700 font-medium mb-2">Your Message</label>
                <textarea id="message" rows="4"
                  class="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"></textarea>
              </div>

              <button type="submit"
                class="bg-primary hover:bg-primary-dark text-white font-bold py-3 px-6 rounded-full transition duration-300">
                <i class="fas fa-paper-plane mr-2"></i> Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </section>

  <footer class="bg-gray-800 text-white py-12">
    <div class="container mx-auto px-4">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div class="flex items-center mb-4">
            <i class="fas fa-paw text-primary text-3xl mr-2"></i>
            <h3 class="text-2xl font-bold">Paws & Claws</h3>
          </div>
          <p class="mb-4">
            Your one-stop shop for all your pet needs. Providing quality pets
            and services since 2010.
          </p>
          <div class="flex space-x-4">
            <a href="#" class="text-white hover:text-primary transition duration-300">
              <i class="fab fa-facebook-f text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-primary transition duration-300">
              <i class="fab fa-twitter text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-primary transition duration-300">
              <i class="fab fa-instagram text-xl"></i>
            </a>
            <a href="#" class="text-white hover:text-primary transition duration-300">
              <i class="fab fa-youtube text-xl"></i>
            </a>
          </div>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">Quick Links</h3>
          <ul class="space-y-2">
            <li>
              <a href="#home" class="hover:text-primary transition duration-300">Home</a>
            </li>
            <li>
              <a href="#animals" class="hover:text-primary transition duration-300">Animals</a>
            </li>
            <li>
              <a href="#services" class="hover:text-primary transition duration-300">Services</a>
            </li>
            <li>
              <a href="#testimonials" class="hover:text-primary transition duration-300">Testimonials</a>
            </li>
            <li>
              <a href="#contact" class="hover:text-primary transition duration-300">Contact</a>
            </li>
          </ul>
        </div>

        <div>
          <h3 class="text-xl font-bold mb-4">Newsletter</h3>
          <p class="mb-4">
            Subscribe to our newsletter for updates, promotions, and pet care
            tips.
          </p>
          <form>
            <div class="flex">
              <input type="email" placeholder="Your email address"
                class="px-4 py-2 rounded-l-lg focus:outline-none text-gray-800 w-full" />
              <button type="submit"
                class="bg-primary hover:bg-primary-dark px-4 py-2 rounded-r-lg transition duration-300">
                <i class="fas fa-paper-plane"></i>
              </button>
            </div>
          </form>
        </div>
      </div>

      <div class="border-t border-gray-700 mt-8 pt-8 text-center">
        <p>&copy; 2023 Paws & Claws Pet Shop. All rights reserved.</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import Navbar from "./ui/Navbar.vue";
import Hero from "./ui/Hero.vue";
import About from "./ui/About.vue";
import Pets from "./ui/Pets.vue";
</script>
