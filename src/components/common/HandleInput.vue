<script lang="ts" setup>
import { defineProps,computed } from 'vue';
const emits:any=defineEmits()

const props=defineProps<{
    modelValue: String,
    name:string
}>()

const proxy=computed({
  get() {
      return props.modelValue
    },
    set(value) {
      emits('update:modelValue', value)
    }
})

</script>

<template>
    <div >
        <h1>
          参数选择
        </h1>
        <div class="flex">
            <div class="mr-2">
                <span class="block text-lg">{{ props.name }}</span>
                <span class=" text-red-500">*默认为main(主函数) </span>
            </div>
            <div class="w-36">
                <el-input  
                class="w-36"
                v-model="proxy"
                />
            </div>

        </div>
    </div>
</template>

<style scoped >

</style>