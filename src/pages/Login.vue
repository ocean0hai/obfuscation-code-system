<script lang="ts" setup>
import { reactive, ref } from 'vue'
import '@/assets/background.css'
import Form from '@/components/common/Form.vue'
import { formType,objType } from '@/type'
import { ElMessage } from 'element-plus'
import { api } from '@/api/request'
import { useRouter } from 'vue-router'
const router=useRouter()
  // 表单的数据绑定对象
const dataForm=ref<Array<formType>>([
  {
    msg:'账号',
    type:'input',
    key:'username'
  },
  {
    msg:'密码',
    type:'password',
    key:'password'
  }
])

//跳转home
async function submitForm (data:object) {
  const res:any= await api.post('/user/login',{
    ...data
  })
  if(res.code===200){
    console.log(res);
    localStorage.setItem('loginId',res.data.uid)
    localStorage.setItem('token',res.data.token)
    ElMessage.success('登录成功！')
    router.push({path:'home'})
  }else{
    ElMessage.error('用户名或密码错误！')
  }
}
  //跳转到注册
function goRegister(){
  router.push({path:'register'})
}

</script>


<template>
<div class="background mx-1 rounded-sm" > 
  <!-- logo区域 -->
  <div class="w-[600px] absolute top-[50%] left-[50%] translate-x-[-50%]  translate-y-[-50%] flex border p-4">
    <div class=" h-full w-1/3 inline-block">
      <img class="w-full" src="../../public/2.png" alt="" />
    </div>
    <div class="w-1/2 mt-6 h-full inline-block">
      <Form :data="dataForm">
        <template #submit="subData">
           <el-button @click="goRegister">去注册</el-button>
           <el-button @click="submitForm(subData.data)">登录</el-button>
        </template>
      </Form>
    </div>
  </div>
</div>
</template>

<style scoped >

</style>