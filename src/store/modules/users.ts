import { defineStore } from "pinia";
const userStore = defineStore("users", {
  state: () => {
    return {
      upload: {},
    };
  },
  actions: {
    addParmer() {},
  },
});
export default userStore;
