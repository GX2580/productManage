<template>
  <div>
    ID: <input type="text" v-model="id" /> <br />
    Product Name: <input type="text" v-model="productname" /> <br />
    Price: <input type="number" v-model="price" /><br />
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

<style scoped></style>
