<template>
  <div class="app">
    <div class="app-wrapper" v-if="$route.path !== '/'">
      <global-header @sign-out="signOut" linkLabel="ログアウト" />
      <div class="app-content">
        <global-aside />
        <router-view />
      </div>
    </div>
    <router-view v-else />
  </div>
</template>

<script lang="ts">
import GlobalHeader from "@/components/layouts/GlobalHeader.vue";
import GlobalAside from "@/components/layouts/GlobalAside.vue";

export default {
  name: "App",
  components: {
    GlobalHeader,
    GlobalAside,
  },
  created() {
    (this as any).$store.dispatch("auth/onAuthChanged");
  },
  computed: {
    authState(): number {
      return (this as any).$store.state.auth.state;
    },
  },
  watch: {
    authState(value: boolean) {
      if (value) {
        (this as any).$router.replace("/home");
      } else {
        (this as any).$router.replace("/");
      }
    },
  },
  methods: {
    signOut() {
      (this as any).$store.dispatch("auth/signOut");
    },
  },
};
</script>

<style lang="scss">
* {
  box-sizing: border-box;
}

html,
body,
#app,
.app {
  height: 100%;
  width: 100%;
  margin: 0;
  .app-wrapper {
    height: 100%;
    width: 100%;
    .app-content {
      display: flex;
      height: calc(100% - 72px);
      position: relative;
      top: 72px;
      .page {
        overflow-x: hidden;
        overflow-y: auto;
        height: 100%;
        flex: 1;
      }
    }
  }
}
</style>