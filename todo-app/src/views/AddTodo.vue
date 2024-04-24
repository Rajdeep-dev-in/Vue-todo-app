<script setup>
import {ref} from 'vue'
import BaseBtn from '@/components/BaseBtn.vue';
import BaseToast from '@/components/BaseToast.vue';
import { useTodoStore } from '@/stores/todo';
const todoType = ref('')
const selectStatus = ref('')
const todoStore = useTodoStore()
const notification = ref(null)

function addTask(){
    const data = {
        id: Date.now(),
        tasks: todoType.value,
        status: selectStatus.value
    }
    todoStore.addTodo(data)
    todoType.value = ""
    selectStatus.value = ""
}

function clearForm(){
    todoType.value = ""
    selectStatus.value = ""
}
</script>
<template>
    <div class=" px-4 py-4 relative h-full">
        <div class=" flex justify-center items-center">
            <h1 class=" text-4xl "> Create Tasks Here</h1>
        </div>
        <div class="w-full h-1 bg-slate-800 my-2"></div>
        <div class="w-full flex justify-center items-center p-5">
            <div class="w-[600px] h-64 bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r p-5">
                <form @submit.prevent="addTask" class="flex flex-col justify-center gap-y-4">
                    <input type="text" id="todo-text" class=" px-4 py-3 outline-none rounded-lg" v-model="todoType" placeholder="Enter Task Here..." />
                    <select v-model="selectStatus" class="px-4 py-3 text-slate-600 rounded-lg" >
                        <option disabled selected value="">Please Select a Status...</option>
                        <option value="In progress">In progress</option>
                        <option value="Not Started">Not Started</option>
                        <option value="Finished">Finished</option>
                    </select>
                    <div class=" flex justify-center items-center gap-x-2">
                        <BaseBtn class=" flex-1 bg-white text-black" btnText="Clear" @clearForm="clearForm" />
                        <BaseBtn class="flex-1" btnText="Add Task"/>
                    </div>        
                </form>
            </div>
        </div>
        <div v-if="todoStore.notification" class="absolute top-2 right-2 z-20 overflow-auto ">
            <BaseToast class="bg-green-500" :notification="todoStore.notification" />
        </div>
        
    </div>
    
</template>