<script lang="ts">
import { defineComponent } from "vue";
import PriceComponent from "./PriceComponent.vue";

export default defineComponent({
  name: 'PricesComponent',
  components: {PriceComponent},
  methods: {
    scroll(e: WheelEvent) {
      if(e.deltaY > 0) {
        let bottom: null | HTMLElement = document.querySelector('#teachers')
        if(bottom !== null) {
          bottom.scrollIntoView()
        }
      }else {
        let up: null | HTMLElement = document.querySelector('#advantages')
        if(up !== null) {
          up.scrollIntoView()
        }
      }
    }
  }
})
</script>

<template>
  <div class="prices" id="price">
    <div class="container">
      <h1>Стоимость</h1>

      <div class="prices__wrapper">
        <price-component title="Занятия на ударной установке">
          <div class="price__card new__line">
            <h4 class="price__card-title">Первое пробное</h4>
            <p class="price__card-body">Бесплатно</p>
          </div>

          <div class="price__card">
            <h4 class="price__card-title">Разовое занятие</h4>
            <p class="price__card-body">2 000₽</p>
          </div>

          <div class="price__card">
            <h4 class="price__card-title">5 Занятий</h4>
            <p class="price__card-body">9 000₽</p>
          </div>

          <div class="price__card">
            <h4 class="price__card-title">10 Занятий</h4>
            <p class="price__card-body">16 000₽</p>
          </div>

          <div class="price__card">
            <h4 class="price__card-title">20 Занятий</h4>
            <p class="price__card-body">28 000₽</p>
          </div>
        </price-component>
        <price-component title="Аренда зала для самостоятельных занятий на ударной установке">
          <div class="price__card">
            <h4 class="price__card-title">1 час</h4>
            <p class="price__card-body">500₽</p>
          </div>
        </price-component>
        <price-component title="Аренда репетиционного зала 3 часа">
          <div class="price__card">
            <h4 class="price__card-title">с 10:00 до 16:00</h4>
            <p class="price__card-body">800₽</p>
          </div>
          <div class="price__card">
            <h4 class="price__card-title">с 16:00 до 23:00</h4>
            <p class="price__card-body">1000₽</p>
          </div>
        </price-component>
      </div>

      <ul>
        <li>покупка абонемента на 5 занятий дает скидку в <b>1,5%</b> на покупку следующего абонемента</li>
        <li>покупка абонемента на 10 занятий дает скидку в <b>3%</b> на покупку следующего абонемента</li>
        <li>покупка абонемента на 20 занятий дает скидку в <b>4%</b> на покупку следующего абонемента</li>
      </ul>

      <p class="description">Скидка <b>12%</b> суммируется при покупке каждого абонемента до достижения максимальной</p>
    </div>
  </div>
</template>

<style lang="scss">
.prices {
  background-color: #0C0C0C;
  background-image: url("/assets/bg3.png");
  padding: 10rem 0 5rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  h1 {
    color: white;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
    margin-bottom: 72px;
  }

  .prices__wrapper {
    display: flex;
    flex-direction: column;

    .price:first-child {
      border-top: 4px solid #808080;
      .price__title {
        width: 18%;
      }
    }
  }

  ul {
    margin-top: 4rem;
    margin-left: 1.5rem;

    li {
      color: #BDBDBD;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;

      b {
        color: #FFF;
        font-size: 24px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }
  }

  p {
    color: #BDBDBD;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;

    b {
      color: #FFF;
      font-size: 24px;
      font-style: normal;
      font-weight: 600;
      line-height: normal;
    }
  }
}

@media screen and (max-width: 1280px) {
  .prices {
    background-size: 100vw 100%;
    background-repeat: no-repeat;

    h1 {
      margin-bottom: 32px;
      color: #FFF;
      font-size: 32px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    .container {
      width: 100vw;
      padding: 48px 16px;

      .prices__wrapper {
        .price {
          flex-direction: column;

          .price__title {
            width: 100%;
            font-size: 24px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }

          .price__wrapper {
            display: flex;
            flex-wrap: wrap;
            font-size: 24px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }
        }
      }
    }

    .description {
      margin-top: 3rem;
    }
  }
}

@media screen and (max-width: 750px) {
  .new__line {
    width: 100%;
  }
  .prices {
    padding: 0 0 2rem;

    .container {
      padding: 16px 16px;
    }

    ul {
      margin-top: 2rem;

      li {
        color: #BDBDBD;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: normal;

        b {
          color: #FFF;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
        }
      }
    }

    .description {
      color: #BDBDBD;
      font-size: 14px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
      margin-top: 2rem;

      b {
        color: #FFF;
        font-size: 14px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }

    .prices__wrapper {
      .price {
        border-top: 2px solid #808080;

        .price__wrapper {
          margin-bottom: 2rem;
          gap: 2rem;
          .price__card {
            .price__card-title {
              color: #B5B5B5;
              font-size: 16px;
              font-style: normal;
              font-weight: 500;
              line-height: normal;
            }

            .price__card-body {
              color: #FFF;
              font-size: 24px;
              font-style: normal;
              font-weight: 600;
              line-height: normal;
            }
          }
        }
      }
    }
  }
}
</style>