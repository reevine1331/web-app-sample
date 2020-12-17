<template>
  <div>{{ data }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "TableContent",
  props: {
    data: Array
  }
});
</script>

<style>
</style>