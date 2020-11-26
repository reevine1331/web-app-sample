<template>
  <div class="top-link" @click="clickEvent">{{ label }}</div>
</template>

<script lang="ts">
export default {
  name: "AccountLink",
  props: {
    label: String,
  },
  methods: {
    clickEvent(): void {
      (this as any).$emit("click-event");
    },
  },
};
</script>

<style lang="scss" scoped>
.top-link {
  cursor: pointer;
  color: white;
  font-size: 16px;
}
</style>