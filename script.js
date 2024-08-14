const pushElement = document.querySelector(`#push`);
const tasksElement = document.querySelector(`.tasks`);
const inputElement = document.querySelector(`.newTask input`);
// Add the task
pushElement.addEventListener(`click`, () => {
  if (inputElement.value.length == 0) {
    alert(`Please Enter The Task`);
  } else {
    let innerText = `<div class="task">
   <span id="taskName"> ${inputElement.value}</span>
   <button class="delete">  
   <span class="material-symbols-outlined">
delete
</span>
    </div>`;
    tasksElement.innerHTML += innerText;
    inputElement.value = ``;
    deleteTask();
    completeTask();
  }
});
// delete the task
const deleteTask = () => {
  const deleteElement = document.querySelectorAll(`.delete`);
  for (let i = 0; i < deleteElement.length; i++) {
    deleteElement[i].addEventListener(`click`, () => {
      deleteElement[i].parentNode.remove();
    });
  }
};
// Complete the task
const completeTask = () => {
  const taskElement = document.querySelectorAll(`.task`);
  for (let i = 0; i < taskElement.length; i++) {
    taskElement[i].addEventListener(`click`, () => {
      taskElement[i].classList.toggle(`completed`);
    });
  }
};
