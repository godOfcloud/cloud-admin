<template>
  <div class="nav">
    <el-menu
      @open="handleOpen"
      @close="handleClose"
      :collapse="isCollapse"
      @select="selectMenu"
    >
      <el-menu-item index="vue">
        <i class="el-icon-menu"></i>
        <slot name="title">预测</slot>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from "vue";
import { useRouter } from "vue-router";
export default defineComponent({
  name: "Menu",
  componentName: "Menu",
  props: {
    index: {
      default: null,
      validator: (val) => typeof val === "string" || val === null,
    },
    route: [String, Object],
    disabled: Boolean,
  },
  emits: ["click"],
  setup() {
    const router = useRouter();
    const isCollapse = computed(() => {
      return false;
    });
    const handleOpen = (key: string, keyPath: string) => {
      console.log(key, keyPath);
    };
    const handleClose = (key: string, keyPath: string) => {
      console.log(key, keyPath);
    };
    const selectMenu = (index: string) => {
      router.push({
        path: index,
      });
    };
    return {
      isCollapse,
      handleOpen,
      handleClose,
      selectMenu,
    };
  },
});
</script>
<style lang="scss" scoped>
.nav {
  height: 100%;
  background: #3c3f4d;
  box-shadow: 2px 0 8px 0 rgba(0, 0, 0, 0.1);
}
</style>
