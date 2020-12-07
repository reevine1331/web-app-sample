<template>
  <modal-frame size="L">
    <template v-slot:header><div>新規登録</div></template>
    <template v-slot:content>AddCanvas:content</template>
    <template v-slot:footerLeft>
      <div></div>
    </template>
    <template v-slot:footerRight>
      <common-button label="登録" />
    </template>
  </modal-frame>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import ModalFrame from "@/components/organisms/Modal/ModalFrame.vue";
import CommonButton from "@/components/atoms/CommonButton.vue";

export default defineComponent({
  name: "AddCanvas",
  components: {
    ModalFrame,
    CommonButton,
  },
});
</script>

<style lang="scss" scoped>
</style>