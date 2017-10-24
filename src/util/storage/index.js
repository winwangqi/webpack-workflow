import './storage_polyfill';

const STORAGE = window.localStorage;

export default {
  // 保存数据到 localStorage
  set (key, val) {
    STORAGE.setItem(key, val);
  },
  // 从 localStorage 获取数据
  get (key) {
    return STORAGE.getItem(key);
  },
  // 从 localStorage 删除保存的数据
  remove (key) {
    STORAGE.removeItem(key);
  },
  // 从 localStorage 删除所有保存的数据
  clear() {
    STORAGE.clear();
  }
};