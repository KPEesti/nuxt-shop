<template>
  <div>
    <transition class="slider" name="fade" tag="div">
      <img :src="images[currentIndex]" alt="Slider Image"/>
    </transition>
    <div class="btn-container">
      <button class="previous">&lang;</button>
      <button class="next">&rang;</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Slider",
  props: {
    images: Array
  },
  setup() {
    let currentIndex = ref(0);

    return {
      currentIndex,
    }
  }
}
</script>

<style scoped>

.fade {
  overflow: hidden;
}

.fade-enter-active,
.fade-leave-active {
  transition: transform 0.5s;
}

.btn-container {
  display: flex;
  justify-content: space-between;
  padding: 0 2%;
  position: relative;
  top: -50%;
  z-index: 15;
}

.btn-container button {
  scale: 3;
  opacity: 0.4;
  transition: ease-in-out 250ms;
}

.btn-container button:hover {
  transform: scale(1.75);
  opacity: 0.7;
}

.swipe-move {
  transition: all 0.3s;
}
</style>
