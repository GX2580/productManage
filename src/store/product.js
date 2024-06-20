// src/store/product.js
import { defineStore } from 'pinia'
import {
  getProductApi,
  createProductApi,
  updateProductApi,
  deleteProductApi,
  getProductByIdApi,
} from '@/api/products'

export const useProductStore = defineStore('product', {
  state: () => ({
    products: [],
    product: null,
  }),
  actions: {
    async fetchProducts() {
      this.products = await getProductApi()
    },
    async fetchProductById(id) {
      this.product = await getProductByIdApi(id)
    },
    async addProduct(product) {
      await createProductApi(product)
      await this.fetchProducts()
    },
    async updateProduct(id, product) {
      await updateProductApi(id, product)
      await this.fetchProducts()
    },
    async deleteProduct(id) {
      await deleteProductApi(id)
      await this.fetchProducts()
    },
  },
})
