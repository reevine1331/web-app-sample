<template>
  <div class="modal-wrapper">
    <component :is="$store.state.modal.path"></component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import AddCanvas from "@/components/organisms/Modal/AddCanvas.vue"

export default defineComponent({
  name: "Modal",
  components: {
    AddCanvas
  }
});
</script>

<style lang="scss" scoped>
.modal-wrapper {
  z-index: 999;
  position: fixed;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>