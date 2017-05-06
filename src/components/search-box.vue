<template>
  <div class="form-input">
    <div class="form-input__text-box">
      <input type="text" :id="id" v-model="text">
    </div>
    <div class="form-input__label">
      <transition name="slide-fade">
        <label v-if="labelVisibility" :for="id">
          <slot>Placeholder</slot>
        </label>
      </transition>
    </div>
  </div>
</template>

<script>
  /* eslint-disable no-underscore-dangle */
  /* eslint-disable object-shorthand */

  export default {
    data() {
      return {
        text: '',
        id: this._uid,
      };
    },
    computed: {
      labelVisibility: function () {
        return (this.text === '');
      },
    },
    watch: {
      text: function (value) {
        this.$emit('searchText', value);
      },
    },
  };
</script>
