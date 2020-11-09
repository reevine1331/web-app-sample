<template>
  <div class="text-field">
    <input type="password" v-model="innerValue" />
  </div>
</template>

<script>
export default {
  name: "PassField",
  props: {
    value: String,
    id: Number,
    formNumber: Number
  },
  computed: {
    innerValue: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit("change-value", this.formNumber, this.id, value);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
.text-field {
  width: 100%;
  position: relative;
  height: 24px;
  border-bottom: 1px solid black;
  &::before {
    content: "";
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 8px;
    bottom: 0;
    border-left: 1px solid black;
  }
  &::after {
    content: "";
    display: inline-block;
    position: absolute;
    width: 100%;
    height: 8px;
    right: 0;
    bottom: 0;
    border-right: 1px solid black;
  }
  input[type="password"] {
    width: 100%;
    height: 21px;
    border: none;
    outline: none;
    padding: 0px 8px;
    font-size: 16px;
  }
}
</style>
