<template>
  <div class="flex justify-around	w-8/12 m-auto p-5">
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
</template>

<script>
export default {
  name: "Header"
}
</script>

<style scoped>

</style>
