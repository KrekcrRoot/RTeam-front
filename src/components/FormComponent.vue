<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: 'FormComponent',
})
</script>

<template>
  <div class="form">
    <div class="form__blur">
      <div class="container">
        <div class="form__title">
          <h1>Остались вопросы? Задайте их нам</h1>
          <p>Пожалуйста заполните пустые поля формы и мы обязательно свяжемся с Вами в ближайшее время</p>
        </div>
        <form action="" class="form__body">
          <input type="text" class="form__input" placeholder="Имя">
          <input type="text" class="form__input" placeholder="Номер телефона">
          <input type="submit" value="Отправить" class="form__submit">
          <p>При нажатии на кнопку “Отправить” вы принимаете условия
            <span class="underline">пользовательского соглашение</span> и даёте согласие на обработку <span class="underline">персональных данных</span></p>
        </form>
      </div>
    </div>
  </div>
</template>

<style lang="scss">
  .form {
    background-image: url("/assets/backgroundForm.png");
    height: 557px;

    .form__blur {
      background: linear-gradient(180deg, rgba(0, 0, 0, 0.8) 32.01%, rgba(0, 0, 0, 0.672) 100%);
      height: 100%;
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;

      .container {
        display: flex;
        align-items: center;
      }

      .form__title {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 24px;

        h1 {
          font-size: 56px;
          font-style: normal;
          font-weight: 600;
          line-height: normal;
          color: white;
        }

        p {
          color: #E0E0E0;
          font-size: 24px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
        }
      }

      .form__body {
        flex: 1;
        display: flex;
        flex-direction: column;
        gap: 23px;

        .form__input {
          color: #FFF;
          font-size: 22px;
          font-style: normal;
          font-weight: 400;
          line-height: normal;
          padding: 28px 32px;
          background: rgba(255, 255, 255, 0.24);
          backdrop-filter: blur(2.5px);
          border: none;
          outline: none;
          width: 100%;

          &::placeholder {
            color: #FFF;
          }
        }

        .form__submit {
          cursor: pointer;
          padding: 28px 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          background-color: white;

          color: #000;
          text-align: center;
          font-size: 28px;
          font-style: normal;
          font-weight: 500;
          line-height: normal;
          border: none;
          width: 100%;
        }

        p {
          color: #FFF;
          font-size: 14px;
          font-style: normal;
          font-weight: 300;
          line-height: normal;

          .underline {
            color: #FFF;
            font-size: 14px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            text-decoration-line: underline;
          }
        }

      }

    }
  }
</style>