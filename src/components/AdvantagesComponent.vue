<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AdvantagesComponent",
  methods: {
    parallax(e) {
      let html: null | HTMLElement = document.querySelector('.advantages-img')
      if (html !== null) {
        html.style.transform = `rotate(-10deg) translateX(${e.clientX * 0.015}px) translateY(${e.clientY * 0.015}px)`
      }
    },
  }
})
</script>

<template>
  <div class="advantages" @mousemove="parallax">
    <div class="container">
      <h1>Наши преимущества</h1>

      <div class="advantages__desktop__body">
        
        
        <div class="advantages__circle">
          <img class="advantages-img" src="/assets/card.png" alt="">


          <div class="advantages-advantage advantage-one">
            Бессрочные абонементы
            <span class="number">1</span>
          </div>

          <div class="advantages-advantage advantages-two">
            <span class="number">2</span>
            Первое пробное занятие бесплатно
          </div>

          <div class="advantages-advantage advantages-three">
            Система лояльности для учеников
            <span class="number">3</span>
          </div>

          <div class="advantages-advantage advantages-four">
            <span class="number">4</span>
            Индивидуальный подход
          </div>

          <div class="advantages-advantage advantages-five">
            Отдельный репетиционный зал для групп
            <span class="number">5</span>
          </div>

          <div class="advantages-advantage advantages-six">
            <span class="number">6</span>
            Бесплатные джемы и отчетные концерты
          </div>

        </div>

        

      </div>

    </div>
  </div>
</template>

<style scoped lang="scss">
.advantages {
  background-color: #0C0C0C;
  background-image: url("/assets/bg2.png");
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 5rem 0;

  h1 {
    color: white;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 72px;
  }

  .advantages__desktop__body {

    width: 100%;
    display: flex;
    justify-content: center;

    .advantages__circle {
      width: 616px;
      height: 616px;
      border-radius: 50%;
      border: 5px solid #212121;
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;

      img {
        width: 410px;
        border-radius: 10px;
        transform: rotate(-10deg);
        transition: all 0.3s ease-out;
      }

      .advantages-advantage {
        display: flex;
        color: white;
        font-size: 22px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
        gap: 32px;
        align-items: center;
        position: absolute;

        .number {
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;
          border-radius: 50%;
          min-height: 63px;
          min-width: 63px;
          color: black;
          font-size: 40px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }

        &.advantage-one {
          left: -186px;
          top: 178px;
          width: 200px;
          text-align: right;
        }

        &.advantages-two {
          width: 300px;
          right: -186px;
          top: 48px;
        }

        &.advantages-three {
          width: 350px;
          top: 348px;
          left: -316px;
          text-align: right;
        }

        &.advantages-four {
          width: 250px;
          top: 203px;
          right: -213px;
        }

        &.advantages-five {
          width: 400px;
          top: 480px;
          left: -292px;
          text-align: right;
        }

        &.advantages-six {
          width: 328px;
          top: 377px;
          right: -284px;
        }
      }
    }



  }
}
</style>