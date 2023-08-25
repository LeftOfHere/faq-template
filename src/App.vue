<script setup lang="ts">
import MainLayout from "./components/MainLayout.vue";
import { onMounted, onUnmounted } from "vue";
import { useAppStore } from "./appStore";

const { setScreenSize } = useAppStore();

onMounted(() => {
  window.addEventListener("resize", resizeListener);

  resizeListener();
});

onUnmounted(() => {
  window.removeEventListener("resize", resizeListener);
});

function resizeListener() {
  if (window.innerWidth < 769) {
    setScreenSize(1);
  } else {
    setScreenSize(3);
  }
}
</script>

<template>
  <MainLayout>
    <template #main>
      <router-view />
      <!-- <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src="/vite.svg" class="logo" alt="Vite logo" />
        </a>
        <a href="https://vuejs.org/" target="_blank">
          <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
        </a>
      </div>
      <HelloWorld msg="Vite + Vue" /> -->
    </template>
  </MainLayout>
</template>

<style scoped lang="scss">
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
