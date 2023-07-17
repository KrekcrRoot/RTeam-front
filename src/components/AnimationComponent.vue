<script lang="ts">
import {defineComponent} from "vue";

export default defineComponent({
  name: 'AnimationComponent',
})
</script>

<template>
    <div class="animation">
      <div class="animation__circle">
        <img class="animation__img anim1" src="/assets/anim1.png" alt="">
        <img class="animation__img anim2" src="/assets/anim2.png" alt="">
        <img class="animation__img anim3" src="/assets/anim3.png" alt="">

        <div class="particle particle_one">
          <img src="/assets/animation-icon1.svg" alt="">
        </div>
        <div class="particle particle_two">
          <img src="/assets/animation-icon2.png" alt="">
        </div>
        <div class="particle particle_three">
          <img src="/assets/animation-icon3.png" alt="">
        </div>
      </div>
    </div>
</template>

<style lang="scss">
@keyframes animation-one {
  0% {
    transform: rotate(30deg) translate(0px, -308px) rotate(-30deg);
  }

  100% {
    transform: rotate(390deg) translate(0px, -308px) rotate(-390deg);
  }
}

@keyframes animation-two {
  0% {
    transform: rotate(10deg) translate(0px, 308px) rotate(-10deg);
  }

  100% {
    transform: rotate(370deg) translate(0px, 308px) rotate(-370deg);
  }
}


@keyframes animation-three {
  0% {
    transform: rotate(-20deg) translate(0px, 308px) rotate(20deg);
  }

  100% {
    transform: rotate(350deg) translate(0px, 308px) rotate(-340deg);
  }
}

// mobile

@keyframes animation-one-mobile {
  0% {
    transform: rotate(30deg) translate(0px, -40vw) rotate(-30deg);
  }

  100% {
    transform: rotate(390deg) translate(0px, -40vw) rotate(-390deg);
  }
}

@keyframes animation-two-mobile {
  0% {
    transform: rotate(10deg) translate(0px, 40vw) rotate(-10deg);
  }

  100% {
    transform: rotate(370deg) translate(0px, 40vw) rotate(-370deg);
  }
}


@keyframes animation-three-mobile {
  0% {
    transform: rotate(-20deg) translate(0px, 40vw) rotate(20deg);
  }

  100% {
    transform: rotate(350deg) translate(0px, 40vw) rotate(-340deg);
  }
}



.animation {

  .animation__circle {
    width: 616px;
    height: 616px;
    border-radius: 50%;
    border: 5px solid #2C2C2C;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;

    .particle {
      position: absolute;
      background-color: #fff;
      height: 63px;
      width: 63px;
      border-radius: 50%;
      display: flex;
      align-items: center;
      justify-content: center;

      &.particle_one {
        transform: rotate(30deg) translate(0px, -308px) rotate(-30deg);
        animation: 20s infinite animation-one linear;
      }

      &.particle_two {
        transform: rotate(10deg) translate(0px, 308px) rotate(-10deg);
        animation: 20s infinite animation-two linear;
      }

      &.particle_three {
        transform: rotate(-20deg) translate(0px, 308px) rotate(20deg);
        animation: 20s infinite animation-three linear;
      }
    }

    .animation__img {
      height: 486px;
      width: 330px;
      position: absolute;
      border-radius: 16px;
      box-shadow: 0 0 58px 0 rgba(0, 0, 0, 0.08);
      opacity: 0;
      transition: all 0.15s ease;

      &.anim1 {
        transform: translateX(180px) rotate(15deg) translateY(20px);
        opacity: 1;
        animation: 1s animate-one ease-in-out;
      }

      &.anim3 {
        transform: translateY(-20px) translateX(-20px) scale(1.1);
        opacity: 1;
        animation: 1s animate-three ease-in-out;
      }

      &.anim2 {
        transform: rotate(-15deg) translateX(-180px) translateY(-20px);
        opacity: 1;
        animation: 1s animate-two ease-in-out;
      }
    }
  }

}

@keyframes animate-one {
  from {
    opacity: 0;
    transform: translateX(120px) rotate(15deg) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(180px) rotate(15deg) translateY(20px);
  }
}

@keyframes animate-one-mobile {
  from {
    opacity: 0;
    transform: translateX(180px) rotate(15deg) translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateX(70px) rotate(15deg) translateY(20px);
  }
}

@keyframes animate-two {
  from {
    opacity: 0;
    transform: rotate(-15deg) translateX(-140px) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: rotate(-15deg) translateX(-180px) translateY(-20px);
  }
}

@keyframes animate-two-mobile {
  from {
    opacity: 0;
    transform: rotate(-15deg) translateX(-130px) translateY(-20px);
  }
  to {
    opacity: 1;
    transform: rotate(-15deg) translateX(-80px) translateY(-20px);
  }
}

@keyframes animate-three {
  from {
    opacity: 0;
    transform: translateY(20px) translateX(-20px) scale(1.1);
  }
  to {
    opacity: 1;
    transform: translateY(-20px) translateX(-20px) scale(1.1);
  }
}

@keyframes animate-three-mobile {
  from {
    opacity: 0;
    transform: translateY(20px) translateX(-20px) scale(1.1);
  }
  to {
    opacity: 1;
    transform: translateY(-20px) translateX(-20px) scale(1.1);
  }
}


@media screen and (max-width: 750px) {
  .animation {
    .animation__circle {
      width: 80vw;
      height: 80vw;

      .particle {
        width: 40px;
        height: 40px;

        img {
          width: 50%;
          height: 50%;
        }

        &.particle_one {
          animation: 20s infinite animation-one-mobile linear;
        }

        &.particle_two {
          animation: 20s infinite animation-two-mobile linear;
        }

        &.particle_three {
          animation: 20s infinite animation-three-mobile linear;
        }
      }

      .animation__img {
        height: 250px;
        width: auto;

        &.anim1 {
          animation: 1s animate-one-mobile ease-in-out forwards;
        }

        &.anim3 {
          animation: 1s animate-three-mobile ease-in-out forwards;
        }

        &.anim2 {
          animation: 1s animate-two-mobile ease-in-out forwards;
        }
      }
    }
  }
}
</style>