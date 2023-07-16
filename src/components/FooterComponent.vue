<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "FooterComponent"
})
</script>

<template>
  <footer>
    <div class="container">
      <div class="footer__top">
        
        <div class="footer__logo">
          <img src="/assets/logo.png" alt="">
        </div>

        <div class="footer__top__links">
          <a href="" class="footer__top__link">Пользовательское соглашение</a>
          <a href="" class="footer__top__link">Политика конфиденциальности</a>
        </div>

        <a href="#" class="footer__top__btn">Записаться на бесплатный пробный урок</a>
        
      </div>
      <hr />
      <div class="footer__bottom">

        <p>Copyright © 2023 «R Team» Школа музыки</p>
        <div class="footer__bottom__links"></div>

      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
footer {
  background-color: #0C1013;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 61px 0;

  hr {
    border: none;
    height: 1px;
    background: #404040;
  }

  .footer__top {
    margin-bottom: 60px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    .footer__top__links {
      display: flex;
      flex-direction: column;
      gap: 8px;

      .footer__top__link {
        color: #6E6E6E;
        text-decoration: none;
        font-size: 20px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
    }

    .footer__top__btn {
      background: #505050;
      color: #FFF;
      text-align: center;
      font-size: 16px;
      display: flex;
      align-items: center;
      justify-content: center;
      text-decoration: none;
      height: max-content;
      padding: 16px 40px;
      font-style: normal;
      font-weight: 500;
      line-height: normal;
    }
  }

  .footer__bottom {
    margin-top: 40px;

    p {
      color: #6E6E6E;
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }
  }
}
</style>