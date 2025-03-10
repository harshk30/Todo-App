    let todos = []

    const todosList = document.getElementById('todos')
    const todoInput = document.getElementById('textInput')
    const inputBtn = document.getElementById('add')
    const showEnterTodo = document.getElementById('showEnterTodo')
    const enterTodo = document.getElementById('enterTodo')

    function showTodoInput() {
        enterTodo.style.display = 'block'
    }

    showEnterTodo.addEventListener('click', showTodoInput)

    function addTodo(e) {
        e.preventDefault()
        let textValue = todoInput.value
        todos.push(textValue)
        todosList.innerHTML = ''
        renderTodos()
        todoInput.value = ''
        enterTodo.style.display = 'none'
    }
    inputBtn.addEventListener('click', addTodo)

    function removeTodo(index) {
        todos = todos.filter((todo, i) => {
            return i === index ? false : true
        })
  
        renderTodos()
    }

    function editTodo(index) {
        const currElementText = document.querySelector(`#todos div:nth-child(${index + 1}) p`).innerText
        const splicedText = currElementText.slice(3)
        removeTodo(index)
        showTodoInput()
        todoInput.value = splicedText
    }


    function renderTodos() {
        todosList.innerHTML = ''
        todos.forEach((todo, i) => {
            let currentHTML = todosList.innerHTML
            let newHTML = (
                `<div class="todoItem">
                    <p>${i + 1}. ${todo}</p>
                    <div class="actions">
                        <i onclick="editTodo(${i})" class="fa-solid fa-pen"></i>
                        <i onclick="removeTodo(${i})" class="fa-regular fa-trash-can"></i>
                    </div>
                </div>`
            )

            let amendedHTML = currentHTML + newHTML
            todosList.innerHTML = amendedHTML
        })
    }

    renderTodos()