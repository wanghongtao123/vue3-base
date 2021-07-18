"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
exports.constantRoutes = void 0;
var vue_router_1 = require("vue-router");
exports.constantRoutes = [
    // {
    //   path: "/login",
    //   component: () => import("@/views/login"),
    //   hidden: true,
    // },
    {
        path: "/403",
        name: "403",
        component: function () { return Promise.resolve().then(function () { return require("@/views/403.vue"); }); }
    },
    {
        path: "/login",
        name: "login",
        component: function () { return Promise.resolve().then(function () { return require("@/views/login/Login.vue"); }); }
    },
];
var Home = function () { return Promise.resolve().then(function () { return require("@/views/home/index"); }); };
var routes = __spreadArrays([
    {
        path: "/",
        name: "Home",
        component: Home
    }
], exports.constantRoutes);
var router = vue_router_1.createRouter({
    history: vue_router_1.createWebHistory(process.env.BASE_URL),
    routes: routes
});
exports["default"] = router;
