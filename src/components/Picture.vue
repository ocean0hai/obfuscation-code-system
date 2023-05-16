<template>
    <el-dropdown >
      <div  type="primary" class=" h-full ml-64">
        <div>
          <Icon class="w-full mt-4 h-[50px]" icon="dashicons:admin-users" />
        </div>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item 
          v-for="(item) in data" 
          :key="item.id" 
          @click="handleCommand(item.id)"
          >
          {{ item.name }}
        </el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
</template>

<script lang="ts" setup>
import { reactive } from 'vue';
import { useRouter } from 'vue-router';
import { Icon } from '@iconify/vue';
const router=useRouter()
const data=reactive([
  {
      id:'personal',
      name:"个人中心"
  },
  {
      id:'quit',
      name:"退出"
  }
])
function handleCommand(item:string){
  if(item==='quit'){
    localStorage.clear()
    router.push({path:'/login'})
  }else{
    router.push({path:'/personal'})
  }
}
</script>

<style  scoped>
</style>