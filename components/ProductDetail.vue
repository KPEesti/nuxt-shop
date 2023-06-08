<template>
  <Loader v-if="appStore.appStatus === AppStatus.LOADING"/>
  <div v-else class="grid grid-cols-1 lg:grid-cols-2 gap-16">
    <div>
      <img class="rounded-xl" v-for="img in product.images" :src="img" alt="">
    </div>
    <div>
      <h1 class="text-4xl font-medium text-center">{{ product.title }}</h1>
      <div class="mt-8 w-10/12 m-auto">
        <span class="text-stone-800/30 font-light text-sm">Описание</span>
        <p class="text-base font-light">{{ product.description }}</p>
        <div class="flex flex-col items-center">
          <div class="text-stone-800/50 text-md py-0.5" v-for="feature in product.features">{{ feature }}</div>
        </div>
        <div class="mt-20 px-10 flex justify-around">
          <span class="text-3xl font-base text-center">{{ product.price }} &#8381;</span>
          <button class="border-2 px-4 py-2 rounded-lg bg-neutral-900	text-white hover:scale-110">Купить</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import {useAppStore} from "~/store/app";
import {AppStatus} from "~/utils/consts";

export default {
  name: "ProductDetail",
  created() {
    this.appStore.setAppStatus(AppStatus.LOADING);
  },
  mounted() {
    this.getProduct(this.$route.params.id);
  },
  setup() {
    const appStore = useAppStore();
    const product = null;

    return {
      product,
      appStore
    };
  },
  methods: {
    async getProduct(id) {
      this.product = await $fetch(`http://localhost:5000/products/${id}`);
      this.appStore.setAppStatus(AppStatus.OK);
    }
  }
}
</script>

<style scoped>

</style>
