import { defineStore } from "pinia";
import { ref, computed } from 'vue'

export const useTodoStore = defineStore('todos', () => {

    // {
    //     id: Date.now(),
    //     tasks: "Task 1",
    //     status: "Not Started"
    // },
    const todos = ref(JSON.parse(localStorage.getItem("Tasks-todo")) || [])
    const todo = ref()
    const notification = ref(null)

    function showNotification(payload){
        notification.value = payload
        setTimeout(() => {
            notification.value = null
        }, 3000);
    }

    function addTodo(payload) {
        console.log(payload, 'payload');
        console.log(todos.value);
        console.log(payload.id , 'payload id ');
        let givenId = todos.value.find(item => item.id === payload.id)
        console.log(givenId, 'giving id');
        if (givenId) {
            console.log('Included');
            todos.value.forEach((element) => {
                if(element.id === payload.id){
                    element.id = payload.id
                    element.tasks = payload.tasks
                    element.status = payload.status
                }
            });
            localStorage.setItem("Tasks-todo", JSON.stringify(todos.value))
            showNotification("Items Updated Successfully ")
        } else {
            console.log('Not Included');
            todos.value.push(payload)
            const localTodo = JSON.stringify(todos.value)
            localStorage.setItem("Tasks-todo", localTodo)
            showNotification("Item Added Successfully")
        }
    }

    function removeTodo(payload) {
        const index = todos.value.findIndex((task) => task.id === payload.id)
        todos.value.splice(index, 1)
        localStorage.setItem("Tasks-todo", JSON.stringify(todos.value))
        showNotification("Item Deleted Successfully")
    }


    return {
        todos,
        todo,
        notification,
        addTodo,
        removeTodo,
        showNotification,
    }

})