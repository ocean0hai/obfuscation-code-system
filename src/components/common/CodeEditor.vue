<template>
  <codemirror v-model="code" 
    placeholder="Code gose here..." 
    :style="{ height: '100%' }" 
    :autofocus="true"
    :tabSize="2" 
    :index-with-tab="true"
    :extensions="extensions"
    />
</template>
<script lang="ts" setup>
import { Codemirror } from "vue-codemirror";
import { oneDark } from "@codemirror/theme-one-dark";
import { cpp } from "@codemirror/lang-cpp"
import { ref } from "vue";
import { EditorView } from "@codemirror/view"

let myTheme = EditorView.theme({
  // 输入的字体颜色
  "&": {
      color: "#0052D9",
      backgroundColor: "#FFFFFF"
  },
  ".cm-content": {
      caretColor: "#0052D9",
  },
  // 激活背景色
  ".cm-activeLine": {
      backgroundColor: "#FAFAFA"
  },
  // 激活序列的背景色
  ".cm-activeLineGutter": {
      backgroundColor: "#FAFAFA"
  },
  //光标的颜色
  "&.cm-focused .cm-cursor": {
      borderLeftColor: "#0052D9"
  },
  // 选中的状态
  "&.cm-focused .cm-selectionBackground, ::selection": {
      backgroundColor: "#0052D9",
      color:'#FFFFFF'
  },
  // 左侧侧边栏的颜色
  ".cm-gutters": {
      backgroundColor: "#FFFFFF",
      color: "#ddd", //侧边栏文字颜色
      border: "none"
  }
}, { dark: true })
interface IProps {
    height?: string,
}
// 接受的参数
const props = withDefaults(defineProps<IProps>(), {
    height: '400px'
})
const code = ref(``);
const extensions = [cpp(), myTheme];
const Change = () => {    }
</script>
