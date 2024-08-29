// src/services/productService.ts
import axios from 'axios'
import type { ProductData } from '@/interfaces/ProductData'

class ProductService {
  getProducts = async (): Promise<ProductData> => {
    try {
      const response = await axios.get(
        'https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products'
      )
      // Access the first array within the response array
      return response.data[0]
    } catch (error) {
      console.error('Error fetching products:', error)
      throw error
    }
  }

  // const API_URL = 'https://my-json-server.typicode.com/TomSearle/cb-devtest-api/products'
}
export default new ProductService()
