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

        <div class="footer__logo__mobile">

          <div class="footer__logo">
            <img src="/assets/logo.png" alt="">
          </div>

          <div class="footer__bottom__links">
            <a href="https://t.me/+79812849300">
              <img src="/assets/telegram_footer.png" alt="">
            </a>
            <a href="https://wa.me/79812849300">
              <img src="/assets/whatsapp_footer.png" alt="">
            </a>
            <a href="https://instagram.com/rteam_spb?igshid=ZWQyN2ExYTkwZQ==">
              <img src="/assets/instagram_footer.png" alt="">
            </a>
            <a href="https://vk.com/r_team__spb">
              <img src="/assets/vk_footer.png" alt="">
            </a>
          </div>

        </div>

        <div class="footer__logo__desktop">
          <img src="/assets/logo.png" alt="">
        </div>

        <div class="footer__link__btn">

          <div class="footer__top__links">
            <a href="/terms" class="footer__top__link">Пользовательское соглашение</a>
            <a href="/policy" class="footer__top__link">Политика конфиденциальности</a>
          </div>

          <a href="/#form" class="footer__top__btn">Записаться на бесплатный пробный урок</a>

        </div>

        
      </div>
      <hr />
      <div class="footer__bottom">

        <p>Copyright © 2023 «R Team» Школа музыки</p>
        <div class="footer__bottom__links">
          <a href="https://t.me/+79812849300">
            <img src="/assets/telegram_footer.png" alt="">
          </a>
          <a href="https://wa.me/79812849300">
            <img src="/assets/whatsapp_footer.png" alt="">
          </a>
          <a href="https://instagram.com/rteam_spb?igshid=ZWQyN2ExYTkwZQ==">
            <img src="/assets/instagram_footer.png" alt="">
          </a>
          <a href="https://vk.com/r_team__spb">
            <img src="/assets/vk_footer.png" alt="">
          </a>
        </div>

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

    .footer__logo__mobile {
      display: none;

      .footer__bottom__links {
        a {
          img {
            width: 25px;
            height: 25px;
          }
        }
      }
    }

    .footer__link__btn {
      display: flex;
      flex-direction: column-reverse;
      gap: 32px;
    }

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
        transition: all 0.2s ease;

        &:hover {
          color: white;
        }
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
      transition: all 0.2s ease;

      &:hover {
        background-color: white;
        color: black;
      }
    }
  }

  .footer__bottom {
    margin-top: 40px;
    display: flex;
    justify-content: space-between;

    p {
      color: #6E6E6E;
      font-size: 20px;
      font-style: normal;
      font-weight: 300;
      line-height: normal;
    }

    .footer__bottom__links {
      gap: 32px;
      display: flex;

      a {
        transition: all 0.15s ease;

        &:hover {
          filter: brightness(0) invert(1);
        }
      }
    }
  }
}

@media screen and (max-width: 1280px) {
  footer {
    .container {
      width: 90vw;
    }

    .footer__top {
      flex-wrap: wrap;
      gap: 2rem;
    }

    .footer__bottom {
      flex-wrap: wrap;
      gap: 2rem;
    }
  }
}

@media screen and (max-width: 750px) {
  footer {
    padding: 32px 0;

    .footer__top {
      margin-bottom: 32px;

      .footer__top__links {
        gap: 16px;
      }
    }

    .footer__bottom {
      margin-top: 32px;
      p {
        width: 80%;
        color: #6E6E6E;
        font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
    }
  }

  .footer__logo__mobile {
    display: flex !important;
    justify-content: space-between;
    align-items: center;
    width: 100%;

    .footer__logo {
      img {
        width: 90px;
        height: auto;
      }
    }

    .footer__bottom__links {
      gap: 16px;
      display: flex;
    }
  }

  .footer__link__btn {
    .footer__top__links {
      a {
        font-size: 1rem !important;
      }
    }
  }

  .footer__logo__desktop {
    display: none !important;
  }

  .footer__bottom {
    .footer__bottom__links {
      display: none !important;
    }
  }
}
</style>