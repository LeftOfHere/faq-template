import { computed, ref } from "vue";

const screenSize = ref(3);

export function useAppStore() {
  function setScreenSize(size: number) {
    screenSize.value = size;
  }

  return {
    setScreenSize,

    screenSize: computed(() => screenSize.value),
  };
}
