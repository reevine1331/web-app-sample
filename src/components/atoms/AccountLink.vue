<template>
  <div class="top-link" @click="transTop">ログアウト</div>
</template>

<script>
export default {
  name: "AccountLink",
  methods: {
    transTop() {
      this.$router.push("/");
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