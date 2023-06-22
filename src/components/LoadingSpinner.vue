<template>
  <div id="loading_animation_wrapper">
    <div id="loading_animation">
      <span class="loading_ball ball_1"></span>
      <span class="loading_ball ball_2"></span>
      <span class="loading_ball ball_3"></span>
      <span class="loading_ball ball_4"></span>
      <span class="loading_ball ball_5"></span>
      <span class="loading_ball ball_6"></span>
      <span class="loading_ball ball_7"></span>
      <span class="loading_ball ball_8"></span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LoadingSpinner'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#loading_window {
    position: fixed;
    height: 100%;
    width: 100%;
    background-color: white;
    z-index: 9999999;
}

#loading_animation_wrapper {
    height: 100%;
    position: relative;
}

#loading_animation {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    width: 100px;
    height: 100px;
    background-color: #fff;
}

#loading_animation .loading_ball {
    width: 50%;
    height: 20px;
    position: absolute;
    top: calc(50% - 10px);
    transform-origin: 100% 50%;
    left: 0;
}

#loading_animation .loading_ball:before {
    content: '';
    display: block;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    background-color: var(--bs-blue);
    position: absolute;
    left: 0;
    top: 50%;
    transform: translateY(-50%);
}

#loading_animation .ball_1::before {
    animation: ball-animation 1s linear -0.875s infinite;
}

#loading_animation .ball_2 {
    transform: rotate(45deg);
}

#loading_animation .ball_2::before {
    animation: ball-animation 1s linear -0.75s infinite;
}

#loading_animation .ball_3 {
    transform: rotate(90deg);
}

#loading_animation .ball_3::before {
    animation: ball-animation 1s linear -0.625s infinite;
}

#loading_animation .ball_4 {
    transform: rotate(135deg);
}

#loading_animation .ball_4::before {
    animation: ball-animation 1s linear -0.5s infinite;
}

#loading_animation .ball_5 {
    transform: rotate(180deg);
}

#loading_animation .ball_5::before {
    animation: ball-animation 1s linear -0.375s infinite;
}

#loading_animation .ball_6 {
    transform: rotate(225deg);
}

#loading_animation .ball_6::before {
    animation: ball-animation 1s linear -0.25s infinite;
}

#loading_animation .ball_7 {
    transform: rotate(270deg);
}

#loading_animation .ball_7::before {
    animation: ball-animation 1s linear -0.125s infinite;
}

#loading_animation .ball_8 {
    transform: rotate(315deg);
}

#loading_animation .ball_8::before {
    animation: ball-animation 1s linear 0s infinite;
}

@keyframes ball-animation {
    0% {
        width: 20px;
        height: 20px;
        opacity: 1;
    }

    100% {
        width: 6px;
        height: 6px;
        opacity: .2;
        margin-left: 7px;
    }
}

</style>
