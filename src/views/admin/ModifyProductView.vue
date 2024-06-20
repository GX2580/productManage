<template>
  <div>
    Product Name: <input type="text" v-model="productname" /> <br />
    Price: <input type="text" v-model="price" /> <br />
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

<style scoped></style>
