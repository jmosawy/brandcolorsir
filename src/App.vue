<template>
  <div class="wrapper" id="app">
    <bc-header></bc-header>
    <div class="page">
      <section class="search">
        <div class="container">
          <div class="box-1">
            <search-box></search-box>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
  import BcHeader from './components/header.vue';
  import SearchBox from './components/search-box.vue';

  export default {
    components: {
      BcHeader,
      SearchBox,
    },
  };
</script>
