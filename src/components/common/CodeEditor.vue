<template>
  <button @click="copyCode">复制代码</button>
  <codemirror 
    v-model="code" 
    ref="jsonEditor"
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
import { cpp } from "@codemirror/lang-cpp"
import {  ref } from "vue";
import { EditorView } from "@codemirror/view"
import { ElMessage } from "element-plus";

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
const code=ref(``)
const jsonEditor=ref<any>(null) 
// const getCode=computed(())


function getValue(){
  console.log('json',jsonEditor.value) 
}
function copyCode(){
  const inputs=document.createElement('input')
  inputs.value=code.value
  document.body.appendChild(inputs)
  inputs.select()
  ElMessage.success('复制成功！')
  document.execCommand('Copy')
  inputs.remove()
}
// 接受的参数
const props = withDefaults(defineProps<IProps>(), {
    height: '400px'
})
const extensions = [cpp(), myTheme];
const Change = () => {    }
</script>

