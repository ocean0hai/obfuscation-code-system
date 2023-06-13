<script lang="ts" setup>
import { ref } from 'vue';
import { ElMessage } from 'element-plus';
import { RouterLink, useRouter } from 'vue-router';
import {objType} from '@/type/index'
import { api } from '@/api/request';

const router=useRouter()
const formdata=ref<objType>({
  username:'',
  password:'',
  phone:'',
  email:''
})

async function submitData() {
  let state=true
  const obj:objType={}
  Object.keys(formdata.value).map((item)=>{
    if(formdata.value[item]===''){
      ElMessage.warning('请输入填信息！！')
      return ;
    } 
    obj[item]=formdata.value[item]
    formdata.value[item]=''
  })
  
  const res:any= await api.post('/user/register',{
    ...obj
  })
  if (res?.code ===200) {
    ElMessage.success('注册成功！！')
  }else {
    ElMessage.error('注册失败！！')
  }
}


</script>

<template>
  <div class="background mx-1 rounded-sm">
    <div class="w-[300px] absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] flex border p-4">
      <div class="w-full h-full inline-block">
        <div class=" text-center text-3xl font-semibold">
          注册
        </div>
        <!-- <From :data="dataForm"> 
          <template #submit="subData">
            <RouterLink to="login" class="btn w-16" >去登录</RouterLink>
            <button class="btn w-24" @click="submitData(subData.data)">注册</button>
          </template>
        </From> --> 
          <table class="text-center my-7 text-xl">
            <tr class="">
              <td>username</td>
              <td><el-input v-model="formdata.username"></el-input></td>
            </tr>
            <tr class="my-3">
              <td>password</td>
              <td><el-input v-model="formdata.password" type="password"></el-input></td>
            </tr>
            <tr>
              <td>phone</td>
              <td><el-input v-model="formdata.phone"></el-input></td>
            </tr>
            <tr>
              <td>email</td>
              <td><el-input v-model="formdata.email"></el-input></td>
            </tr>
          </table>   
          <div class="my-8 flex justify-evenly"> 
           <RouterLink to="login" class="btn w-16" >去登录</RouterLink>
            <button class="btn w-24" @click="submitData">注册</button>
          </div>
      </div>
    </div>
  </div>
</template>












