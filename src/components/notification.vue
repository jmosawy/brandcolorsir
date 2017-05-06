<template>
  <transition name="slide-up">
    <div class="notification notification--position-bottom">
      The color {{ color }} is copied.
    </div>
  </transition>
</template>

<script>
  export default {
    props: ['color'],
  };
</script>
