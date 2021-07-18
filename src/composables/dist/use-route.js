"use strict";
exports.__esModule = true;
exports.useRoute = exports.route = exports.routeProps = void 0;
/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
/**
 * Vue Router support
 */
var vue_1 = require("vue");
exports.routeProps = {
    to: [String, Object],
    url: String,
    replace: Boolean
};
function route(vm) {
    var router = vm.$router;
    var to = vm.to, url = vm.url, replace = vm.replace;
    if (to && router) {
        router[replace ? "replace" : "push"](to);
    }
    else if (url) {
        replace ? location.replace(url) : (location.href = url);
    }
}
exports.route = route;
function useRoute() {
    var _a;
    var vm = (_a = vue_1.getCurrentInstance()) === null || _a === void 0 ? void 0 : _a.proxy;
    return function () {
        route(vm);
    };
}
exports.useRoute = useRoute;
