<template>
  <el-row class="tac">
    <el-col :span="12">
      <el-menu
        class="el-menu-vertical"
      >
        <div v-for="(value, key,index) in menudata"  class=""  >
          <el-sub-menu v-if="value instanceof Array" :index="key" :key="index">
            <template #title>
              <el-icon><Icon icon="icon-park:file-protection-one" /></el-icon>
              <span>{{ key }}</span>
            </template>
            <el-menu-item-group>
              <el-menu-item :class="[active===item.url? 'bg-slate-200':null]"  v-for="(item) in value" :index="item.url" :key="item.url" @click="clickMenu(item.url)">
                <span>{{ item.label }}</span>
              </el-menu-item>
            </el-menu-item-group>
          </el-sub-menu>
          <el-menu-item  v-else :class="[active===value.url? 'bg-slate-200':null]" :index="key" :key="key" @click="clickMenu(value.url)">
            <el-icon><Icon :icon="value.icon" /></el-icon>
            <template #title>
              <span>{{ value.label }}</span>
            </template>
          </el-menu-item>
        </div>
      </el-menu>
    </el-col>
  </el-row>
</template>

<script lang="ts" setup>
import { computed, reactive, ref } from 'vue'
import { Icon } from '@iconify/vue';
// import emitter from '../../utils/bus';
import {useRouter} from  'vue-router'
import { useRoute } from "vue-router";
const route = useRoute();
const router=useRouter()

interface routertype{
  label:string,
  url:string,
  icon:string
}
//路由
const menudata=reactive({
  'index':{
    label:"首页",
    url: 'index',
    icon:"material-symbols:home"
  },
  'tigress':[{
    label: "Flatten(扁平化)",
    url: "flatten",
    icon:"icon-park:file-protection-one"
  },
  {
    label: "AddOpaque(不透明谓词)",
    url: "addopaque",
    icon:"icon-park-twotone:file-protection"
  },
  {
    label: "EncodeLiterals(指令替换)",
    url: "encodeliterals",
    icon:"icon-park-solid:file-protection-one"
  }],
  'our':{
    label:"关于我们",
    url:"our",
    icon:"ph:users-light"
  },
  'history':{
    label:"历史记录",
    url:"history",
     icon:"game-icons:histogram"
  },
  'editorcode':{
    label:"在线编辑代码",
    url:'editorcode',
    icon:"arcticons:code-editor"
  }
})

function clickMenu(item:string) {
  router.push({path:"/home/"+item})
}


const active = computed(() => route.name); // 需要使用computed才可以获取，不然会是undefined

</script>

<style>
.el-menu-vertical{
  width: 220px;
  font-size: 10px;
  margin-right: 10px;
}

</style>