<template>
  <!--具名插槽-->
  <div>
    <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#642804"
            text-color="#fff"
            active-text-color="#ffd04b">
      <el-menu-item index="1">水滴</el-menu-item>
      <el-menu-item index="2"><a href="https://www.ele.me" target="_blank">请登录</a></el-menu-item>
      <el-menu-item index="3"><a href="https://www.ele.me" target="_blank">免费注册</a></el-menu-item>
      <el-menu-item index="4"><a href="https://www.ele.me" target="_blank">个人中心</a></el-menu-item>
      <el-submenu index="5">
        <template slot="title">订单管理</template>
        <el-menu-item index="5-1">接收的订单</el-menu-item>
        <el-menu-item index="5-2">发布的订单</el-menu-item>
      </el-submenu>
      <el-menu-item index="6">消息中心</el-menu-item>

    </el-menu>
  </div>
</template>

<script>
  export default {
    name: 'NavBar',
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
  }
</script>

<style scoped>

</style>