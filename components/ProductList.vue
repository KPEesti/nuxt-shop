<template>
  <div class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
    <ProductItem v-for="product in products" :product="product"/>
  </div>
</template>

<script>
import {useCatalogStore} from "~/store/Catalog";

export default {
  name: "ProductList",
  setup() {
    const {products} = useCatalogStore();

    return {
      products
    };
  }
}
</script>

<style scoped>

</style>
