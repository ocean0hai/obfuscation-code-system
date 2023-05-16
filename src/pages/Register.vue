<script lang="ts" setup>
import { reactive,ref } from 'vue';
import Form from '@/components/common/Form.vue';
import { ElMessage } from 'element-plus';
import { RouterLink, useRouter } from 'vue-router';
import {formType,objType} from '@/type/index'
import { api } from '@/api/request';

const router=useRouter()


const dataForm=ref<Array<formType>>([
  {
    msg:'*账号',
    type:'input',
    key:'username'
  },
  {
    msg:'*密码',
    type:'password',
    key:'password'
  },
  {
    msg:'*号码',
    type:'input',
    key:'phone',
  },
  {
    msg:'*email',
    type:'input',
    key:'email'
  }
])


async function submitData() {
  let state=true
  const obj:objType={}
  Object.keys(formdata.value).map((item)=>{
    console.log(formdata.value[item]);
    if(formdata.value[item]===''){
      state=false
    } 
    obj[item]=formdata.value[item]
  })
  if(state===true){
  const res:any= await api.post('/user/register',{
    ...obj
  })
  console.log(res);
  
  if (res.code==200) {
    ElMessage.success('注册成功！')
  }else{
    ElMessage.warning('该用户名已存在！！')
  }
}
  else{
    ElMessage.warning('请填入必要信息')
  }
  
}
const formdata=ref<objType>({
  username:'',
  password:'',
  phone:'',
  email:''
})

</script>

<template>
  <div>
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












