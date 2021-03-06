// DEFINE UL VARS
const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// LOAD ALL EVENT LISTENERS
loadEventListeners();

// load all event listeners
function loadEventListeners(){
  // add task event
  form.addEventListener('submit', addTask);
}
// clear task event
clearBtn.addEventListener('click', clearTasks)
// remove task event
taskList.addEventListener('click', removeTask)
// filter tasks events
filter.addEventListener('keyup', filterTasks)
// Add task
function addTask(e){
  if(taskInput.value === ''){
    alert('Add a task')

  }

  // create li element
  const li = document.createElement('li');
  // add class 
  li.className = 'collection-item';
  // create text node and append to li
  li.appendChild(document.createTextNode(taskInput.value));
  // create a new link element
  const link = document.createElement('a');
  // add class 
  link.className = 'delete-item secondary-content';
  // add icon html
  link.innerHTML = '<i class="fa fa-remove"></i>';
  // append the link to the li
  li.appendChild(link);
  // append the li to ul
  taskList.appendChild(li)
  // clear input
  taskInput.value = ' ';


  // console.log(li);

  e.preventDefault();
}
// remove task
function removeTask(e){
  if(e.target.parentElement.classList.contains('delete-item')){
    if(confirm('Are you sure?')){
      e.target.parentElement.parentElement.remove();

    }
  }

}
function clearTasks(){
  // taskList.innerHTML = ' '; one way
  
  // faster 
  while (taskList.firstChild){
    taskList.removeChild(taskList.firstChild);
  }
}

function filterTasks(e){
  const text = e.target.value.toLowerCase();

  document.querySelectorAll('.collection-item').forEach(function(task){
    const item = task.firstChild.textContent;
    if(item.toLowerCase().indexOf(text) != -1){
      task.style.display = 'block';
    } else{
      task.style.display = 'none';
    }
  });
  // console.log(text);
}