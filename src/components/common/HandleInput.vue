<script lang="ts" setup>
import { defineProps,watch,computed, ref } from 'vue';
const emits:any=defineEmits()

const props=defineProps<{
    modelValue: String,
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
            <div class="w-56">
                <span class="block text-lg">指定需要添加谓词的函数</span>
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