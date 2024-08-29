<template>
  <div class="footer-container">
    <img
      src="../assets/img/footer-vector.png"
      alt="Footer Vector"
      height="40"
      class="footer-vector"
    />

    <div class="surface-section px-4 md:px-6 lg:px-8">
      <div class="py-6 flex flex-column sm:flex-row sm:align-items-center justify-content-between">
        <div class="footer-content">
          <img
            src="../assets/img/chilled-grape.png"
            alt="Chilled Grape"
            height="40"
            class="chilled-grape"
          />
          <img
            src="../assets/img/footer-text.png"
            alt="Footer Text"
            height="40"
            class="footer-text"
          />
          <div class="mt-2 line-height-3">&copy; 2021 Bastion, Inc. All rights reserved</div>
        </div>
        <div class="mt-3 sm:mt-0">
          <a
            class="cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700"
          >
            <i class="pi pi-twitter text-xl"></i>
          </a>
          <a
            class="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700"
          >
            <i class="pi pi-facebook text-xl"></i>
          </a>
          <a
            class="cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700"
          >
            <i class="pi pi-github text-xl"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.footer-vector {
  position: absolute;
  z-index: 1;
  height: 58vh;
  left: 0vh;
}
</style>
