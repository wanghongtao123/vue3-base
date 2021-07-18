<template>
  <div class="forbidden">
    <h1 class="forbidden__h1">403</h1>
    <div class="forbidden__content">
      <ul>
        <li>
          <p class="forbidden__p">
            <span>ERROR CODE</span>: "<i>HTTP 403 Forbidden</i>"
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
export default defineComponent({
  name: "Forbidden",
  content: [],
});
</script>
<style lang="less" scoped>
@import "@/style/var.less";

.forbidden {
  background-image: linear-gradient(120deg, @blue 0%, #000000 100%);
  height: 100vh;
  &__h1 {
    position: fixed;
    top: 50%;
    margin: 0px;
    font-size: 45vw;
    width: 100vw;
    z-index: 1;
    color: #f5f5f5;
    transform: translateY(-50%);
    text-shadow: 0 0 50px rgba(0, 0, 0, 0.07);
  }

  &__content {
    background: rgba(0, 0, 0, 0);
    width: 70vw;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    margin: 0 auto;
    padding: 32px 32px 16px;
    box-shadow: 0 0 150px -20px rgba(0, 0, 0, 0.5);
    z-index: 3;
  }

  &__p {
    color: #f5f5f5;
    margin: 0 0 20px;
    font-size: 17px;
    line-height: 1.2;
  }
}
</style>
