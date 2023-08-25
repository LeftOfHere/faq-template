<script setup lang="ts">
//@ts-ignore
import { useI18n } from "vue-i18n";
import MenuListItem from "./MenuListItem.vue";
import { useRoute } from "vue-router";

const route = useRoute();

const { t } = useI18n();
</script>

<template>
  <nav class="mdc-list">
    <h3 class="mdc-list-group__subheader">
      {{ t("sideMenu.section1.heading") }}
    </h3>
    <ul>
      <MenuListItem
        :name="t('sideMenu.section1.part1')"
        location="/#sample"
        :selected="route.name === 'sample'"
      />
      <MenuListItem
        :name="t('sideMenu.section1.part2')"
        location="/#something"
        :selected="route.name === 'something'"
      />
      <MenuListItem
        :name="t('sideMenu.section1.part3')"
        location="/#more"
        :selected="route.name === 'more'"
      />
    </ul>

    <h3 class="mdc-list-group__subheader">
      {{ t("sideMenu.section2.heading") }}
    </h3>
    <ul>
      <MenuListItem :name="t('sideMenu.section2.part1')" location="/#more" />
      <MenuListItem :name="t('sideMenu.section2.part2')" location="/#fdas" />
      <MenuListItem :name="t('sideMenu.section2.part3')" location="/#sss" />
    </ul>

    <h3 class="mdc-list-group__subheader">
      {{ t("sideMenu.section3.heading") }}
    </h3>
    <ul>
      <MenuListItem :name="t('sideMenu.section3.part1')" location="/#vasdv" />
      <MenuListItem :name="t('sideMenu.section3.part2')" location="/#ggfg" />
      <MenuListItem :name="t('sideMenu.section3.part3')" location="/#sdfg" />
    </ul>
  </nav>
</template>

<style scoped lang="scss">
@use "@material/list/evolution-mixins" as list-evolution-mixins;

@include list-evolution-mixins.core-styles;

ul {
  padding-inline-start: 16px;
}
</style>
