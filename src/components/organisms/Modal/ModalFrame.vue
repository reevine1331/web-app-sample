<template>
  <div class="modal-frame" :class="setClassSize">
    <div class="modal-header">
      <slot name="header"></slot>
      <div class="close">
        <img :src="closeUrl" @click="closeModal" />
      </div>
    </div>
    <div class="modal-content">
      <slot name="content"></slot>
    </div>
    <div class="modal-footer">
      <slot name="footerLeft"></slot>
      <slot name="footerRight"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

export default defineComponent({
  name: "ModalFrame",
  props: {
    size: String,
  },
  data() {
    return {
      closeUrl: require("@/assets/icon/clear_black.svg"),
    };
  },
  computed: {
    setClassSize() {
      return `size-${(this as any).size}`;
    },
  },
  methods: {
    closeModal() {
      (this as any).$store.dispatch("modal/closeModal");
    },
  },
});
</script>

<style lang="scss" scoped>
.modal-frame {
  z-index: 1000;
  width: 400px;
  background: white;
  display: flex;
  flex-direction: column;
  border-radius: 4px;
  padding: 16px;
  .modal-header {
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .close {
      width: 24px;
      display: flex;
      justify-content: center;
      align-content: center;
      img {
        width: 24px;
        cursor: pointer;
      }
    }
  }
  .modal-content {
    flex: 1;
  }
  .modal-footer {
    height: 32px;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.size-S {
  height: 160px;
  width: 400px;
}

.size-M {
  height: 320px;
  width: 400px;
}

.size-L {
  height: 640px;
  width: 480px;
}
</style>