<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'PriceComponent',
  props: {
    title: {
      type: String,
      default: '',
    },
  },
})
</script>

<template>
  <div class="price">
    <h3 class="price__title">{{ title }}</h3>

    <div class="price__wrapper">

      <slot></slot>

    </div>

  </div>
</template>

<style lang="scss">
.price {
  display: flex;
  padding: 40px 0;
  gap: 46px;
  border-bottom: 4px solid #808080;

  .price__title {
    color: #FFF;
    font-size: 28px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    width: 35%;
  }

  .price__wrapper {
    display: flex;
    align-items: center;
    //justify-content: space-evenly;
    width: 100%;
    gap: 64px;

    .price__card {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .price__card-title {
        color: #B5B5B5;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;
      }

      .price__card-body {
        color: #FFF;
        font-size: 36px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }
  }
}
</style>