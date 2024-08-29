<template>
  <img
    src="../assets/img/Vector.png"
    alt="Image"
    height="40"
    class="mr-0 lg:mr-6"
    style="position: fixed; height: min-content"
  />
  <div class="grid">
    <div class="col">
      <img src="../assets/img/chilled-grape.png" alt="Image" height="40" class="mr-0 lg:mr-6" />
    </div>
    <div class="col">
      <div class="min-h-screen flex flex-column">
        <div
          class="surface-overlay pt-6 pl-6 pr-8 flex align-items-center justify-content-center relative lg:static"
        >
          <!-- src/assets/img/Vector.png -->
          <!-- <AppButton label="Submit" /> -->

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
            class="align-items-center flex-grow-1 justify-content-end hidden lg:flex absolute lg:static w-full surface-overlay left-0 top-100 z-1 shadow-2 lg:shadow-none"
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
                <!-- <AppTag value="Primary"> -->
                <!-- <AppButton label="Secondary" severity="secondary" rounded class="login-button" /> -->
                <a
                  v-ripple
                  class="login-button flex px-6 p-3 lg:px-3 lg:py-2 align-items-center font-bold border-round cursor-pointer transition-colors transition-duration-150 p-ripple"
                >
                  <span class="font-bold w-10">Login</span>
                </a>
                <!-- </AppTag> -->
              </li>
            </ul>
          </div>
        </div>
        <div class="p-5 flex flex-column flex-auto">
          <div class="border-round surface-section flex-auto">
            <!-- router view can go here -->
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- <img src="../assets/img/chilled-grape.png" alt="Image" height="40" class="mr-0 lg:mr-6" /> -->
</template>

<style scoped>
/* Style for the navigation items */
ul.list-none > li {
  margin-right: 30px; /* Adjust the space between each navigation item */
}

/* Specific style for the last item (Login button) */
ul.list-none > li:last-child {
  margin-left: 50px; /* Extra space before the Login button */
}

/* Login button styles (as per previous instructions) */
.login-button {
  background: linear-gradient(to right, #63e2c6, #5a73ed);
  color: white;
  padding-right: 60px !important;
  padding-left: 60px !important;
  border-radius: 50px !important;
  text-align: center;
  /* font-size: 1rem; */
  text-decoration: none;
  display: inline-block;
}

.login-button:hover {
  opacity: 0.8;
}
/* Container for both images */
.image-container {
  position: relative;
  display: inline-block;
}

/* Vector image as the background */
.vector-image {
  position: relative;
  width: 100%; /* Adjust the width to your needs */
  height: auto; /* Maintain aspect ratio */
}

/* Chilled grape image positioned on top of the vector image */
.chilled-grape-image {
  position: absolute;
  top: 50%; /* Adjust to center the image vertically */
  left: 50%; /* Adjust to center the image horizontally */
  transform: translate(-50%, -50%);
  height: 40px; /* Set the desired height */
}
</style>
