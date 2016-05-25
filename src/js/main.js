/**
 * Created by G.zhen on 2016/5/25.
 */
//var Vue = require('vue');

require("../stylesheet/common-style.styl");

Vue.component('hello-world', require("./components/hello-world/hello-world.vue"));

var appVM = new Vue({
    el: "#app"
  }
);