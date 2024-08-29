import { defineStore } from 'pinia'

export const useProductsStore = defineStore({
  id: 'products',
  state: () => ({
    products: [] as Array<any>
  }),
  actions: {
    setProducts(products: Array<any>) {
      this.products = products
    }
  }
})
