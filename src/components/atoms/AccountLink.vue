<template>
  <div class="top-link" @click="transTop">ログアウト</div>
</template>

<script lang="ts">
export default {
  name: "AccountLink",
  methods: {
    transTop(): void {
      (this as any).$router.push("/");
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