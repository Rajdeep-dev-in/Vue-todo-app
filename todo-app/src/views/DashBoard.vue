<script setup>
import BaseTable from '@/components/BaseTable.vue';
import { useTodoStore } from '@/stores/todo';
import {onMounted, ref, computed} from 'vue'
import BaseBtn from '@/components/BaseBtn.vue';
import BaseToast from '@/components/BaseToast.vue'


const OpenModal = ref(false)
const todoStore = useTodoStore()
const tasksObj = ref()
const positiveMsg = ref(false)
const filterTasks = ref('all')
const searchTasks = ref('')

function showModal(data){
    console.log(data, 'Parent component');
    tasksObj.value = data
    console.log(tasksObj.value);
    OpenModal.value = true

}

 function updateTask(){
    console.log('hello');
    positiveMsg.value = true
    const data = tasksObj.value
    todoStore.addTodo(data)
    OpenModal.value = false
    setTimeout(() => {
        positiveMsg.value = false
    }, 3000)
    

}

const filterTaskLists = computed(() => {
    return todoStore.todos.filter((item) => {
        const filterList = item.tasks.toLowerCase().includes(searchTasks.value.toLowerCase())
        const storeList = filterTasks.value.toLowerCase() === 'all' || item.status.toLowerCase().includes(filterTasks.value.toLowerCase())
        return storeList && filterList
    })
})


</script>
<template>
    <div class=" px-4 py-4 relative h-full">
        <div class=" flex flex-col justify-start gap-y-3 md:flex-row md:justify-between md:px-6  px-3 py-3">
            <div class=" w-52 h-8">
                <input v-model="searchTasks" placeholder="Search..." class="w-full h-full px-2 py-2 border-2" />
            </div>
            <div class=" flex justify-center items-center gap-x-2 w-52 h-10">
                <span class="material-icons px-1 py-1 cursor-pointer">
                    filter_alt
                </span>
                <select v-model="filterTasks" class=" text-black px-3 border-2 w-full h-full">
                    <option value="all">All</option>
                    <option value="In progress">In progress</option>
                    <option value="Not Started">Not Started</option>
                    <option value="Finished">Finished</option>
                </select>            
            </div> 
        </div>
        <div class="w-full h-1 bg-slate-800 my-2"></div>
        <div class="w-full px-4 py-4 bg-orange-200 rounded-lg">
            <div v-if="todoStore.todos.length" class="w-full px-2 py-2 bg-white shadow-2xl rounded-md">
                <BaseTable :todos="filterTaskLists" @showModal="showModal"/>
            </div>
        
            <div v-else class="flex justify-center items-center py-20">
                <h1 class=" text-4xl ">No Data</h1>
            </div>
        </div>

        <div v-if="OpenModal" class=" fixed inset-0 z-50 overflow-y-auto bg-gradient-to-b from-gray-900 to-gray-600 bg-gradient-to-r bg-opacity-75 transition-opacity duration-300 ease-in-out w-[260x] md:w-[450px] lg:w-[600px] h-[280px] left-16 md:left-32 lg:left-80 rounded-lg shadow-lg shadow-white top-40">
            <div class="flex justify-start items-center gap-x-2 my-4 mx-2">
                <span class="material-icons text-white">
                    edit
                </span>
                <h2 class="flex-1 text-xl font-bold text-white">Update Tasks</h2>
                <span class="material-icons text-white cursor-pointer" @click="OpenModal = false">
                    close
                </span>
            </div>
            <div class="w-full h-0.5 bg-slate-400"></div>
            <form @submit.prevent="updateTask" class="flex flex-col justify-center gap-y-4 mx-2 my-4">
                    <input type="text" id="todo-text" class=" px-4 py-3 outline-none rounded-lg" placeholder="Enter Task Here..." v-model="tasksObj.tasks" />
                    <select v-model="tasksObj.status"  class="px-4 py-3 text-slate-600 rounded-lg" >
                        <option disabled selected value="">Please Select a Status...</option>
                        <option value="In progress">In progress</option>
                        <option value="Not Started">Not Started</option>
                        <option value="Finished">Finished</option>
                    </select>
                    <div class=" flex justify-center items-center gap-x-2">
                        <BaseBtn class=" flex-1 bg-white text-black" btnText="Clear" />
                        <BaseBtn class="flex-1" btnText="Edit Task"/>
                    </div>        
                </form>
        </div>
        <div v-if="todoStore.notification" class="absolute top-2 right-2 z-20 overflow-auto ease-in duration-500 ">
            <BaseToast :class="[positiveMsg ? 'bg-green-500' :'bg-red-500']" :notification="todoStore.notification" />
        </div>
    </div>
    
    
</template>