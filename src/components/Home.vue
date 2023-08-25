<script setup lang="ts">
import { onMounted } from "vue";
//@ts-ignore
import { useI18n } from "vue-i18n";

onMounted(() => {
  console.log("Home");
});

const { t } = useI18n();
</script>

<template>
  <h1>{{ t("shared.home") }}</h1>

  <h4>Warning</h4>
  <div class="card warning">
    <p>
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Aliquam in tempus tortor. Aenean commodo justo erat, vitae
      semper eros rhoncus sed. Proin sit amet libero condimentum, venenatis
      turpis sed, vehicula dolor. Nulla porta maximus velit eu sodales. Nunc
      sollicitudin nec mi at tempor. Suspendisse eu accumsan mauris.
    </p>
  </div>
  <h4>Error</h4>
  <div class="card error">
    <p>
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Aliquam in tempus tortor. Aenean commodo justo erat, vitae
      semper eros rhoncus sed. Proin sit amet libero condimentum, venenatis
      turpis sed, vehicula dolor. Nulla porta maximus velit eu sodales. Nunc
      sollicitudin nec mi at tempor. Suspendisse eu accumsan mauris.
    </p>
  </div>
  <h4>Help</h4>
  <div class="card help">
    <p>
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Aliquam in tempus tortor. Aenean commodo justo erat, vitae
      semper eros rhoncus sed. Proin sit amet libero condimentum, venenatis
      turpis sed, vehicula dolor. Nulla porta maximus velit eu sodales. Nunc
      sollicitudin nec mi at tempor. Suspendisse eu accumsan mauris.
    </p>
  </div>
  <h4>Info</h4>
  <div class="card info">
    <p>
      Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere
      cubilia curae; Aliquam in tempus tortor. Aenean commodo justo erat, vitae
      semper eros rhoncus sed. Proin sit amet libero condimentum, venenatis
      turpis sed, vehicula dolor. Nulla porta maximus velit eu sodales. Nunc
      sollicitudin nec mi at tempor. Suspendisse eu accumsan mauris.
    </p>
  </div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam aliquam
    elit in sollicitudin porttitor. Cras ultricies sem sed est tempus, et
    dignissim ligula tincidunt. Suspendisse in turpis interdum risus viverra
    hendrerit. Ut ut ex est. Curabitur eget consectetur nibh. Quisque tincidunt
    condimentum sollicitudin. Pellentesque pretium sollicitudin tortor id
    dignissim. Mauris fermentum purus in neque tristique, at accumsan mauris
    consectetur. Suspendisse pellentesque ultrices lectus id vehicula. Mauris
    vel placerat ex. Integer tellus est, vestibulum id tempor egestas, pharetra
    in risus. Phasellus tristique dolor libero, ut consectetur magna molestie
    ac. Suspendisse non magna elementum, cursus libero sit amet, faucibus diam.
    Vivamus placerat, eros id egestas tincidunt, ex augue efficitur ante, et
    laoreet nunc orci ac sapien. Vivamus non hendrerit nisi. Nunc tincidunt
    ligula placerat, posuere lacus ac, placerat purus
  </p>
  <p>
    Etiam egestas sapien elit, et posuere ante bibendum sit amet. Sed feugiat
    urna non ante pretium, a rhoncus orci commodo. Curabitur volutpat enim sed
    ligula finibus tempor. Integer at tellus eget neque aliquet volutpat. Donec
    sollicitudin at augue a maximus. Nunc posuere porttitor sollicitudin. Donec
    vel orci lobortis, scelerisque dui at, ultrices lacus. Vestibulum ante ipsum
    primis in faucibus orci luctus et ultrices posuere cubilia curae;
  </p>
  <p>
    Etiam egestas sapien elit, et posuere ante bibendum sit amet. Sed feugiat
    urna non ante pretium, a rhoncus orci commodo. Curabitur volutpat enim sed
    ligula finibus tempor. Integer at tellus eget neque aliquet volutpat. Donec
    sollicitudin at augue a maximus. Nunc posuere porttitor sollicitudin. Donec
    vel orci lobortis, scelerisque dui at, ultrices lacus. Vestibulum ante ipsum
    primis in faucibus orci luctus et ultrices posuere cubilia curae;
  </p>
</template>

<style scoped></style>
