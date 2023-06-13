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
import { api } from '@/api/request';
const router=useRouter()
const data=reactive([
  {
    id:'personal',
    name:"个人中心"
  },
  {
    id:'admin',
    name:'后台管理'
  },
  {
    id:'quit',
    name:"退出"
  }
])
async function handleCommand(item:string){
  if(item==='quit'){
    localStorage.clear()
    router.push({path:'/login'})
  }else if(item==='admin' && await admindetemine()){
    router.push({path:'/admin'})
  }else if(item=='personal'){
    router.push({path:'/personal'})
  }
}
async function admindetemine() {
  const res:any = await api.get('user/identity') 
  if(res?.code===200) return true;
  else {
    return false;
  }
}
</script>

<style  scoped>
</style>