<template>
  <div class="page">
    <section class="search">
      <div class="container">
        <div class="box-1">
          <search-box></search-box>
        </div>
      </div>
    </section>
    <section class="brand">
      <div class="container">
        <brand-row v-for="item in colorData">
          <h2 slot="title">{{ item.name }}</h2>

          <template v-for="color in item.colors">
            <color-box slot="colors" :color="color"></color-box>
          </template>
        </brand-row>
      </div>
    </section>
  </div>
</template>

<script>
  /* eslint-disable object-shorthand */

  import Clipboard from 'clipboard';

  import SearchBox from '../components/search-box.vue';
  import BrandRow from '../components/brand-row.vue';
  import ColorBox from '../components/color-box.vue';

  import colorData from '../assets/data.json';

  export default {
    data() {
      return {
        colorData: colorData,
      };
    },
    components: {
      SearchBox,
      BrandRow,
      ColorBox,
    },
    created: function () {
      const clipboard = new Clipboard('.color-box');
      clipboard.on('success', () => {
      });
    },
  };
</script>
