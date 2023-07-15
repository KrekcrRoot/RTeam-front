<script lang="ts">
import { defineComponent } from "vue";
import AdvantagesComponent from "./AdvantagesComponent.vue";
import PricesComponent from "./PricesComponent.vue";

export default defineComponent({
  name: 'BlackSectionComponent',
  components: {PricesComponent, AdvantagesComponent},
})

</script>

<template>
  <advantages-component />
  <prices-component />
</template>

<style lang="scss">

</style>