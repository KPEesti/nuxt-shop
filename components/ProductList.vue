<template>
  <Loader v-if="AppStore.appStatus === AppStatus.LOADING"/>
  <div v-else class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
    <ProductItem v-for="product in productStore.products" :product="product"/>
  </div>
</template>

<script>
import {useCatalogStore} from "~/store/catalog";
import {useAppStore} from "~/store/app";

export default {
  name: "ProductList",
  created() {
    const {getCatalog} = useCatalogStore();

    getCatalog();

  },
  setup() {
    const productStore = useCatalogStore();
    const AppStore = useAppStore();

    return {
      productStore,
      AppStore,
    };
  }
}
</script>

<style scoped>

</style>
