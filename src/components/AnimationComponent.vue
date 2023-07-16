<script lang="ts">
import {defineComponent} from "vue";

defineComponent({
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
        animation: 60s infinite animation-one linear;
      }

      &.particle_two {
        transform: rotate(10deg) translate(0px, 308px) rotate(-10deg);
        animation: 60s infinite animation-two linear;
      }

      &.particle_three {
        transform: rotate(-20deg) translate(0px, 308px) rotate(20deg);
        animation: 60s infinite animation-three linear;
      }
    }

    .animation__img {
      height: 486px;
      width: 330px;
      position: absolute;
      border-radius: 16px;
      box-shadow: 0px 0px 58px 0px rgba(0, 0, 0, 0.08);
      opacity: 0;

      &.anim1 {
        transform: translateX(180px) rotate(15deg) translateY(20px);
        animation: 1s animate-one ease-in-out forwards;
      }

      &.anim3 {
        transform: translateY(-20px) translateX(-20px) scale(1.1);
        animation: 1s animate-three ease-in-out forwards;
      }

      &.anim2 {
        transform: rotate(-15deg) translateX(-180px) translateY(-20px);
        animation: 1s animate-two ease-in-out forwards;
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
</style>