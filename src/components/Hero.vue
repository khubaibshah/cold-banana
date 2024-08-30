<template>
  <div class="hero-container">
    <img class="hero-vector" src="../assets/img/hero_vector.png" alt="hero vector image" />
    <img class="hero-text" src="../assets/img/hero.png" alt="hero text image" />
    <img class="right-vector" src="../assets/img/right-vector.png" alt="hero vector image right" />
    <img
      class="under-right-vector"
      src="../assets/img/Vector2.png"
      alt="under hero vector image right"
    />
    <img
      class="left-vector"
      src="../assets/img/left-vector.png"
      alt="under hero vector image right"
    />
    <a
      class="read-more flex px-6 p-3 lg:px-3 lg:py-2 align-items-center font-bold border-round cursor-pointer transition-colors transition-duration-150 p-ripple text-2xl"
    >
      <span class="font-bold text-center">Read More</span>
    </a>
  </div>
</template>

<style scoped>
.read-more {
  height: 7vh;
  background: linear-gradient(to right, #63e2c6, #5a73ed);
  color: white;
  padding: 0.5rem 1rem;
  border-radius: 50px !important;
  display: inline-block;
  position: absolute;
  left: 55vh;
  top: 20vh;
  padding-right: 10vh !important;
  padding-left: 10vh !important;
}

.read-more:hover {
  opacity: 0.8;
}

.hero-container {
  position: relative;
  width: 100%;
  height: auto;
  text-align: center;
}

.hero-vector {
  position: absolute;
  top: -20vh;
  left: 86vh;
  z-index: 1;
}

.hero-text {
  position: relative;
  z-index: 2;
  display: block;
  margin-left: 55vh;
}

.right-vector {
  position: absolute;
  z-index: 2; /* This should be higher than under-right-vector */
  max-width: 30%;
  height: auto;
  top: -13vh;
  right: -3vh;
}

.left-vector {
  position: absolute;
  z-index: 1;
  max-width: 30%;
  height: auto;
  top: 21vh;
  left: -4vh;
}

.under-right-vector {
  position: absolute;
  z-index: 1; /* This should be lower than right-vector */
  max-width: 30%;
  height: auto;
  top: 15vh; /* Adjust to position it correctly underneath */
  right: 15vh; /* Adjust to align with the right-vector */
}
</style>
