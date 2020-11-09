<template>
  <div class="top">
    <div class="top-wrapper">
      <div class="top-title" @click="transHome">Web App Sample</div>
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

<script>
import firebase from "firebase";

import TabComponent from "@/components/molecules/TabComponent.vue";
import LoginForm from "@/components/organisms/LoginForm.vue";

export default {
  name: "Top",
  components: {
    TabComponent,
    LoginForm,
  },
  data() {
    return {
      selectedTab: 1,
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
  methods: {
    transHome() {
      this.$router.replace("/home");
    },
    changeValue(formNumber, key, value) {
      this.formData[formNumber - 1][key - 1].value = value;
    },
    selectTab(id) {
      this.selectedTab = id;
    },
    signUp() {
      firebase
        .auth()
        .createUserWithEmailAndPassword(
          this.formData[1][0].value,
          this.formData[1][1].value
        )
        .then((user) => {
          console.log(user);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
    signIn() {
      firebase
        .auth()
        .signInWithEmailAndPassword(
          this.formData[0][0].value,
          this.formData[0][1].value
        )
        .then(() => {
          firebase
            .auth()
            .setPersistence(firebase.auth.Auth.Persistence.SESSION);
        })
        .catch((error) => {
          alert(error.message);
        });
    },
  },
};
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