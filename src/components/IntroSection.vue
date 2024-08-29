<template>
  <div class="intro-section">
    <div class="grid align-items-center">
      <!-- Align items center to vertically center the content -->
      <div class="col text-content">
        <img src="../assets/img/text.png" alt="text image" />
      </div>

      <div class="col plant-image">
        <img src="../assets/img/plant.png" alt="plant image" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.intro-section {
  margin-top: 5rem;
}

.grid {
  display: flex;
  justify-content: space-between; /* Ensures the columns are spaced out properly */
  align-items: center; /* Ensures the images are vertically aligned */
  margin-top: 30vh;
}

.text-content img,
.plant-image img {
  width: 75%;
  height: auto;
  top: 100vh !important;
}

.text-content {
  display: flex;
  justify-content: center; /* Center the text image horizontally */
}

.plant-image {
  display: flex;
  justify-content: center; /* Center the plant image horizontally */
}
</style>
