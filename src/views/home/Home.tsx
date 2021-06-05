import { defineComponent } from "@vue/runtime-core";

import "./index.less";

export default defineComponent({
  name: "Home",
  setup() {
    const renderHeader = () => <header></header>;

    const renderBanner = () => (
      <div class="banner">
        <div class="banner__left">
          <h1>个人网站</h1>
          <p>个人前端网站定义, 个人前端网站定义, 个人前端网站定义</p>
        </div>
        <div class="banner__right"></div>
      </div>
    );

    const renderMain = () => (
      <main>
        <div class="home-main">{renderBanner()}</div>
      </main>
    );

    return () => [renderHeader(), renderMain()];
  },
});
