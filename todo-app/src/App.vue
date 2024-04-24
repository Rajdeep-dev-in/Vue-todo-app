<script setup>
import { RouterView } from 'vue-router'
import SideBar from './components/SideBar.vue'
import NavBar from './components/NavBar.vue'
  

const routes = [
  { id: '1', label: 'Dashboard', icon: 'grid_view', path: '/' },
  { id: '2', label: 'AddTask', icon: 'add', path: '/add-task' },
]
</script>

<template>
  <div class="flex overflow-hidden h-screen">
    <SideBar :routes="routes" />
    <div class="relative flex flex-1 flex-col overflow-y-auto  bg-white h-screen">
      <div class=" h-14 shadow-xl shadow-white border-2">
        <NavBar />
      </div>
      <RouterView />
    </div>
  </div>





</template>
