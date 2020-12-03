<template>
  <div class="global-aside" :class="setClassOpen">
    <div class="global-aside-header">
      <div class="arrow" @click="handleAside" :class="setClassOpen"></div>
    </div>
    <div class="global-aside-content">
      <router-link
        class="aside-menu"
        v-for="(item, index) in asideMenuList"
        :key="index"
        :to="item.path"
      >
        <img :src="require(`@/assets/icon/${item.icon}.svg`)" />
        <div class="aside-menu-label">{{ item.label }}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
import { ASIDE_MENU_LIST } from "@/mixins/asideMenuList.ts";

export default {
  name: "GlobalAside",
  data() {
    return {
      open: false,
      asideMenuList: ASIDE_MENU_LIST,
    };
  },
  computed: {
    setClassOpen() {
      return this.open ? "open" : "";
    },
  },
  methods: {
    handleAside() {
      this.open = !this.open;
    },
  },
};
</script>

<style lang="scss" scoped>
.global-aside {
  color: white;
  width: 64px;
  height: 100%;
  background: black;
  transition: all 0.4s ease;
  &-header {
    width: 100%;
    display: flex;
    justify-content: flex-end;
    padding: 8px 16px;
    border-top: 1px white solid;
    border-bottom: 1px white solid;
    padding-right: 24px;
    .arrow {
      display: flex;
      justify-content: center;
      align-items: center;
      position: relative;
      width: 24px;
      height: 24px;
      &:hover {
        &:before {
          border-color: blue;
        }
      }
      &:before {
        content: "";
        position: absolute;
        display: inline-block;
        width: 12px;
        height: 12px;
        border-left: 2px white solid;
        border-top: 2px white solid;
        transform: rotate(-225deg);
        transition: all 0.4s ease;
      }
    }
    .open {
      &:before {
        transform: rotate(-45deg);
      }
    }
  }
  &-content {
    height: calc(100% - 86px);
    overflow: auto;
    .aside-menu {
      padding: 0px 16px;
      color: white;
      text-decoration: none;
      display: flex;
      align-items: center;
      height: 44px;
      border-bottom: 1px solid white;
      &:hover {
        background: gray;
      }
      img {
        margin-left: 4px;
        width: 20px;
        height: 20px;
      }
      &-label {
        font-size: 16px;
        margin-left: 8px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
        flex: 1;
      }
    }
  }
}
.open {
  width: 200px;
}
</style>