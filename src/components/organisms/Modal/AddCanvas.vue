<template>
  <modal-frame size="L">
    <template v-slot:header><div>新規登録</div></template>
    <template v-slot:content>
      <div class="form">
        <form-component
          v-for="(form, index) in formData"
          :key="index"
          :form="form"
          @change-value="changeValue"
        />
      </div>
    </template>
    <template v-slot:footerLeft>
      <div></div>
    </template>
    <template v-slot:footerRight>
      <common-button label="登録" @click-event="addCanvas" />
    </template>
  </modal-frame>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import CommonButton from "@/components/atoms/CommonButton.vue";
import FormComponent from "@/components/molecules/FormComponent.vue";
import ModalFrame from "@/components/organisms/Modal/ModalFrame.vue";

export default defineComponent({
  name: "AddCanvas",
  components: {
    ModalFrame,
    FormComponent,
    CommonButton,
  },
  computed: {
 
  },
  methods: {
    changeValue(formNumber: number, key: number, value: any) {
      (this as any).$store.commit("canvas/changeCanvasValue", { key, value });
    },
    // addCanvas() {},
  },
});
</script>

<style lang="scss" scoped>
</style>