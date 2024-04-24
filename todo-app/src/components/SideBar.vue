<script setup>
import {RouterLink} from 'vue-router';
//import HelloWorld from './HelloWorld.vue'
const props = defineProps({
    routes : {
        type: Array,
        required: true,
    }
})
</script>
<template>
    <div class=" flex flex-col gap-y-3 lg:w-72 h-screen bg-white shadow-xl  pl-0 md:w-16 sm:w-10 border-x-2">
      <div class=" lg:px-7  md:px-3  py-4 px-2">
        <h1 class="text-slate-900 text-4xl font-bold px-2">R</h1>
      </div>
      <div class="  text-slate-600 text-xl lg:px-7 lg:py-2 py-2 px-2 md:py-2 md:px-3 font-mono">
        <ul class="flex flex-col gap-y-4">
          <li v-for="(route, index) in routes" :key="index" class=" py-1  rounded-lg">
            <RouterLink 
              :to="{ path: route.path }" 
             class=" flex justify-start items-center gap-x-6 py-2 px-2 lg:rounded-lg rounded-full border-x-0">
              <span class="material-icons">{{ route.icon }}</span> <span class="hidden lg:block"> {{ route.label }} </span>
            </RouterLink>
          </li>
        </ul>
      </div>
    </div>
</template>
<style>
  .router-link-exact-active{
    background-color: #696CFF29;
    color: rgb(105, 108, 255);
  }
</style>