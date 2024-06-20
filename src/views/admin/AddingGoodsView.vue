<template>
  <div class="form-container">
    <label>
      ID:
      <input type="text" v-model="id" />
    </label>
    <br />
    <label>
      Product Name:
      <input type="text" v-model="productname" />
    </label>
    <br />
    <label>
      Price:
      <input type="number" v-model="price" />
    </label>
    <br />
    <button @click="addProduct">Add Product</button>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '@/store/product'

const id = ref('')
const productname = ref('')
const price = ref('')
const router = useRouter()
const productStore = useProductStore()

const addProduct = async () => {
  if (!id.value) {
    alert('ID不可为空')
    return
  }

  await productStore.addProduct({
    id: id.value,
    name: productname.value,
    price: price.value,
  })

  id.value = ''
  productname.value = ''
  price.value = ''
  router.push({ name: 'ProductManage' })
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

input[type='text'],
input[type='number'] {
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
