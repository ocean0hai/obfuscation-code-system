<script lang="ts" setup>
import { ref } from 'vue';
import{submitParameter} from '@/api/upload'
import HandleInput from '../common/HandleInput.vue';
import Button from '../common/Button.vue';

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
const AddOpaqueKinds=ref(true)
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
  const subArr:Array<any>=[
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
    <HandleInput name="指定需要不透明谓词函数" v-model="name"></HandleInput>
    <div class="mt-10">
        <div class="my-5">
            -Transform=lnitOpaqueStructs:
            <el-select v-model="InitOpaqueStructs">
                <el-option 
                v-for="item in Value1"
                :key="item.value"
                :label="item.value"
                :value="item.value"
                />
            </el-select>
        </div>
        <div class="my-5">
            --Transform=InitOpaqueCounts
            <el-input-number v-model="InitOpaqueCounts" :min="1" :max="100" /> 
        </div>
        <div class="my-5">
            --Transform=AddOpaqueKinds:
            <input type="checkbox" v-model="AddOpaqueKinds" checked >
        </div>
        <div class="my-5">
            --Transform=AddOpaqueCount:
            <el-input-number v-model="AddOpaqueCount" :min="1" :max="100" /> 
        </div>
        <div class="my-5">
            --Transform=AddOpaqueStructs:
            <el-select v-model="AddOpaqueStructs">
                <el-option 
                v-for="item in Value3"
                :key="item.value"
                :label="item.value"
                :value="item.value"
                />
            </el-select>
        </div>
    </div>
    <div class=" w-full h-16">
      <Button @click="submitHandle" class="float-right"></Button>
    </div>
  </div>
</template>

<style scoped >

</style>