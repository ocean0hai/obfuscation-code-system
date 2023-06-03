<script lang="ts" setup>
import Table from '@/components/admin/Table.vue';
import { ref,onMounted,getCurrentInstance } from 'vue';
import AdminDialog from '@/components/admin/AdminDialog.vue';
import Search from '@/components/common/Search.vue';
import { userType } from '@/type/table';
import { api } from '@/api/request';
import { objType,formType } from '@/type';
import AdminForm from '@/components/admin/AdminForm.vue';
import { getUserDate } from '@/hooks/getUser';
const columns=ref([
  {
    key:'id',
    label:'id',
    dataIndex:'id'
  },
  {
    key:'username',
    label:'账号',
    dataIndex:'username'
  },
  {
    key:'phone',
    label:'电话',
    dataIndex:'phone'
  },
  {
    key:'password',
    label:'密码',
    dataIndex:'password'
  },
  {
    key:'email',
    label:'邮箱',
    dataIndex:'email'
  },
  {
    key:'state',
    label:'是否禁止',
    dataIndex:'state'
  }
])
const {
  getData,
  datatotal,
  deleteData,
  searchData,
  data,
  handleCurrent,
  putUser,
  userobj
}=getUserDate('/user/page')

const childRef:any=ref(null)
//初始化数据
onMounted(()=>{
  getData()
})


async function submitForm(data:objType){
  console.log(data);
  childRef.Colse()
}
function inputP(str:string){
  const arr=['id','state','createTime','updateTime','status']
  return arr.includes(str)
}
function inputValue(key:string,value:string){
  userobj.value[key]=value
}

</script>

<template>
  <div>
    <!-- 搜索按钮 -->
    <div>
      <div class="w-full h-12">
        <div class="w-1/3 float-right mr-2">
          <Search text="请输入用户id" @onChange="searchData" />
        </div>
      </div>
    </div>
     <Table :columns="columns" :data="data">
        <template #operation="{item}">
          <div class="w-32 flex">
            <AdminDialog ref="childRef">
              <template #button>
                修改 
              </template>

              <template #customize>
                <div class="w-full " v-for="(value,key) in item " :label="key">
                  <el-form-item v-if="!inputP(key+'')"  :label="key" >
                    <!-- 普通的输入框 -->
                      <input
                        class="input w-full input-bordered h-8" 
                        :value="userobj[key]"
                        @blur="inputValue(key+'', ($event.target as HTMLInputElement).value)"
                        autocomplete="off" />  
                  </el-form-item> 
                </div>
                  <div class="w-16 mx-auto">
                    <button class="btn" @click="putUser">确定</button> 
                  </div>
              </template>
            </AdminDialog>
            <button class="btn mx-2 " @click="deleteData(item.id)">删除</button>        
          </div>
        </template> 
     </Table>
    <div class="w-full mt-10">
      <div class=" w-96 mx-auto ">
        <el-pagination 
        class="w-full" 
        @current-change="handleCurrent"
        :page-size="10"
        background 
        layout="prev, pager, next" 
        :total="datatotal" />
      </div>
    </div>
  </div>
</template>


