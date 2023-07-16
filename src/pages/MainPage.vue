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
    }
  }
})
</script>

<template>
  <header>
    <nav class="header__nav">
      <a href="/" class="header__nav__logo">
        <img src="/assets/logo.png" alt="">
      </a>

      <ul class="header__nav__links">
        <li><a href="#about">О нас</a></li>
        <li><a href="#advantages">Преимущества</a></li>
        <li><a href="#price">Стоимость</a></li>
        <li><a href="#teachers">Преподаватели</a></li>
        <li><a href="#contacts">Контакты</a></li>
      </ul>

      <p class="header__nav__phone">+7 981 284 93 00</p>
    </nav>

    <div class="header__links">
      <a href="#">
        <img src="/assets/Telegram.svg" alt="Telegram">
      </a>

      <a href="#">
        <img src="/assets/Whatsapp.png" alt="Whatsapp">
      </a>
    </div>

    <div class="header__body">
      <div class="header__body__form">
        <h1>Хотите научиться играть на барабанах?</h1>
        <p>Вам точно нужно в R Team! У нас вы найдете отличное оборудование, опытных преподавателей
          и программы обучения, которые подходят для всех уровней игры - от начинающих до продвинутых.</p>
        <a href="" class="btn">Записаться на бесплатный Пробный урок</a>
      </div>
      <div class="header__body__animation">
        <animation-component />
      </div>
    </div>

    <transition>
      <div class="header__cookie" v-if="!cookieClosed">
        <h2>Мы используем Cookies для улучшения работы сайта</h2>
        <p>Оставаясь на сайте, вы соглашаетесь с использованием файлов cookie</p>
        <a class="header__cookie-btn" @click="cookieClosed = true">Хорошо</a>
      </div>
    </transition>
  </header>
  <main>

    <about-component />
    <transition appear :duration="10000">
      <black-section-component />
    </transition>
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

  .header__nav {
    padding-top: 26px;
    color: white;
    display: flex;
    justify-content: space-evenly;
    max-width: 1280px;
    align-items: center;
    gap: 4rem;

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
    width: 320px;
    min-height: 180px;
    bottom: 32px;
    right: 24px;
    padding: 16px;

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

main {
  width: 100%;
  display: flex;
  flex-direction: column;
}
</style>