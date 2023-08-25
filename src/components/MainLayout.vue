<script setup lang="ts">
import { MDCTopAppBar, MDCTopAppBarFoundation } from "@material/top-app-bar";
import { MDCDrawer } from "@material/drawer";
import { MDCList } from "@material/list";
import { MDCRipple } from "@material/ripple";
import { onMounted, ref, watch } from "vue";
import { icon_home, icon_menu } from "./icons";
import { useAppStore } from "../appStore";
import SideMenuItems from "./SideMenuItems.vue";

const topAppBarElement = ref();
const drawerElement = ref();

const drawer = ref();

const { screenSize } = useAppStore();

onMounted(() => {
  const topAppBar = new MDCTopAppBar(topAppBarElement.value);

  topAppBar.listen(MDCTopAppBarFoundation.strings.NAVIGATION_EVENT, () => {
    drawer.value.open = !drawer.value.open;
  });

  const listElements = document.querySelectorAll(".mdc-list");

  if (listElements && listElements.length > 0) {
    for (const listElement of listElements) {
      const list = new MDCList(listElement);
      list.listElements.map((listItemEl: any) => new MDCRipple(listItemEl));
    }
  }

  setTimeout(setSidebarStyles, 0);
});

function setSidebarStyles() {
  console.log("here");
  if (screenSize.value === 1) {
    drawerElement.value.classList.replace(
      "mdc-drawer--dismissible",
      "mdc-drawer--modal"
    );
    drawerElement.value.classList.remove("mdc-top-app-bar--fixed-adjust");
  } else {
    drawerElement.value.classList.replace(
      "mdc-drawer--modal",
      "mdc-drawer--dismissible"
    );
    drawerElement.value.classList.add("mdc-top-app-bar--fixed-adjust");
  }
  setTimeout(() => {
    drawer.value = new MDCDrawer(drawerElement.value);
    drawer.value.open = true;
  }, 0);
}

watch(screenSize, () => {
  setSidebarStyles();
});
</script>

<template>
  <header ref="topAppBarElement" class="mdc-top-app-bar app-bar">
    <div class="mdc-top-app-bar__row">
      <section
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-start"
      >
        <div
          class="mdc-top-app-bar__navigation-icon pointer icon-container"
          v-html="icon_menu"
          aria-label="Open navigation menu"
        ></div>
        <span class="mdc-top-app-bar__title">FAQ</span>
      </section>
      <section
        class="mdc-top-app-bar__section mdc-top-app-bar__section--align-end"
        role="toolbar"
      ></section>
    </div>
  </header>

  <aside
    ref="drawerElement"
    class="mdc-drawer mdc-drawer--dismissible mdc-top-app-bar--fixed-adjust"
  >
    <div class="mdc-drawer__header">
      <a
        class="home-icon pointer icon-container large dark"
        v-html="icon_home"
        aria-label="Home"
        href="/#"
      ></a>
    </div>
    <div class="mdc-drawer__content">
      <SideMenuItems />
    </div>
  </aside>

  <div v-if="screenSize === 1" class="mdc-drawer-scrim"></div>
  <div class="mdc-drawer-app-content mdc-top-app-bar--fixed-adjust">
    <main class="main-content">
      <slot name="main"></slot>
    </main>
  </div>
</template>

<style scoped lang="scss">
@use "@material/icon-button";
@use "@material/top-app-bar/mdc-top-app-bar";
@use "@material/drawer";

@include drawer.core-styles;
@include drawer.dismissible-core-styles;
@include drawer.modal-core-styles;

.home-icon {
  margin-block-start: 1em;
  display: flex;
  flex-direction: row;
  align-items: center;
}

@media only screen and (min-width: 769px) {
  .mdc-drawer-app-content {
    flex: auto;
    overflow: auto;
    position: relative;
  }

  .main-content {
    overflow: auto;
    height: calc(100vh - var(--top-bar-height) - 2em);
    background-color: var(----brand-primary-75);
    padding: 1em;
  }

  .app-bar {
    position: absolute;
  }

  // Only apply this style if below top app bar.
  .mdc-top-app-bar {
    z-index: 7;
  }
}

@media only screen and (max-width: 768px) {
}
</style>
