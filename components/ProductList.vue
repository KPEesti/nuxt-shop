<template>
  <Loader v-if="appStore.appStatus === AppStatus.LOADING"/>
  <div v-else class="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-3 2xl:grid-cols-4">
    <ProductItem v-for="product in productStore.products" :product="product"/>
  </div>
</template>

<script setup lang="ts">
import {useCatalogStore} from "~/store/catalog";
import {useAppStore} from "~/store/app";

const productStore = useCatalogStore();
const appStore = useAppStore();

onMounted(() => {
  productStore.getCatalog();
});
</script>

<style scoped>

</style>
