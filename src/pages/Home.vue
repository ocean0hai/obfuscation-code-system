<script lang="ts" setup>
import Header from '@/components/Header.vue';
import Menuside from '@/components/Menuside.vue';
</script>

<template>
  <div class="w-full">
    <Header/>
    <div class="flex w-[1200px] mx-auto">
      <Menuside />  
      <div class="shadow-lg w-[1000px] mt-2 mr-2">
        <router-view></router-view>        
      </div>
    </div>
  </div>
</template>

<style scoped >

</style>