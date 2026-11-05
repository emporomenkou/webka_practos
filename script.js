let input_task = document.getElementById('input')
let button_add_task = document.getElementById('add_task')
let completed_counter = document.getElementById('completed')
let uncompleted_counter = document.getElementById('uncompleted')
let tasks_clear_list = document.getElementById('only-tasks')
let ul = document.createElement('ul')

let div = document.createElement('div') 
let tasks = []

function add_task() {
    if (input_task.value) {
        // let ul = document.createElement('ul')        
        let li = document.createElement('li')
        let div = document.createElement('div')             
        let checkbox = document.createElement('input')
        checkbox.type = "checkbox"
        checkbox.classList.add("checkbox")
        div.append(checkbox)

        let delete_button = document.createElement('button')
        delete_button.textContent = "Delete"
        delete_button.classList.add("delete-button")
        div.append(delete_button)        

        let edit_button = document.createElement('button')
        edit_button.textContent = "Edit"
        edit_button.classList.add("edit-button") 
        div.append(edit_button)   

        let task_text  = document.createElement('p')
        task_text.textContent = input_task.value
        task_text.classList.add('task-text')
        input_task.value = ''
        div.append(task_text)           

        li.append(div)
        ul.appendChild(li)
        tasks_clear_list.append(ul)
    }

}

button_add_task.addEventListener('click', add_task)
