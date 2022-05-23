import Vue from "vue"
import myFilter from "@/filters/index.js"; // 引入filter
// 挂载filter到全局filter
for (const key in myFilter) {
  Vue.filter(key, myFilter[key]);
}
