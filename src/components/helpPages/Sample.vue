<script setup lang="ts">
import { onMounted } from "vue";
//@ts-ignore
import { useI18n } from "vue-i18n";

onMounted(() => {
  console.log("Something loaded");
});

const { t } = useI18n();
</script>

<template>
  <h1>{{ t("sample.heading") }}</h1>

  <h4>{{ t("shared.warning") }}</h4>
  <div class="card warning">
    <p>
      {{ t("sample.warningSample") }}
    </p>
  </div>
  <h4>{{ t("shared.error") }}</h4>
  <div class="card error">
    <p>
      {{ t("sample.errorSample") }}
    </p>
  </div>
  <h4>{{ t("shared.help") }}</h4>
  <div class="card help">
    <p>
      {{ t("sample.helpSample") }}
    </p>
  </div>
  <h4>{{ t("shared.info") }}</h4>
  <div class="card info">
    <p>
      {{ t("sample.infoSample") }}
    </p>
  </div>

  <p></p>
  <p>
    {{ t("sample.someDetails") }}
  </p>
  <p>
    {{ t("sample.someMoreDetails") }}
  </p>
</template>

<style scoped></style>
