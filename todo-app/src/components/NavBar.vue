<script setup>
import {ref} from 'vue'
import { useTodoStore } from '@/stores/todo';
const todoStore = useTodoStore()


</script>
<template>
    <div class="flex justify-center items-center px-4 py-2">
        <div class="flex-1 flex justify-center items-center ">
            <h3 class=" font-bold text-xl">Manage-Tasks</h3>
        </div>
        <div class="flex justify-center items-center gap-x-3">
            <div class=" w-8 h-8">
                <img src="https://images.pexels.com/photos/4307869/pexels-photo-4307869.jpeg?auto=compress&cs=tinysrgb&w=600" alt="A_Man" class="w-full h-full rounded-full" />
            </div>
            <div>
                <span class="material-icons">
                    settings
                </span>
            </div>
        </div>
    </div>
</template>