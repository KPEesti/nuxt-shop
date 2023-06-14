<template>
  <div class="flex justify-between mt-5">
    <img class="w-28 mr-3" :src="product.images[0]" :alt="product.title"/>
    <div>
      <h1 class="text-xl font-bold">{{ product.title }}</h1>
      <p class="">Цена: {{ product.price }} &#8381;</p>
    </div>
    <div>
      <img @click="deleteProduct(product.id)" class="w-7 cursor-pointer" src="/trash.svg" alt="">
    </div>
  </div>
</template>

<script setup lang="ts">
const {product, deleteProduct} = defineProps({
  product: Object,
  deleteProduct: Function
});
</script>

<style scoped>

</style>
