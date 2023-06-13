<template>
  <div>
    <Cart @open-cart="openCart"/>
    <Header :open-cart="event"/>
    <RouterView/>
  </div>
</template>

<script>
import {useCookie} from "#app";

export default {
  name: "app",
  data() {
    return {
      isOpenCart: false
    }
  },
  methods: {},
  setup() {
    const event = ref(null);

    const cart = useCookie("cart", {
      maxAge: 3600
    });
    cart.value = cart.value || new Date(Date.now() + 3600);

    const openCart = (cb) => {
      event.value = cb;
    }

    return {
      event,
      openCart
    };
  }
}
</script>
