<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AdvantagesComponent",
  methods: {
    parallax(e: MouseEvent) {
      let html: null | HTMLElement = document.querySelector('.advantages-img')
      if (html !== null) {
        html.style.transform = `rotate(-10deg) translateX(${e.clientX * 0.015}px) translateY(${e.clientY * 0.015}px)`
      }
    },
  }
})
</script>

<template>
  <div class="advantages" @mousemove="parallax" id="advantages">
    <div class="container">
      <h1 class="advantages__title">Наши преимущества</h1>

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

      <div class="advantages__mobile__body">

        <div class="advantages__circle">
          <img class="advantages-img" src="/assets/card.png" alt="">
        </div>

        <div class="advantages__wrapper">

          <div class="advantage">
            <div class="advantages-advantage advantage-one">
              Бессрочные абонементы
              <span class="number">1</span>
            </div>

            <div class="advantages-advantage advantages-three">
              Система лояльности для учеников
              <span class="number">3</span>
            </div>

            <div class="advantages-advantage advantages-five">
              Отдельный репетиционный зал для групп
              <span class="number">5</span>
            </div>
          </div>

          <div class="advantage">
            <div class="advantages-advantage advantages-two">
              Первое пробное занятие бесплатно
              <span class="number">2</span>
            </div>


            <div class="advantages-advantage advantages-four">
              Индивидуальный подход
              <span class="number">4</span>
            </div>

            <div class="advantages-advantage advantages-six">
              Бесплатные джемы и отчетные концерты
              <span class="number">6</span>
            </div>
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

  .advantages__title {
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

  .advantages__mobile__body {
    display: none;

    width: 100%;
    justify-content: center;
    flex-direction: column;
    align-items: center;

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
    }

    .advantages__wrapper {

      display: flex;
      gap: 6rem;
      margin: 6rem 0;

      .advantage {
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;
        gap: 6rem;

        .advantages-advantage {
          display: flex;
          color: white;
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          gap: 32px;
          align-items: center;
          flex-direction: column-reverse;

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
        }
      }

    }

  }

}

@media screen and (max-width: 1280px) {
  .advantages {
    background-repeat: no-repeat;
    background-size: 100vw 100%;

    .container {
      width: 90vw;
    }

    .advantages__desktop__body {
      display: none;
    }
    .advantages__mobile__body {
      display: flex;
    }
  }
}

@media screen and (max-width: 750px) {
  .advantages {
    .advantages__title {
      font-size: 28px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .advantages__mobile__body {
      .advantages__circle {
        width: 90vw;
        height: 90vw;

        .advantages-img {
          width: 256px;
        }
      }

      .advantages__wrapper {
        max-width: 90vw;
        gap: 2rem;

        .advantage {
          .advantages-advantage {
            color: #E0E0E0;
            text-align: center;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
          }
        }
      }
    }
  }
}
</style>