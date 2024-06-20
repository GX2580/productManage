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
.product-list {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 20px;
}

.product-list table {
  width: 100%;
  max-width: 1200px;
  border-collapse: collapse;
  margin-top: 20px;
  background-color: #f9f9f9;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.product-list table th,
.product-list table td {
  border: 1px solid #ddd;
  padding: 12px;
  text-align: center;
}

.product-list table th {
  background-color: #f4f4f4;
  color: #333;
}

.product-list table td {
  background-color: #fff;
}

.product-list table td button {
  padding: 6px 12px;
  border: none;
  background-color: #007bff;
  color: #fff;
  cursor: pointer;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.product-list table td button:first-child {
  margin-right: 10px;
}

.product-list table td button:hover {
  background-color: #0056b3;
}
</style>
