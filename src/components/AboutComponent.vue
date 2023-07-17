<script lang="ts">
import {defineComponent} from 'vue'

export default defineComponent({
  name: "AboutComponent",
  methods: {
    scroll(e: WheelEvent) {
      if(e.deltaY > 0) {
        let advantages: null | HTMLElement = document.querySelector('#advantages')
        if(advantages !== null) {
          advantages.scrollIntoView()
        }
      }else {
        let header: null | HTMLElement = document.querySelector('header')
        if(header !== null) {
          header.scrollIntoView()
        }
      }
    }
  }
})
</script>

<template>
  <div class="about" id="about" @wheel="scroll">

    <div class="about__frames">

      <div class="about__frames__mobile wow slideInUp">
        <img src="/assets/image.png" alt="">
      </div>

      <div class="about__frames__desktop  wow slideInUp">
        <img class="about__frames__one" src="/assets/about1.png" alt="">
        <img class="about__frames__two" src="/assets/about3.png" alt="">
        <img class="about__frames__three" src="/assets/about2.png" alt="">
      </div>

    </div>
    <div class="about__text wow slideInUp">

      <h1>О нас</h1>

      <p>Мы обучаем игре на барабанах индивидуально, без ограничений по возрасту и уровню навыков.
        Мы уделяем особое внимание технике игры и обучим всему,
        что необходимо для становления уверенным барабанщиком - от начальных ударов до сложных ритмов.<br><br>
        Наши занятия проводятся индивидуально, чтобы добиться максимальных результатов.
        Тем, кто уже умеет играть,
        мы поможем прокачать навыки на уроках с лучшими ударниками страны и в профессионально оснащенных музыкальных залах.</p>

    </div>

  </div>
</template>

<style scoped lang="scss">
.about {
  height: 769px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 49px;

  .about__frames {
    display: flex;
    gap: 8px;

    .about__frames__mobile {
      display: none;
    }

    .about__frames__desktop {
      display: flex;
      gap: 1rem;

      .about__frames__one {
        //margin-top: ;
        height: max-content;
        margin-top: 89px;
      }
      .about__frames__two {
        height: max-content;
      }

      .about__frames__three {
        margin-top: 52px;
        height: max-content;
      }
    }


  }

  .about__text {
    width: 650px;
    display: flex;
    flex-direction: column;
    gap: 32px;

    h1 {
      color: #000;
      font-size: 48px;
      font-style: normal;
      font-weight: 700;
      line-height: normal;
    }

    p {
      text-align: justify;
      color: #000;
      font-size: 24px;
      font-style: normal;
      font-weight: 400;
      line-height: normal;
    }
  }
}

@media screen and (max-width: 1280px) {
  .about {
    height: max-content;
    padding: 6rem 0;
    flex-direction: column-reverse;
    align-items: center;
    max-width: 100vw;

    .about__text {
      align-items: center;

      p {
        text-align: center;
      }
    }
  }
}

@media screen and (max-width: 750px) {
  .about {
    padding: 4rem 0;

    .about__text {
      width: 90%;

      h1 {
        color: #000;
        text-align: center;
        font-size: 40px;
        font-style: normal;
        font-weight: 700;
        line-height: normal;

      }

      p {
        color: #000;
        text-align: center;
        //font-size: 16px;
        font-style: normal;
        font-weight: 300;
        line-height: normal;
      }
    }
    .about__frames {
      flex-shrink: 0;
      justify-content: center;

      .about__frames__mobile {
        display: flex;
        justify-content: center;

        img {
          width: 90%;
        }
      }

      .about__frames__desktop {
        display: none;
      }

      .about__frames__one {
        height: max-content;
        width: 30%;
        margin-top: 14vw;
      }

      .about__frames__two {
        height: max-content;
        width: 30%;
      }

      .about__frames__three {
        height: max-content;
        margin-top: 7vw;
        width: 30%;
      }
    }
  }
}
</style>