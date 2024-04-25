<script setup>
import { useTodoStore } from '@/stores/todo';
import {ref} from 'vue'

const todoStore = useTodoStore()
const props = defineProps({
    todos: {
        type: Array,
        required: true
    },
})

let slo = 1

const emits = defineEmits(['showModal'])


function deleteTask(todo){
    todoStore.removeTodo(todo)
}

function modalOpen(data){
    emits('showModal',data)
}
</script>
<template>
    <table class=" w-full">
        <tr>
            <th class="border-2 px-2 py-2">Task Name</th>
            <th class="border-2 px-2 py-2">Status</th>
            <th class="border-2 px-2 py-2 ">Edits</th>
        </tr>
        <template v-for="(todo, index) in todos" :key="index">
            <tr>
                <td class="border-2 px-2 py-2">{{ todo.tasks }}</td>
                <td class="border-2 px-2 py-2">{{todo.status}}</td>
                <td class="border-2 lg:flex md:flex flex-col justify-around items-center px-2 py-2">
                    <button @click="modalOpen(todo.id)"><span class="material-icons text-blue-600  ">edit</span></button>
                    <button @click="deleteTask(todo)"><span class="material-icons text-red-600 ">delete</span></button>
                </td>
            </tr>
        </template>
    </table>
</template>