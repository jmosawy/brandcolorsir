<template>
  <div class="color-box" :style="{ backgroundColor: color }" :data-clipboard-text="color"></div>
</template>

<script>
  export default {
    props: ['color'],
  };
</script>
