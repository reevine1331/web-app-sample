<template>
  <div class="table">
    <table-header :data="header" />
    <table-content :data="data" />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TableHeader from "@/components/organisms/Table/TableHeader.vue";
import TableContent from "@/components/organisms/Table/TableContent.vue";

export default defineComponent({
  name: "TableComponent",
  components: {
    TableHeader,
    TableContent,
  },
  props: {
    header: Array,
    data: Array,
  },
});
</script>

<style lang="scss" scoped>
.table {
  width: 100%;
}
</style>