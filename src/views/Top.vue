<template>
  <div class="top">
    <div class="top-wrapper">
      <div class="top-title">Web App Sample</div>
      <div class="tab-wrapper">
        <tab-component
          :list="tabList"
          :selected="selectedTab"
          @click-event="selectTab"
        />
      </div>
      <login-form
        v-for="item in tabList"
        :key="item.id"
        v-show="selectedTab === item.id"
        :formData="formData[item.id - 1]"
        :itemData="item"
        :selectedTab="selectedTab"
        @change-value="changeValue"
        @sign-up="signUp"
        @sign-in="signIn"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

import TabComponent from "@/components/molecules/TabComponent.vue";
import LoginForm from "@/components/organisms/LoginForm.vue";

export default defineComponent({
  name: "Top",
  components: {
    TabComponent,
    LoginForm,
  },
  data() {
    return {
      tabList: [
        {
          id: 1,
          label: "ログイン",
          footerPasswordResendLabel: "パスワードをお忘れの場合はこちら",
        },
        {
          id: 2,
          label: "新規登録",
        },
      ],
      formData: [
        [
          {
            id: 1,
            label: "ID",
            keyName: "id",
            value: "",
            formType: "TextField",
          },
          {
            id: 2,
            label: "パスワード",
            keyName: "password",
            value: "",
            formType: "PassField",
          },
        ],
        [
          {
            id: 1,
            label: "ID",
            keyName: "id",
            value: "",
            formType: "TextField",
          },
          {
            id: 2,
            label: "パスワード",
            keyName: "password",
            value: "",
            formType: "PassField",
          },
        ],
      ],
    };
  },
  computed: {
    selectedTab(): number {
      return (this as any).$store.state.common.selectedTab;
    },
  },
  methods: {
    changeValue(formNumber: number, key: number, value: number): void {
      (this as any).formData[formNumber - 1][key - 1].value = value;
    },
    selectTab(id: number): void {
      (this as any).$store.commit("common/setSelectedTab", id);
    },
    signUp(): void {
      (this as any).$store.dispatch("auth/signUp", {
        id: (this as any).formData[1][0].value,
        password: (this as any).formData[1][1].value,
      });
    },
    signIn(): void {
      (this as any).$store.dispatch("auth/signIn", {
        id: (this as any).formData[0][0].value,
        password: (this as any).formData[0][1].value,
      });
    },
  },
});
</script>

<style lang="scss" scoped>
.top {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  &-wrapper {
    width: 480px;
    .top-title {
      text-align: center;
      font-size: 36px;
      cursor: pointer;
    }
    .tab-wrapper {
      margin: 24px 16px;
    }
  }
}
</style>