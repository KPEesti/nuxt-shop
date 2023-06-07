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
      <img src="/cart-2-svgrepo-com.svg" alt="" class="w-7">
      <img src="/person-svgrepo-com.svg" alt="" class="w-7">
    </div>
  </div>
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
