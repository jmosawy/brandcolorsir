<template>
  <div class="brand-row">
    <div class="brand-row__brand-title">
      <slot name="title">
        <h2>Brand Title</h2>
      </slot>
    </div>
    <div class="brand-row__brand-colors">
      <slot name="colors">
        <color-box color="#EA1D5D"></color-box>
      </slot>
    </div>
  </div>
</template>

<script>
  import ColorBox from './color-box.vue';

  export default {
    components: {
      ColorBox,
    },
  };
</script>
