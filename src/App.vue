<template>
  <div class="wrapper" id="app">
    <bc-header></bc-header>
    <router-view></router-view>
  </div>
</template>

<script>
  import BcHeader from './components/header.vue';

  export default {
    components: {
      BcHeader,
    },
  };
</script>
