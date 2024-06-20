<template>
  <div class="form-container">
    <label>
      Product Name:
      <input type="text" v-model="productname" />
    </label>
    <br />
    <label>
      Price:
      <input type="text" v-model="price" />
    </label>
    <br />
    <button @click="updateProduct">Update</button>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useProductStore } from '@/store/product'

const route = useRoute()
const router = useRouter()
const productStore = useProductStore()

const productname = ref('')
const price = ref('')

const id = route.params.id

onMounted(async () => {
  await productStore.fetchProductById(id)
  const product = productStore.product
  if (product) {
    productname.value = product.name
    price.value = product.price
  }
})

const updateProduct = async () => {
  await productStore.updateProduct(id, {
    name: productname.value,
    price: price.value,
  })
  router.push('/ProductManage')
}
</script>

<style scoped>
.form-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  background-color: #f9f9f9;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  max-width: 400px;
  margin: 0 auto;
}

label {
  margin-bottom: 10px;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

input[type='text'] {
  width: 100%;
  padding: 8px;
  margin-top: 5px;
  border: 1px solid #ddd;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  padding: 10px 20px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
  margin-top: 20px;
}

button:hover {
  background-color: #0056b3;
}
</style>
