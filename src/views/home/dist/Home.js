"use strict";
exports.__esModule = true;
var runtime_core_1 = require("@vue/runtime-core");
require("./index.less");
// components
var index_vue_1 = require("@/components/navigation/index.vue");
exports["default"] = runtime_core_1.defineComponent({
    name: "Home",
    components: {
        Navigation: index_vue_1["default"]
    },
    setup: function () {
        var renderHeader = function () { return (React.createElement("header", null,
            React.createElement("navigation", null))); };
        var renderBanner = function () { return (React.createElement("div", { "class": "banner" },
            React.createElement("div", { "class": "banner__wapper" },
                React.createElement("div", { "class": "banner__left" },
                    React.createElement("h1", { "class": "banner__title" }, "\u4E2A\u4EBA\u7F51\u7AD9"),
                    React.createElement("p", null,
                        "WHT\u7684\u95E8\u6237\u7F51\u7AD9,",
                        " ",
                        React.createElement("span", { style: "font-size: 24px; line-height: 32px" }, "\u5206\u4EAB"),
                        "\u3001",
                        " ",
                        React.createElement("span", { style: "font-size: 24px; line-height: 32px" }, "\u65E5\u5FD7"),
                        "\u3002")),
                React.createElement("div", { "class": "banner__right" })))); };
        var renderMain = function () { return (React.createElement("main", null,
            React.createElement("div", { "class": "home-main" }, renderBanner()))); };
        return function () { return [renderHeader(), renderMain()]; };
    }
});
