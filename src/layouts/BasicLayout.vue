<template>
  <div id="basic-layout">
    <a-layout>
      <a-layout-header>
        <GlobalHeader />
      </a-layout-header>
      <a-layout-content>
        <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
        <!-- <router-view /> -->
      </a-layout-content>
      <a-layout-footer class="bottom-link">
        <a
          href="https://github.com/vueComponent/ant-design-vue"
          target="_blank"
        >
          vue github
        </a>
      </a-layout-footer>
    </a-layout>
  </div>
</template>

<script lang="ts">
import {defineComponent} from "vue";
import GlobalHeader from "@/components/GlobalHeader.vue";
import HelloWorld from "@/components/HelloWorld.vue"; // 直接引入 HelloWorld

export default defineComponent({
  name: "BasicLayout",
  components: {
    GlobalHeader,
    HelloWorld, // 注册 HelloWorld
  },
});
</script>

<style scoped>
#basic-layout .bottom-link {
  background: #efefef;
  text-align: center;
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
}
</style>
