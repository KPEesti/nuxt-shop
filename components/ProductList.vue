<template>
  <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
    <ProductItem :product="product"/>
    <ProductItem :product="product"/>
    <ProductItem :product="product"/>
    <ProductItem :product="product"/>
    <ProductItem :product="product"/>
  </div>
</template>

<script>
export default {
  name: "ProductList",
  setup() {
    const product = {
      src: "img/1.1.jpg",
      title: "Моно-серьга Звезда",
      id: 1,
      price: 10800,
    };

    return {
      product
    };
  }
}
</script>

<style scoped>

</style>
