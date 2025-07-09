<template>
  <div id="globalHeader">
    <a-row class="header-row">
      <a-col flex="200px">
        <div class="little-bar">
          <img class="logo" src="../assets/logo.png" alt="logo" />
          <div class="title">我的用户中心</div>
        </div>
      </a-col>

      <a-col flex="auto">
        <a-menu
          v-model:selectedKeys="current"
          mode="horizontal"
          :items="items"
          class="header-menu"
          @click="doMenuClick"
        />
      </a-col>

      <a-col flex="80px">
        <div class="user-login-status">
          <a-button href="./user/login" type="primary" class="login-button"
            >登录</a-button
          >
        </div>
      </a-col>
    </a-row>
  </div>
</template>

<script lang="ts" setup>
/* eslint-disable */
import {h, ref} from "vue";
import {HomeOutlined, CrownOutlined} from "@ant-design/icons-vue";
import {MenuProps} from "ant-design-vue";
import {useRouter} from "vue-router";

const router = useRouter();

const doMenuClick = ({ key }: { key: string }) => {
  router.push({
    path: key,
  });
};

const current = ref<string[]>(["/"]);
const items = ref<MenuProps["items"]>([
  {
    key: "/",
    icon: () => h(HomeOutlined),
    label: "主页",
    title: "主页",
  },
  {
    key: "/user/login",
    label: "用户登录",
    title: "用户登录",
  },
  {
    key: "/user/userManage",
    icon: () => h(CrownOutlined),
    label: "用户管理",
    title: "用户管理",
  },
  {
    key: "other",
    label: h("a", {href: "https://antdv.com", target: "_blank"}, "编程导航"),
    title: "编程导航",
  },
]);
</script>

<style scoped>
#globalHeader {
  background-color: #001529; /* Ant Design 深色主题色 */
  color: white;
  width: 100%;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
  height: 64px;
  display: flex;
  align-items: center;
}

.header-row {
  background-color: #001529 !important;
  width: 100%;
}

.little-bar {
  display: flex;
  align-items: center;
  padding-left: 16px;
}

.title {
  color: white;
  font-size: 20px;
  font-weight: 500;
  margin-left: 12px;
}

.logo {
  width: 45px;
  height: 45px;
  /* 移除了滤镜，保留logo原始样式 */
}

.header-menu {
  background-color: #001529 !important;
  color: white !important;
  border-bottom: none !important;
  height: 64px;
  display: flex;
  align-items: center;
}

:deep(.header-menu .ant-menu-item) {
  color: rgba(255, 255, 255, 0.85) !important;
  font-size: 14px;
  margin-right: 16px;
  height: 64px;
  line-height: 64px;
  transition: all 0.3s;
  position: relative;
}

:deep(.header-menu .ant-menu-item::after) {
  content: "";
  position: absolute;
  width: 0;
  height: 2px;
  bottom: 0;
  left: 0;
  background-color: #1890ff;
  transition: width 0.3s;
}

:deep(.header-menu .ant-menu-item:hover::after) {
  width: 100%;
}

:deep(.header-menu .ant-menu-item-selected) {
  color: white !important;
  background-color: rgba(255, 255, 255, 0.08) !important;
}

:deep(.header-menu .ant-menu-item-selected::after) {
  width: 100% !important;
  background-color: #1890ff !important;
}

:deep(.header-menu .ant-menu-item:hover) {
  color: white !important;
  background-color: rgba(255, 255, 255, 0.08) !important;
}

/* 登录按钮样式 */
.login-button {
  background-color: transparent !important;
  color: white !important;
  border-color: rgba(255, 255, 255, 0.3) !important;
  height: 36px;
  border-radius: 4px;
  margin-right: 16px;
  transition: all 0.3s;
}

.login-button:hover {
  background-color: rgba(255, 255, 255, 0.1) !important;
  border-color: rgba(255, 255, 255, 0.6) !important;
  transform: translateY(-1px);
}

.login-button:active {
  transform: translateY(0);
}
</style>
