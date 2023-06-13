<template>
  <div class="flex flex-col items-center">
    <div class="wrapper cursor-pointer">
      <img
          @click.prevent="toProductDetail(product.id)"
          class="w-80 rounded-lg" :src="product.images[0]" alt="asd"
      >
      <button
          @click="cartStore.addToCart(product)"
          class="relative w-full bottom-10 flex items-center justify-center h-10 bg-zinc-900 text-white opacity-0 buy"
      >
        Купить
      </button>
    </div>
    <h2
        @click.prevent="toProductDetail(product.id)"
        class="font-semibold text-xl cursor-pointer mt-2 text-center"
    >{{ product.title }}</h2>
    <span
        @click.prevent="toProductDetail(product.id)"
        class="cursor-pointer"
    >
      Цена: {{ product.price }} &#8381;
    </span>
  </div>
</template>

<script>

import {useCartStore} from "~/store/cart";

export default {
  name: "ProductItem",
  props: {
    product: {
      images: Array,
      title: String,
      id: Number,
      price: Number,
    }
  },
  setup() {
    const router = useRouter();
    const cartStore = useCartStore();

    const toProductDetail = (id) => {
      router.push(`/product/${id}`);
    };

    return {
      toProductDetail,
      cartStore
    }
  }
}
</script>

<style scoped>
.buy {
  opacity: 0;
  transition: ease-in-out 0.3s;
}

.wrapper {
  margin-bottom: -40px;
}

.wrapper:hover .buy {
  opacity: 1;
}
</style>
