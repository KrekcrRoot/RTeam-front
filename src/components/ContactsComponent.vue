<script lang="ts">
import { defineComponent } from "vue";

defineComponent({
  name: "ContactsComponent"
})
</script>

<template>
  <div class="contacts">
    <div class="container">
      <h1>Свяжитесь с нами</h1>

      <div class="contacts__wrapper">
        <div class="contact">
          <h2>Телефон</h2>
          <p>+7 981 284 93 00</p>
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
</style>
