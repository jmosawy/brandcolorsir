<template>
  <div class="wrapper" id="app">
    <bc-header></bc-header>
    <router-view></router-view>
    <bc-notification v-if="showNotification" :color="selectedColor"></bc-notification>
  </div>
</template>

<script>
  /* eslint-disable object-shorthand */

  import BcHeader from './components/header.vue';
  import BcNotification from './components/notification.vue';
  import EventBus from './EventBus';

  export default {
    data() {
      return {
        showNotification: false,
        selectedColor: null,
      };
    },
    components: {
      BcHeader,
      BcNotification,
    },
    mounted: function () {
      EventBus.$on('color.copied', (color) => {
        this.showNotification = true;
        this.selectedColor = color;
        setTimeout(() => {
          this.showNotification = false;
        }, 1000);
      });
    },
  };
</script>
