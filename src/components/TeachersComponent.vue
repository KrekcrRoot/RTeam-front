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
        <div class="teachers__body">

          <div class="teachers__element">
            Отлично ладят с детьми, самому младшему ученику R Team сейчас 6 лет.
          </div>

          <div class="teachers__element">
            Имеют опыт преподавания не менее 3 лет, у каждого преподавателя свой подход и система.
          </div>

          <div class="teachers__element">
            Действующие музыканты и участники музыкальных проектов с опытом не менее 10 лет, поэтому ученики смогут получить по-настоящему практические навыки.
          </div>

          <div class="teachers__element">
            Открыты для общения и готовы создать максимально комфортные условия для занятий: для нас важно, чтобы ученик получал удовольствие от урока.
          </div>

        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.teachers {
  padding: 120px 0;
  display: flex;
  flex-direction: column;
  align-items: center;

  .container {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  h1 {
    color: #000;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
  }

  .teachers__info {
    display: flex;
    flex-direction: column;
    gap: 32px;

    .teachers__body {
      display: flex;
      flex-wrap: wrap;

      .teachers__element {
        padding-left: 24px;
        border-left: 2px solid black;
        color: #000;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        width: 50%;
        margin: 0 0 2rem ;
      }
    }

    .teachers__images {
      display: flex;
      gap: 1rem;

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