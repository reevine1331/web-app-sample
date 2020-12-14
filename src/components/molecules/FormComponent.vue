<template>
  <div class="form-component">
    <div class="form-component-label">{{ form.label }}</div>
    <div class="form-component-content">
      <component
        :is="form.formType"
        :value="form.value"
        :id="form.id"
        @change-value="changeValue"
      />
    </div>
  </div>
</template>

<script>
import TextField from "@/components/atoms/TextField.vue";
import NumberField from "@/components/atoms/NumberField.vue";
import PassField from "@/components/atoms/PassField.vue";

export default {
  name: "FormComponent",
  components: {
    TextField,
    NumberField,
    PassField,
  },
  props: {
    form: Object,
    formNumber: Number
  },
  methods: {
    changeValue(formNumber, key, value) {
      this.$emit("change-value", formNumber, key, value);
    },
  },
};
</script>

<style lang="scss" scoped>
.form-component {
  padding: 8px;
  &-label {
    padding: 8px;
  }
  &-content {
    padding: 8px;
  }
}
</style>