<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ContactsComponent"
})
</script>

<template>
  <div class="contacts" id="contacts">
    <div class="container">
      <h1>Свяжитесь с нами</h1>

      <div class="contacts__wrapper">
        <div class="contact">
          <h2>Телефон</h2>
          <a href="tel:89812849300">+7 981 284 93 00</a>
        </div>
        <div class="contact">
          <h2>Адрес</h2>
          <p>Ст. метро Нарвская,<br /> ул. Промышленная, 5</p>
        </div>
        <div class="contact">
          <h2>Эл. почта</h2>
          <p>RTeam.78@yandex.ru</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
.contacts {
  display: flex;
  flex-direction: column;
  align-items: center;

  padding: 120px 0;

  .container {
    display: flex;
    flex-direction: column;
    gap: 48px;
  }

  h1 {
    text-transform: uppercase;
    color: #000;
    text-align: center;
    font-size: 48px;
    font-style: normal;
    font-weight: 600;
    line-height: normal;
  }

  .contacts__wrapper {
    display: flex;
    justify-content: space-between;

    .contact {
      display: flex;
      flex-direction: column;
      gap: 16px;
      align-items: center;

      a {
        text-decoration: none;
        color: #000;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }

      h2 {
        color: #9D9D9D;
        font-size: 24px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
      }

      p {
        color: #000;
        font-size: 32px;
        font-style: normal;
        font-weight: 600;
        line-height: normal;
      }
    }
  }
}

@media screen and (max-width: 1280px) {
  .contacts {
    padding: 0;

    .container {
      padding: 48px 16px;
      width: 100vw;

      h1 {
        text-align: left;
      }

      .contacts__wrapper {
        flex-direction: column;
        gap: 24px;

        .contact {
          align-items: flex-start;
        }
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .contacts {
    .container {
      gap: 24px;

      h1 {
        color: #000;
        font-size: 28px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;
        width: 50%;
      }

      .contacts__wrapper {
        .contact {

          gap: 8px;

          h2 {
            font-size: 22px;
          }
          p {
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }
          a {
            font-size: 20px;
            font-style: normal;
            font-weight: 600;
            line-height: normal;
          }
        }
      }
    }
  }
}
</style>
