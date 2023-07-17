<script lang="ts">
import {defineComponent} from 'vue'
import AdvantagesComponent from "../components/AdvantagesComponent.vue";
import AboutComponent from "../components/AboutComponent.vue";
import BlackSectionComponent from "../components/BlackSectionComponent.vue";
import TeachersComponent from "../components/TeachersComponent.vue";
import FormComponent from "../components/FormComponent.vue";
import ContactsComponent from "../components/ContactsComponent.vue";
import MapComponent from "../components/MapComponent.vue";
import AnimationComponent from "../components/AnimationComponent.vue";

export default defineComponent({
  name: "MainPage",
  components: {
    AnimationComponent,
    MapComponent,
    ContactsComponent,
    FormComponent, TeachersComponent, BlackSectionComponent, AboutComponent, AdvantagesComponent},
  data() {
    return {
      cookieClosed: false,
      burgerOpened: false,
      buttonShow: true,
    }
  },
  methods: {
    closeBurger() {
      this.burgerOpened = false
    },
    parallax(e: MouseEvent) {
      let html1: null | HTMLElement = document.querySelector('.anim1')
      if (html1 !== null) {
        html1.style.transform = `translateX(${180 + e.clientX * 0.015}px) rotate(15deg) translateY(${20 + e.clientY * 0.015}px)`
      }
      let html2: null | HTMLElement = document.querySelector('.anim2')
      if(html2 !== null) {
        html2.style.transform = `rotate(-15deg) translateX(${e.clientX * 0.015 - 180}px) translateY(${e.clientY * 0.015 - 20}px)`
      }
      let html3: null | HTMLElement = document.querySelector('.anim3')
      if(html3 !== null) {
        html3.style.transform = `translateY(${e.clientY * 0.015 - 20}px) translateX(${e.clientX * 0.015 - 20}px) scale(1.1)`
      }
    },
    scroll(e: WheelEvent) {
      if(e.deltaY > 0) {
        let about: null | HTMLElement = document.querySelector('#about')
        if (about !== null) {
          about.scrollIntoView()
        }
      }
    },
  },
})
</script>

<template>
  <transition>
    <a href="#form" v-if="buttonShow" class="toFormBtn" @click="buttonShow = false">
      Записаться
    </a>
  </transition>
  <header @mousemove="parallax" @wheel="scroll">
    <div class="header__desktop">
      <nav class="header__nav">
        <a href="/" class="header__nav__logo">
          <img src="/assets/logo.png" alt="">
        </a>

        <ul class="header__nav__links">
          <li><a href="#about" @click="closeBurger">О нас</a></li>
          <li><a href="#advantages" @click="closeBurger">Преимущества</a></li>
          <li><a href="#price" @click="closeBurger">Стоимость</a></li>
          <li><a href="#teachers" @click="closeBurger">Преподаватели</a></li>
          <li><a href="#contacts" @click="closeBurger">Контакты</a></li>
        </ul>

        <p class="header__nav__phone">8 981 284 93 00</p>
      </nav>

      <div class="header__links">
        <a href="https://t.me/+79812849300">
          <img src="/assets/Telegram.svg" alt="Telegram">
        </a>

        <a href="https://wa.me/79812849300">
          <img src="/assets/Whatsapp.png" alt="Whatsapp">
        </a>

        <a href="tel:89812849300">
          <img src="/assets/phone.svg" alt="Whatsapp">
        </a>
      </div>
    </div>

    <div class="header__mobile">

      <div class="header__fixed">
        <a href="/" class="header__nav__logo">
          <img src="/assets/logo.png" alt="">
        </a>

        <a class="header__nav__close" @click="burgerOpened = true">
          <img src="/assets/close_burger.svg" alt="">
        </a>
      </div>

      <transition>
        <div v-if="burgerOpened" class="header__burger">

          <div class="header__burger__top">
            <a href="/" class="header__nav__logo">
              <img src="/assets/logo.png" alt="">
            </a>

            <a @click="burgerOpened = false" class="header__nav__cls">
              <img src="/assets/burger_close.svg" alt="">
            </a>
          </div>


          <ul class="header__nav__links">
            <li><a href="#about" @click="closeBurger">О нас</a></li>
            <li><a href="#advantages" @click="closeBurger">Преимущества</a></li>
            <li><a href="#price" @click="closeBurger">Стоимость</a></li>
            <li><a href="#teachers" @click="closeBurger">Преподаватели</a></li>
            <li><a href="#contacts" @click="closeBurger">Контакты</a></li>
          </ul>

          <div class="header__links">
            <a href="https://t.me/+79812849300">
              <img src="/assets/Telegram.svg" alt="Telegram">
            </a>

            <a href="https://wa.me/79812849300">
              <img src="/assets/Whatsapp.png" alt="Whatsapp">
            </a>

            <a href="tel:89812849300">
              <img src="/assets/phone.svg" alt="Whatsapp">
            </a>
          </div>


        </div>
      </transition>

    </div>


    <div class="header__body">
      <div class="header__body__form">
        <h1>Хотите научиться играть на барабанах?</h1>
        <p>Вам точно нужно в R Team! У нас вы найдете отличное оборудование, опытных преподавателей
          и программы обучения, которые подходят для всех уровней игры - от начинающих до продвинутых.</p>
        <a href="/#form" class="btn">Записаться на бесплатный Пробный урок</a>
      </div>
      <div class="header__body__animation">
        <animation-component />
      </div>
    </div>

    <transition>
      <div class="header__cookie" v-if="!cookieClosed">
        <div class="header__cookie__body">
          <h2>Мы используем<br> Cookies для улучшения<br> работы сайта</h2>
          <p>Оставаясь на сайте, вы соглашаетесь с использованием файлов cookie</p>
          <a class="header__cookie-btn" @click="cookieClosed = true">Хорошо</a>
        </div>
      </div>
    </transition>
  </header>
  <main>

    <about-component />
    <black-section-component />
    <teachers-component />
    <form-component />
    <contacts-component />
    <map-component />

  </main>
</template>

<style scoped lang="scss">
.v-enter-active,
.v-leave-active {
  transition: opacity 0.2s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}

.toFormBtn {
  display: none;
  transition: all 0.2s ease;
}

header {
  background-image: url("/assets/background.png");
  background-repeat: no-repeat;
  height: 100vh;
  background-color: black;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  background-size: 100vw 100vh;

  .header__mobile {
    display: none;
    width: 100%;

    .header__burger {
      position: fixed;
      height: 100vh;
      width: 100vw;
      background-color: rgba(33, 33, 33, 0.995);
      z-index: 10;

      display: flex;
      padding: 2rem;
      flex-direction: column;

      .header__burger__top {
        display: flex;
        justify-content: space-between;
        align-items: center;

        .header__nav__logo {
          img {
            width: 80% !important;
          }
        }
      }

      .header__links {
        position: static;
        width: 100%;
        display: flex;
        justify-content: center;

        a {
          img {
            height: 35px;
            width: 35px;
          }
        }
      }

      .header__nav__links {
        display: flex;
        flex-direction: column;
        list-style: none;
        margin: 4rem 0;
        gap: 1.5rem;

        li {
          a {
            font-size: 1.5rem;
            color: white;
            text-decoration: none;
          }
        }
      }

      .header__nav__phone {
        color: white;
        font-size: 2rem;
      }

      .header__burger__top {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }

      .header__nav__cls {
        cursor: pointer;

        img {
          width: 50px;
          height: 50px;
        }
      }

    }

    .header__fixed {
      position: fixed;
      background-color: rgba(0, 0, 0, 0.6);
      width: 100%;
      z-index: 5;
      display: flex;
      justify-content: space-between;
      padding: 1rem;
      align-items: center;

      .header__nav__close {
        cursor: pointer;
      }

      .header__nav__logo {
        img {
          height: 44px;
          width: 106px;
        }
      }
    }


  }

  .header__nav {
    padding-top: 26px;
    color: white;
    display: flex;
    justify-content: space-evenly;
    max-width: 1280px;
    align-items: center;
    gap: 4rem;
    flex-wrap: wrap;

    .header__nav__logo {
      img {
        width: 171px;
        height: 73px;
      }
    }

    .header__nav__links {
      display: flex;
      list-style: none;
      gap: 40px;
      align-items: center;

      li {
        a {
          text-decoration: none;
          color: white;
          font-size: 20px;
          font-style: normal;
          //font-weight: 300;
          line-height: normal;
        }
      }

    }

    .header__nav__phone {
      font-size: 24px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }

  }

  .header__links {
    position: absolute;
    top: 48px;
    right: 56px;
    display: flex;
    gap: 32px;
  }

  .header__body {
    max-width: 1280px;
    margin-top: 120px;
    display: flex;
    align-items: center;
    gap: 5rem;

    .header__body__form {
      display: flex;
      flex-direction: column;
      width: 636px;

      h1 {
        color: white;
        font-size: 50px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
      }

      p {
        color: #FFF;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        margin-top: 32px;
        margin-bottom: 56px;
        line-height: normal;
      }
    }
  }

  .header__cookie {
    display: flex;
    flex-direction: column;
    background-color: white;
    border-radius: 8px;
    position: fixed;
    width: 350px;
    min-height: max-content;
    bottom: 32px;
    right: 24px;
    padding: 16px;
    z-index: 100;
    justify-content: center;
    align-items: center;

    .header__cookie__body {
      width: 300px;
      display: flex;
      flex-direction: column;

      h2 {
        font-family: Gilroy, Inter, sans-serif;
        font-size: 20px;
        font-style: normal;
        font-weight: 500;
        line-height: 88%;
        margin-bottom: 12px;
      }

      p {
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: 88%;
      }

      .header__cookie-btn {
        cursor: pointer;
        padding: 14px;
        text-align: center;
        text-decoration: none;
        font-size: 18px;
        font-style: normal;
        font-weight: 600;
        line-height: 96%;
        background-color: black;
        color: white;
        margin-top: 20px;
      }
    }


  }

}

main {
  width: 100%;
  display: flex;
  flex-direction: column;
}

@media screen and (max-width: 1600px) {
  header {
    background-size: 100vw 100%;
    height: max-content;

    .header__links {
      top: 100px;
    }
    padding-bottom: 6rem;
  }
}

@media screen and (max-width: 1280px) {
  header {
    .header__body {
      flex-direction: column;
      width: 95vw;
    }
  }
}

@media screen and (max-width: 750px) {
  .toFormBtn {
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    left: 1rem;
    bottom: 1rem;
    background-color: white;
    border-radius: 30px;
    height: max-content;
    text-decoration: none;
    color: black;
    width: max-content;
    z-index: 100;
    font-size: 14px;
    font-style: normal;
    padding: 1em;
    border: 1px solid #808080;

    img {
      margin-top: 3px;
      height: 80%;
      width: 50%;
    }
  }

  header {

    .header__cookie {
      width: 80vw;
      transform: scale(0.6);
      bottom: -5vw;
      right: -13vw;
    }

    //.header__cookie {
    //  width: 200px;
    //  height: max-content;
    //
    //  bottom: 50px;
    //  right: 50px;
    //
    //  h2 {
    //    font-size: 1rem;
    //  }
    //
    //  p {
    //    font-size: 1rem;
    //  }
    //
    //}

    .header__body {
      .header__body__form {
        width: 90%;
        .btn {
          color: #000;
          text-align: center;
          font-size: 14px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          text-transform: uppercase;
          padding: 16px;
        }

        h1 {
          text-align: center;
          font-size: 32px;
          font-style: normal;
          font-weight: 700;
          line-height: normal;
        }

        p {
          text-align: center;
          font-size: 16px;
          font-style: normal;
          font-weight: 300;
          line-height: normal;
        }
      }
    }

    .header__desktop {
      display: none;
    }
    .header__mobile {
      display: flex;
    }
  }
}
</style>