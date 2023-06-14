<template>
  <div class="flex justify-between w-10/12 m-auto p-5">
    <div>
      <h2>Logo</h2>
    </div>
    <div class="flex justify-between w-4/12">
      <NuxtLink to="/">
        Главная
      </NuxtLink>
      <NuxtLink to="/catalog">
        Каталог
      </NuxtLink>
      <NuxtLink to="/contacts">
        Контакты
      </NuxtLink>
    </div>
    <div class="flex justify-between w-1/12">
      <img src="/cart.svg" alt="" class="w-7 cursor-pointer" @click="openCart">
      <img src="/person.svg" alt="" class="w-7 cursor-pointer">
    </div>
  </div>
</template>

<script setup>
const {openCart} = defineProps({
  openCart: Function
});
</script>

<style scoped>

</style>
