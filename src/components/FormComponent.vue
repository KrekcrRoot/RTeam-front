<script lang="ts">
import { defineComponent } from "vue";
import swal from 'sweetalert'
import api from "../api/api.ts";

export default defineComponent({
  name: 'FormComponent',
  data() {
    return {
      name: '',
      phone: '',
    }
  },
  methods: {
    submit() {
      api.call.create(this.name, this.phone).then(() => {
        swal({
          icon: 'success',
          text: 'Отправлено',
          buttons: [''],
        })
      }).catch((error) => {
        swal({
          icon: 'error',
          text: error.response.message,
        })
      })


    },
    scroll(e: WheelEvent) {
      if(e.deltaY > 0) {
        let bottom: null | HTMLElement = document.querySelector('#contacts')
        if(bottom !== null) {
          bottom.scrollIntoView()
        }
      }else {
        let up: null | HTMLElement = document.querySelector('#teachers')
        if(up !== null) {
          up.scrollIntoView()
        }
      }
    }
  }
})
</script>

<template>
  <div class="form" id="form">
    <div class="form__blur">
      <div class="container">
        <div class="form__title">
          <h1>Остались вопросы? Задайте их нам</h1>
          <p>Пожалуйста заполните пустые поля формы и мы обязательно свяжемся с Вами в ближайшее время</p>
        </div>
        <form @submit.prevent="submit" class="form__body">
          <input type="text" class="form__input" placeholder="Имя" v-model="name">
          <input type="text" class="form__input" placeholder="Номер телефона" v-model="phone">
          <input type="submit" value="Отправить" class="form__submit">
          <p>При нажатии на кнопку “Отправить” вы принимаете условия
            <a href="/terms" class="underline">пользовательского соглашение</a> и даёте согласие на обработку <a href="/policy" class="underline">персональных данных</a></p>
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
          background-color: rgba(255, 255, 255, 0.24);
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
          transition: all 0.15s ease;

          &:hover {
            background-color: #808080;
            color: white;
          }
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

  @media screen and (max-width: 1280px) {
    .form {
      background-size: auto 100%;
      height: max-content;
      .container {
        width: 100vw;
        flex-direction: column;
        padding: 48px 16px;
        gap: 24px;

        .form__title {
          h1 {
            font-size: 28px;
            font-style: normal;
            font-weight: 700;
            line-height: normal;
          }

          p {
            font-size: 16px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
          }
        }

        .form__body {
          .form__submit {
            font-size: 16px;
            font-style: normal;
            font-weight: 500;
            line-height: normal;
          }
        }
      }
    }
  }
  
  @media screen and (max-width: 750px) {
    .form {
      background-image: url("/assets/bgmobile.png");
      .form__blur {
        padding-bottom: 6rem;
        .form__body {
          p {
            color: #FFF;
            font-family: Inter;
            font-size: 12px;
            font-style: normal;
            font-weight: 300;
            line-height: normal;
          }

          .form__input {
            color: #FFF;
            font-size: 16px;
            font-style: normal;
            font-weight: 400;
            line-height: normal;
            padding: 16px 16px;

            &::placeholder {
              color: white !important;

            }
          }

          .form__submit {
            padding: 16px 0;
          }
        }
      }
      //padding-bottom: 5rem;
    }
  }
</style>