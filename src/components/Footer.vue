<template>
  <img src="../assets/img/footer-vector.png" alt="Footer Vector" height="40" class="vector-image" />

  <div class="surface-section px-4 md:px-6 lg:px-8">
    <div class="flex flex-column sm:flex-row sm:align-items-center justify-content-between">
      <div class="footer-content">
        <img
          src="../assets/img/chilled-grape.png"
          alt="Chilled Grape"
          height="40"
          class="chilled-grape-footer"
        />
        <img
          src="../assets/img/footer-text.png"
          alt="Footer Text"
          height="40"
          class="footer-text"
        />
      </div>
    </div>
    <div class="grid">
      <div class="col"></div>
      <div class="col"></div>
      <div class="col">
        <div class="column">
          <h3 class="column-title">Company</h3>
          <p class="column-text">About Us</p>
          <p class="column-text">Careers</p>
          <p class="column-text">Press</p>
        </div>
      </div>
      <div class="col">
        <div class="column">
          <h3 class="column-title">Products</h3>
          <p class="column-text">Product 1</p>
          <p class="column-text">Product 2</p>
          <p class="column-text">Product 3</p>
        </div>
      </div>
      <div class="col">
        <div class="column">
          <h3 class="column-title">Follow Us</h3>
          <div class="icon-grid">
            <a
              class="icon-link cursor-pointer text-500 transition-colors transition-duration-150 hover:text-700"
            >
              <i class="pi pi-twitter text-xl"></i>
            </a>
            <a
              class="icon-link cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700"
            >
              <i class="pi pi-facebook text-xl"></i>
            </a>
            <a
              class="icon-link cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700"
            >
              <i class="pi pi-github text-xl"></i>
            </a>
            <a
              class="icon-link cursor-pointer text-500 ml-3 transition-colors transition-duration-150 hover:text-700"
            >
              <i class="pi pi-linkedin text-xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.icon-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 1rem; /* Space between icons */
}

.icon-link {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 3rem; /* Set width of each icon */
  height: 3rem; /* Set height of each icon */
}

.column-title {
  font-size: 3vh;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.column-text {
  font-size: 2vh;
  color: #333; /* Regular text color */
}

@media (max-width: 768px) {
  .icon-link {
    width: 2.5rem; /* Adjust size for smaller screens */
    height: 2.5rem;
  }
}
/* Container for both images */
.image-container {
  position: relative;
  display: inline-block;
}

/* Vector image as the background */
.vector-image {
  top: 23vh;
  right: 4vh;
  width: 65vh;
  /* height: auto; */
  position: relative;
  z-index: 2 !important;
}

/* Chilled grape image positioned on top of the vector image */
.chilled-grape-footer {
  height: 3vh;
  position: absolute;
  z-index: 2 !important;
  left: 7vh;
  top: 496vh;
}

.footer-text {
  height: 12vh;
  position: absolute;
  z-index: 2 !important;
  left: 7vh;
  top: 502vh;
}

.column {
  margin-bottom: 1.5rem;
}

.column-title {
  /* Gradient color for text */
  background: linear-gradient(to right, #63e2c6, #5a73ed);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; /* Use this for WebKit browsers */
  font-size: 3vh;
  font-weight: bold;
  margin-bottom: 0.5rem;
}

.column-text {
  font-weight: bold;
  margin-bottom: 0.5rem;
}
</style>
