<template>
  <div class="global-header">
    <div>
      <header-logo />
    </div>
    <div>
      <account-link :label="linkLabel" @click-event="signOut" />
    </div>
  </div>
</template>

<script>
import HeaderLogo from "@/components/atoms/HeaderLogo.vue";
import AccountLink from "@/components/atoms/AccountLink.vue";

export default {
  name: "GlobalHeader",
  components: {
    HeaderLogo,
    AccountLink,
  },
  props: {
    linkLabel: String,
  },
  methods: {
    signOut() {
      this.$emit("sign-out");
    },
  },
};
</script>

<style lang="scss" scoped>
.global-header {
  position: fixed;
  top: 0;
  width: 100%;
  height: 72px;
  background: black;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
}
</style>