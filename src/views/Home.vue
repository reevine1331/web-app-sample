<template>
  <div class="page">
    <content-header>
      <template v-slot:right>
        <common-button label="新規登録" @click-event="showCanvasForm" />
      </template>
    </content-header>
    <table-component :header="header" :data="canvasList"></table-component>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { HOME_LIST } from "@/mixins/tableList.ts";

import CommonButton from "@/components/atoms/CommonButton.vue";
import ContentHeader from "@/components/molecules/ContentHeader.vue";

import TableComponent from "@/components/organisms/Table/index.vue";

export default defineComponent({
  name: "Home",
  components: {
    CommonButton,
    ContentHeader,
    TableComponent,
  },
  data() {
    return {
      header: HOME_LIST,
    };
  },
  computed: {
    canvasList() {
      return (this as any).$store.state.canvas.canvasList;
    },
  },
  methods: {
    showCanvasForm() {
      (this as any).$store.dispatch("modal/setModal", "AddCanvas");
    },
  },
});
</script>
