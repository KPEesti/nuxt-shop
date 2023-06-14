<template>
  <div>
    <Cart @open-cart="openCart"/>
    <Header :open-cart="event"/>
    <RouterView/>
  </div>
</template>

<script setup>
import {useCookie} from "#app";

const cart = useCookie("cart", {
  maxAge: 3600
});
cart.value = cart.value || new Date(Date.now() + 3600);

const event = ref(null);

const openCart = (cb) => {
  event.value = cb;
};
</script>
