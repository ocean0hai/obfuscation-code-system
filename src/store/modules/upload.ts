import { defineStore } from "pinia";
const uploadStore = defineStore("upload", {
  state: () => {
    return {
      upload: {
        fileName: "",
      },
    };
  },
  actions: {
    changUpload(fileName: string) {
      this.upload.fileName = fileName;
    },
  },
});
export default uploadStore;
