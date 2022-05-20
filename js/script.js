var elInput = elfind('.js-input');
var elList = elfind('.todos-list')

var localData = localStorage.getItem('todos');
var todos = JSON.parse(localData) ? JSON.parse(localData) : [];

// console.log(JSON.parse(localData))


function render(array) {
    elList.innerHTML = null;

    for (var i = 0; i < array.length; i++) {
        var elLi = elCreate('li');
        var elCheckboxInput = elCreate('input');
        var elText = elCreate('p');
        var elDiv = elCreate('div');
        var elEditBtn = elCreate('button');
        var eldeleteBtn = elCreate('button');

        elLi.className = 'd-flex align-items-center py-2 px-2 border-bottom'
        elCheckboxInput.className = 'form-check-input mt-0 me-2'
        elCheckboxInput.type = 'checkbox';

        elText.textContent = array[i].title;
        elText.className = 'm-0';
        elDiv.className = 'div ms-auto';
        elEditBtn.className = 'btn btn-success';
        eldeleteBtn.className = 'btn btn-danger ms-1';

        elEditBtn.textContent = 'edit';
        eldeleteBtn.textContent = 'delete';


        elLi.appendChild(elCheckboxInput);
        elLi.appendChild(elText);
        elDiv.appendChild(elEditBtn);
        elDiv.appendChild(eldeleteBtn);
        elLi.appendChild(elDiv);
        elList.appendChild(elLi);
    }
}

render(todos);

function handleAddTodo(evt) {

    if (evt.keyCode === 13) {

        var newTodo = {
            id: uuid.v4(),
            title: elInput.value,
            isComplated: false,
        }

        todos.unshift(newTodo);

        localStorage.setItem('todos', JSON.stringify(todos))
        render(todos);
        elInput.value = null;
    }


}
elInput.addEventListener('keyup', handleAddTodo)
render(todos);