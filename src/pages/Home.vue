<template>
  <div class="page">
    <section class="search">
      <div class="container">
        <div class="box-1">
          <search-box @searchText="filterSearch">Search the brand name...</search-box>
        </div>
      </div>
    </section>
    <section class="brand">
      <div class="container">
        <brand-row v-for="item in filteredResults">
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
  /* eslint-disable arrow-body-style */

  import Clipboard from 'clipboard';

  import SearchBox from '../components/search-box.vue';
  import BrandRow from '../components/brand-row.vue';
  import ColorBox from '../components/color-box.vue';
  import EventBus from '../EventBus';

  import colorData from '../assets/data.json';

  export default {
    data() {
      return {
        colorData: colorData,
        searchedTerm: '',
      };
    },
    computed: {
      filteredResults: function () {
        const self = this;
        return self.colorData.filter((color) => {
          return color.name.toLowerCase().indexOf(self.searchedTerm.toLowerCase()) !== -1;
        });
      },
    },
    components: {
      SearchBox,
      BrandRow,
      ColorBox,
    },
    created: function () {
      const clipboard = new Clipboard('.color-box');
      clipboard.on('success', (e) => {
        EventBus.$emit('color.copied', e.text);
      });
    },
    methods: {
      filterSearch: function (val) {
        this.searchedTerm = val;
      },
    },
  };
</script>
