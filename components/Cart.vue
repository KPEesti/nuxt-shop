<template>
  <transition name="fade">
    <div v-if="pef" class="h-screen w-full bg-neutral-900/75 fixed z-50" @click="hideCart"></div>
  </transition>
  <transition name="slide">
    <div v-if="pef" class="w-1/3 fixed flex flex-col justify-between bg-white top-0 -right-0 h-screen z-50 p-5">
      <h1 class="text-3xl ">Корзина</h1>
      <div v-if="cartStore.list.length !== 0" class=" w-full overflow-auto h-80 flex-1 scrollbar" id="style-3">
        <CartItem v-for="product in cartStore.list" :product="product" :delete-product="cartStore.deleteProduct"/>
      </div>
      <div v-else>
        Ваша корзина пуста :(
      </div>
      <div>
        <h2 class="text-xl font-bold text-slate-900/75">Сумма: {{ cartStore.sumPrice }} &#8381;</h2>
        <button class="p-5 bg-neutral-900 rounded-xl text-white">К оформлению</button>
      </div>
    </div>
  </transition>
</template>

<script>
import {useCartStore} from "~/store/cart";

export default {
  name: "Cart",
  emits: ['openCart'],
  mounted() {
    this.cartStore.getCart();
  },
  setup(props, ctx) {
    const cartStore = useCartStore();

    const isOpen = ref(false);

    const showCart = () => {
      isOpen.value = true;
    };

    ctx.emit("openCart", showCart);

    const hideCart = () => {
      isOpen.value = false;
    };


    return {
      pef: isOpen,
      showCart,
      hideCart,
      cartStore
    }
  }
}
</script>
<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.4s ease-out;
}

.slide-enter-from,
.slide-leave-to {
  transform: translateX(100%);
}

.fade-enter-active,
.fade-leave-active {
  transition: all 0.4s ease-out;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.scrollbar {
  float: left;
  margin-bottom: 25px;
}

#style-3::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #F5F5F5;
  border-radius: 10px;
}

#style-3::-webkit-scrollbar {
  width: 6px;
  background-color: #F5F5F5;
}

#style-3::-webkit-scrollbar-thumb {
  background-color: #000000;
  border-radius: 10px;
}

</style>
