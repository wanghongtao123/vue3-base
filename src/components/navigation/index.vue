<template>
  <div class="navigation">
    <div>
      <a style="padding: 16pxs">HOME</a>
    </div>
    <div>
      <a style="padding: 16pxs">ARTICLES</a>
    </div>
  </div>
</template>
<script lang="ts">
import { defineComponent } from "vue";
import "./index.less";

export default defineComponent({
  name: "Navigation",
  data() {
    return {};
  },
});
</script>
