<template>
  <el-container id="main-app">
    <el-aside width="auto">
      <Menu></Menu>
    </el-aside>
    <el-container>
      <el-header hidden></el-header>
      <el-main>
        <router-view v-show="$route.name"></router-view>
        <section v-show="!$route.name" id="micro-app"></section>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Menu from "./components/layout/Menu.vue"; 

@Options({
  components: {
    Menu,
  },
})
export default class App extends Vue {}
</script>
<style scoped lang="scss">
#main-app {
  height: 100%;
}
</style>
