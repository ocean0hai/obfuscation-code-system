<script lang="ts" setup>
import { reactive, computed} from 'vue';
import { Icon } from '@iconify/vue';
import { useRouter,useRoute } from 'vue-router';
const route=useRoute()
 const router=useRouter()
const menuArr=reactive([
  {
    label:"用户管理",
    url:"usermanagement",
    icon:"mdi:user-circle-outline"
  },
  {
    label:"文件管理",
    url:"filemanagement",
    icon:"ic:baseline-insert-drive-file"
  } 
])

function clickMenu(url:string){
  router.push({path:'/admin/'+url})
}

const active = computed(() => route.name); // 需要使用computed才可以获取，不然会是undefined

</script>

<template>
  <div class="w-[1200px] mx-auto">
    <div class="flex">
      <Icon @click="$router.push('/home/index')" class="w-16 h-20" icon="icon-park-solid:back" />
      <h2  class=" w-[1200px] text-center ">后台管理</h2>
    </div>
    <div class="w-full flex">
      <!-- 导航 -->
      <div class="w-[200px]">
      <div 
        v-for="(value,index) in menuArr"
        :key="index"
        :class="[active===value.url ? 'text-blue-300':null]"
        @click="clickMenu(value.url)"
        class="w-full h-16 hover:bg-slate-100 flow-root my-3">
        <div class="text-2xl  mt-3 ml-4">
          <Icon class="align-middle w-10 h-10" :icon="value.icon"></Icon>
          {{ value.label }}
        </div>
        </div>
      </div>
      <div class="shadow-lg w-[1000px] mt-2 mr-2">
        <router-view></router-view>  
      </div>
    </div>
  </div>
</template>

<style scoped >

</style>