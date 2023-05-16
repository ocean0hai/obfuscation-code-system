<script lang="ts" setup>
import { ref } from 'vue';
import {submitDataType} from '@/type'
import{submitParameter} from '@/api/upload'
import HandleInput from '../common/HandleInput.vue';
import Button from '../common/Button.vue';
import { uploadStore } from "@/store";
import { storeToRefs } from "pinia";
const store=uploadStore()
const {upload}=storeToRefs(store)
// const Value=ref([
//     {
//         value:'list',
//         label:'list=使用链表生成不透明表达式'
//     },
//     {
//         value:'array',
//         label:'array=使用数组生成不透明表达式'
//     },
//     {
//         value:'input',
//         label:'input=生成依赖于输入的不透明表达式'
//     },
//     {
//         value:'env',
//         label:'env=从嫡生成不透明表达式'
//     },
//     {
//         value:'*',
//         label:'*=与列表，数组，输入，环境相同'
//     }
// ])

const name=ref('main')

const InitOpaqueStructs=ref('list')
const Value1=ref([
    {
        value:'list',
        label:'list'
    },
    {
        value:'array',
        label:'array'
    },
    {
        value:'input',
        label:'input'
    },
    {
        value:'env',
        label:'env'
    },
    {
        value:'*',
        label:'*'
    }
])

const InitOpaqueCounts=ref(1)

const AddOpaqueKinds=ref('call')
const Value2=ref([
    {
        value:'call',
        label:'list=使用链表生成不透明表达式'
    },
    {
        value:'bug',
        label:'array=使用数组生成不透明表达式'
    },
    {
        value:'true',
        label:'input=生成依赖于输入的不透明表达式'
    }
])

const AddOpaqueCount=ref(1)

const AddOpaqueStructs=ref('list')
const Value3=ref([
    {
        value:'list',
        label:'list'
    },
    {
        value:'array',
        label:'array'
    },
    {
        value:'input',
        label:'input'
    },
    {
        value:'env',
        label:'env'
    },
    {
        value:'*',
        label:'*'
    }
])

function submitHandle(){
  const subArr=[
    name.value,
    '3',
    InitOpaqueStructs.value,
    InitOpaqueCounts.value+'',
    AddOpaqueKinds.value,
    AddOpaqueCount.value+'',
    AddOpaqueStructs.value
  ]
  console.log(subArr);
  
  submitParameter(subArr)
}

</script>

<template>
  <div>
    <HandleInput v-model="name"></HandleInput>
    <h1>参数选择</h1>
    <div >
        <div>
            -Transform=lnitOpaqueStructs:
            <el-select v-model="InitOpaqueStructs">
                <el-option 
                v-for="item in Value1"
                :key="item.value"
                :label="item.value"
                :value="item.value"
                />
            </el-select>
            <span class="block text-red-400 text-sm">*选择不透明表达式的生成方式</span>
        </div>
        <div>
            --Transform=InitOpaqueCounts
            <el-input-number v-model="InitOpaqueCounts" :min="1" :max="100" /> 
            <span class="block text-red-400 text-sm">*初始化不透明谓词的数目,默认值为1</span>
        </div>
        <div>
            --Transform=AddOpaqueKinds:
            <el-select v-model="AddOpaqueKinds">
                <el-option 
                v-for="item in Value2"
                :key="item.value"
                :label="item.value"
                :value="item.value"
                />
            </el-select>
            <span class="block text-red-400 text-sm">*选择需要添加的不透明谓词类型</span>
        </div>
        <div>
            --Transform=AddOpaqueCount:
            <el-input-number v-model="AddOpaqueCount" :min="1" :max="100" /> 
            <span class="block text-red-400 text-sm">*需要添加的不透明谓词的数目,默认值为1</span>
        </div>
        <div>
            --Transform=AddOpaqueStructs:
            <el-select v-model="AddOpaqueStructs">
                <el-option 
                v-for="item in Value3"
                :key="item.value"
                :label="item.value"
                :value="item.value"
                />
            </el-select>
            <span class="block text-red-400 text-sm">*选择需要添加的不透明谓词结构</span>
        </div>
    </div>
    <div class=" w-full">
      <Button @click="submitHandle" class="float-right"></Button>
    </div>
  </div>
</template>

<style scoped >

</style>