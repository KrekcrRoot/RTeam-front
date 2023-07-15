<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TeachersComponent"
})
</script>

<template>
  <div class="teachers">
    <div class="container">
      <h1>Немного о наших <br/> преподавателях</h1>

      <div class="teachers__info">
        <div class="teachers__images">

          <div class="teachers__img">
            <img src="/assets/teachers1.png" alt="">
          </div>

          <div class="teachers__img">
            <img src="/assets/teachers3.png" alt="">
            <img src="/assets/teachers2.png" alt="">
          </div>

        </div>
        <div class="teachers__body"></div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.teachers {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 48px;
  padding: 120px 0;

  h1 {
    color: #000;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
  }

  .teachers__info {
    display: flex;
    flex-direction: column;

    .teachers__images {
      display: flex;
      gap: 1rem;
      //height: 427px;

      .teachers__img {
        flex: 1;
        display: flex;
        gap: 1rem;

        img {
        }
      }
    }
  }
}
</style>