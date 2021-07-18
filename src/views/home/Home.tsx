import { defineComponent } from "@vue/runtime-core";

import "./index.less";

// components
import Navigation from "@/components/navigation/index.vue";

export default defineComponent({
  name: "Home",
  components: {
    Navigation,
  },
  setup() {
    const renderHeader = () => (
      <header>
        <navigation></navigation>
      </header>
    );
    const renderBanner = () => (
      <div class="banner">
        <div class="banner__wapper">
          <div class="banner__left">
            <h1 class="banner__title">个人网站</h1>
            <p>
              WHT的门户网站,{" "}
              <span style="font-size: 24px; line-height: 32px">分享</span>、{" "}
              <span style="font-size: 24px; line-height: 32px">日志</span>。
            </p>
          </div>
          <div class="banner__right"></div>
        </div>
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
