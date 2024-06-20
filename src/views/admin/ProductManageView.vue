<template>
  <section class="product-list">
    <table>
      <thead>
        <tr>
          <th>Id</th>
          <th>Name</th>
          <th>Price</th>
          <th>Operation</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="product in products" :key="product.id">
          <td>{{ product.id }}</td>
          <td>{{ product.name }}</td>
          <td>{{ product.price }}</td>
          <td>
            <button @click="handleUpdate(product.id)">Update</button>
            <button @click="handleDelete(product.id)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRouter } from 'vue-router'
import { useProductStore } from '@/store/product'

const productStore = useProductStore()
const products = ref([])

onMounted(async () => {
  await productStore.fetchProducts()
  products.value = productStore.products
})

const router = useRouter()

const handleUpdate = (id) => {
  router.push({ name: 'ModifyProduct', params: { id } })
}

const handleDelete = async (id) => {
  await productStore.deleteProduct(id)
  products.value = productStore.products
}
</script>

<style scoped>
.product-list table {
  border: 1px solid black;
  /* width: 90%; */
  height: 200px;
  margin-top: 20px;
  border-collapse: collapse;
}
.product-list table th,
td {
  border: 1px solid black;
  padding: 2px 50px;
  text-align: center;
}
.product-list table td button:first-child {
  margin-right: 10px;
}
</style>
