<template>
  <div class="card">
    <div class="card-header" v-if="cardHeader" v-text="cardHeader" />
    <div class="card-body">
      <slot />
    </div>
  </div>
</template>

<script>
export default {
  name: "BCard",
  props: {
    cardHeader: String,
  },
};
</script>

<style scoped></style>
