<template>
  <div class="login">
    <div class="login__card">
      <el-input placeholder=""></el-input>
      <el-input></el-input>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";

// components
import { Input } from "ant-design-vue";

export default defineComponent({
  components: {
    "el-input": Input,
  },
  name: "Login",
});
</script>
<style lang="less">
.login {
  display: flex;

  flex-direction: col;
  align-items: center;
  opacity: 1;
  background-image: radial-gradient(
    farthest-corner at 10px 10px,
    #1890ff 0%,
    #10239e 100%
  );
  height: 100vh;
  &__card {
    margin: 0 auto;
    background: linear-gradient(to bottom, #fff 0%, rgba(0, 0, 0, 0.6) 100%);
    transition: opacity 0.1s,
      transform 0.3s cubic-bezier(0.17, -0.65, 0.665, 1.25);
    border-radius: 4px;
    opacity: 0.8;

    display: flex;
    flex-direction: column;
  }
}
</style>
