<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from './components/HelloWorld.vue'
</script>

<template>
  <div class="min-h-screen flex flex-column surface-ground">
    <div
      class="surface-overlay py-3 px-6 flex align-items-center justify-content-between relative lg:static"
      style="min-height: 80px"
    >
      <!-- <img src="images/blocks/logos/bastion-700.svg" alt="Image" height="40" class="mr-0 lg:mr-6" /> -->
      <a
        v-ripple
        class="cursor-pointer block lg:hidden text-700 p-ripple"
        v-styleclass="{
          selector: '@next',
          enterClass: 'hidden',
          leaveToClass: 'hidden',
          hideOnOutsideClick: true
        }"
      >
        <i class="pi pi-bars text-4xl"></i>
      </a>
      <div
        class="align-items-center flex-grow-1 justify-content-between hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none"
      >
        <ul
          class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row"
        >
          <li>
            <a
              v-ripple
              class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
            >
              <i class="pi pi-home mr-2"></i>
              <span>Home</span>
            </a>
          </li>
          <li class="lg:relative">
            <a
              v-ripple
              class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
              v-styleclass="{
                selector: '@next',
                enterClass: 'hidden',
                enterActiveClass: 'scalein',
                leaveToClass: 'hidden',
                leaveActiveClass: 'fadeout',
                hideOnOutsideClick: true
              }"
            >
              <i class="pi pi-users mr-2"></i>
              <span>Customers</span>
              <i class="pi pi-angle-down ml-auto lg:ml-3"></i>
            </a>
            <ul
              class="list-none py-3 px-6 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer"
            >
              <li>
                <a
                  v-ripple
                  class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 p-ripple"
                >
                  <i class="pi pi-user-plus mr-2"></i>
                  <span class="font-medium">Add New</span>
                </a>
              </li>
              <li class="relative">
                <a
                  v-ripple
                  class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 p-ripple"
                  v-styleclass="{
                    selector: '@next',
                    enterClass: 'hidden',
                    enterActiveClass: 'scalein',
                    leaveToClass: 'hidden',
                    leaveActiveClass: 'fadeout',
                    hideOnOutsideClick: true
                  }"
                >
                  <i class="pi pi-search mr-2"></i>
                  <span class="font-medium">Search</span>
                  <i class="pi pi-angle-down ml-auto lg:-rotate-90"></i>
                </a>
                <ul
                  class="list-none py-3 pl-3 m-0 lg:px-0 lg:py-0 border-round shadow-0 lg:shadow-2 lg:border-1 border-50 lg:absolute surface-overlay hidden origin-top w-full lg:w-15rem cursor-pointer left-100 top-0"
                >
                  <li>
                    <a
                      v-ripple
                      class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 p-ripple"
                    >
                      <i class="pi pi-shopping-cart mr-2"></i>
                      <span class="font-medium">Purchases</span>
                    </a>
                  </li>
                  <li class="relative">
                    <a
                      v-ripple
                      class="flex p-3 align-items-center text-600 hover:text-900 hover:surface-100 transition-colors transition-duration-150 p-ripple"
                    >
                      <i class="pi pi-comments mr-2"></i>
                      <span class="font-medium">Messages</span>
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </li>
          <li>
            <a
              v-ripple
              class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
            >
              <i class="pi pi-calendar mr-2"></i>
              <span>Calendar</span>
            </a>
          </li>
          <li>
            <a
              v-ripple
              class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
            >
              <i class="pi pi-chart-line mr-2"></i>
              <span>Stats</span>
            </a>
          </li>
        </ul>
        <ul
          class="list-none p-0 m-0 flex lg:align-items-center select-none flex-column lg:flex-row border-top-1 surface-border lg:border-top-none"
        >
          <li>
            <a
              v-ripple
              class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
            >
              <i class="pi pi-inbox text-base lg:text-2xl mr-2 lg:mr-0"></i>
              <span class="block lg:hidden font-medium">Inbox</span>
            </a>
          </li>
          <li>
            <a
              v-ripple
              class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center text-600 hover:text-900 hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
            >
              <i class="pi pi-bell text-base lg:text-2xl mr-2 lg:mr-0" v-badge.danger></i>
              <span class="block lg:hidden font-medium">Notifications</span>
            </a>
          </li>
          <li class="border-top-1 surface-border lg:border-top-none">
            <a
              v-ripple
              class="flex px-6 p-3 lg:px-3 lg:py-2 align-items-center hover:surface-100 font-medium border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
            >
              <!-- <img
                src="images/blocks/avatars/circle/avatar-f-1.png"
                class="mr-3 lg:mr-0"
                style="width: 32px; height: 32px"
              /> -->
              <div class="block lg:hidden">
                <div class="text-900 font-medium">Josephine Lillard</div>
                <span class="text-600 font-medium text-sm">Marketing Specialist</span>
              </div>
            </a>
          </li>
        </ul>
      </div>
    </div>
    <ul
      class="list-none py-3 px-5 m-0 surface-section flex align-items-center font-medium overflow-x-auto border-top-1 border-bottom-1 surface-border"
    >
      <li class="pr-3">
        <a class="cursor-pointer">
          <i class="pi pi-home text-blue-500"></i>
        </a>
      </li>
      <li class="px-2">
        <i class="pi pi-angle-right text-500"></i>
      </li>
      <li class="px-2">
        <a class="cursor-pointer text-blue-500 white-space-nowrap">Level 3</a>
      </li>
      <li class="px-2">
        <i class="pi pi-angle-right text-500"></i>
      </li>
      <li class="px-2">
        <a class="cursor-pointer text-blue-500 white-space-nowrap">Level 2</a>
      </li>
      <li class="px-2">
        <i class="pi pi-angle-right text-500"></i>
      </li>
      <li class="px-2">
        <a class="cursor-pointer text-900 white-space-nowrap">Level 1</a>
      </li>
    </ul>
    <div class="p-5 flex flex-column flex-auto">
      <div
        class="border-2 border-dashed surface-border border-round surface-section flex-auto"
      ></div>
    </div>
  </div>
  <!-- <header>
    <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />
    
    <PrimeButton label="Check" icon="pi pi-check" />
    <div class="wrapper">
      <HelloWorld msg="You did it!" />

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      </nav>
    </div>
  </header> -->

  <RouterView />
</template>

<style scoped>
header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;
}

nav a.router-link-exact-active {
  color: var(--color-text);
}

nav a.router-link-exact-active:hover {
  background-color: transparent;
}

nav a {
  display: inline-block;
  padding: 0 1rem;
  border-left: 1px solid var(--color-border);
}

nav a:first-of-type {
  border: 0;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }

  .logo {
    margin: 0 2rem 0 0;
  }

  header .wrapper {
    display: flex;
    place-items: flex-start;
    flex-wrap: wrap;
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;

    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
