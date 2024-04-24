<script setup>
import { useTodoStore } from '@/stores/todo';
const todoStore = useTodoStore()

const props = defineProps({
    notification: {
        type: String,
    }
})

function closeNotify(){
    todoStore.notification = null
}
</script>
<template>
    <div class="text-white w-64 px-2 py-2 h-auto rounded-lg shadow-lg shadow-white flex justify-center items-center gap-x-2">  
        <div>
            <span class="material-icons">
                check_circle
            </span>
        </div>
        <div class=" flex-1">
            <p>{{notification}}</p>
        </div>
        <div>
            <span class="material-icons text-base cursor-pointer" @click="closeNotify">
                close
            </span>
        </div>
    </div>
</template>