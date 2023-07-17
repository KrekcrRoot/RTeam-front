<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'MapComponent',
})
</script>

<template>
  <iframe src="https://yandex.ru/map-widget/v1/?um=constructor%3A469bba4d33fa26687fe09a7f2b313e27e334c405d54742428e5dd17916673984&amp;source=constructor" width="100%" height="480" frameborder="0" class="iframe"></iframe>
</template>

<style lang="scss">
  .iframe {
    filter: grayscale(1);
  }
</style>