<script setup lang="ts">
import Hero from '@/components/Hero.vue'
import IntroSection from './IntroSection.vue'
</script>

<template>
  <div class="min-h-screen flex flex-column">
    <div
      class="surface-overlay flex align-items-center justify-content-between relative lg:static"
      style="min-height: 80px"
    >
      <div class="flex align-items-center">
        <div class="image-container">
          <img src="../assets/img/Vector.png" alt="Vector Background" class="vector-image" />
          <img
            src="../assets/img/chilled-grape.png"
            alt="Chilled Grape"
            class="chilled-grape-image"
          />
        </div>
      </div>
      <div
        class="align-items-center flex-grow-1 justify-content-end hidden lg:flex absolute w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none"
        style="top: 10% !important; z-index: 1 !important"
      >
        <ul
          class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row"
        >
          <li>
            <a
              v-ripple
              class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-900 hover:text-900 hover:surface-100 font-bold border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
            >
              <span class="font-bold w-10">Home</span>
            </a>
          </li>
          <li class="lg:relative">
            <a
              v-ripple
              class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-900 hover:text-900 hover:surface-100 font-bold border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
              v-styleclass="{
                selector: '@next',
                enterClass: 'hidden',
                enterActiveClass: 'scalein',
                leaveToClass: 'hidden',
                leaveActiveClass: 'fadeout',
                hideOnOutsideClick: true
              }"
            >
              <span class="font-bold w-10">About</span>
            </a>
          </li>
          <li>
            <a
              v-ripple
              class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-900 hover:text-900 hover:surface-100 font-bold border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
            >
              <span class="font-bold w-10">Blog</span>
            </a>
          </li>
          <li>
            <a
              v-ripple
              class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-900 hover:text-900 hover:surface-100 font-bold border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
            >
              <span class="font-bold w-10">Pricing</span>
            </a>
          </li>
          <li>
            <a
              v-ripple
              class="login-button flex px-6 p-3 lg:px-3 lg:py-2 align-items-center font-bold border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
            >
              <span class="font-bold w-10">Login</span>
            </a>
          </li>
        </ul>
      </div>
    </div>

    <div class="p-5 flex flex-column flex-auto">
      <div class="border-round surface-section flex-auto">
        <Hero />
      </div>

      <!-- Add margin between Hero and IntroSection -->
      <div class="mt-7">
        <!-- You can adjust the class or inline style to control spacing -->
        <IntroSection />
      </div>
    </div>
  </div>
</template>
<style scoped>
.hero-container {
  position: relative;
  width: 100%;
  height: auto;
  text-align: center;
}
/* Style for the container holding both the images and the navigation */
.surface-overlay {
  display: flex;
  align-items: center;
  justify-content: space-between; /* Aligns the image container to the left and navigation to the right */
}

/* Container for both images */
.image-container {
  position: relative;
  display: inline-block;
}

/* Vector image as the background */
.vector-image {
  width: auto;
  height: auto;
  position: relative;
  z-index: 2 !important;
}

/* Chilled grape image positioned on top of the vector image */
.chilled-grape-image {
  position: absolute;
  top: 38%;
  left: 47%;
  transform: translate(-50%, -50%);
  z-index: 2 !important;
}

/* Login button styles */
.login-button {
  background: linear-gradient(to right, #63e2c6, #5a73ed);
  color: white;
  padding-right: 60px !important;
  padding-left: 60px !important;
  border-radius: 50px !important;
  text-align: center;
  text-decoration: none;
  display: inline-block;
}

.login-button:hover {
  opacity: 0.8;
}

/* Style for the navigation items */
ul.list-none > li {
  margin-right: 30px; /* Adjust the space between each navigation item */
}

/* Specific style for the last item (Login button) */
ul.list-none > li:last-child {
  margin-left: 50px; /* Extra space before the Login button */
}
</style>
