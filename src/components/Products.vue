<template>
  <div class="px-4 py-8 md:px-6 lg:px-8">
    <div class="grid -mt-3 -ml-3 -mr-3">
      <div v-for="product in showProducts" :key="product.id" class="col-12 md:col-6 lg:col-4">
        <div class="p-2">
          <div class="shadow-2 p-4 surface-card border-round-xl product-card">
            <div class="relative mb-3">
              <span
                v-if="product.stock_count > 0"
                class="surface-card text-900 shadow-2 px-3 py-2 absolute stock-badge"
                >In Stock</span
              >
              <img
                :src="product.image"
                :alt="product.product_name"
                class="w-full product-image border-round-xl"
              />
            </div>
            <div class="flex justify-content-between align-items-center mb-3">
              <span class="text-900 font-medium text-lg product-name">{{
                product.product_name
              }}</span>
              <span>
                <i class="pi pi-star-fill text-yellow-500 mr-1"></i>
                <span class="font-medium">5.0</span>
              </span>
            </div>
            <p class="mt-0 mb-3 text-600 line-height-3 product-description">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <span class="text-primary text-lg font-medium product-price"
              >£{{ product.price.toFixed(2) }}</span
            >
          </div>
        </div>
      </div>
    </div>
    <AppButton
      label="Load More"
      severity="danger"
      style="color: purple"
      class="text-2xl"
      @click="loadProducts"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'

import ProductService from '../service/ProductService'

import { useProductsStore } from '@/stores/ProductsStore'
const ProductsStore = useProductsStore()

const showProducts = ref()

const loadProducts = () => {
  console.log('test')
}
const getProductDetails = async () => {
  try {
    const response = await ProductService.getProducts()
    showProducts.value = response
  } catch (error) {
    console.error(error)
  }
}

onMounted(() => {
  getProductDetails()
})
</script>
<style scoped>
.product-card {
  height: 53vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

.product-image {
  height: 30vh; /* Smaller image height */
  object-fit: cover; /* Ensure the image covers the area without distortion */
}

.product-name,
.product-price,
.product-description {
  font-size: 0.875rem; /* Adjust font size for a smaller card */
  line-height: 1.25rem;
}

.stock-badge {
  border-radius: 1.5rem;
  left: 1rem;
  top: 1rem;
}

.product-description {
  flex-grow: 1;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
