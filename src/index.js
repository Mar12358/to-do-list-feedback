import './style.css';
import {
  addTaskToHTML,
  createFrame,
  Task,
  editTask,
  populateHTML,
  createEmptyUl,
} from './modules/functions.js';
import { addCheckboxListenerOnLoad, clearCompleted } from './modules/check_box.js';

const body = document.getElementsByTagName('body')[0];

createFrame();
const arrayOfTasks = [];

const input = document.querySelector('input');
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter' && input.value !== '') {
    e.preventDefault();
    const task = Task.create(input.value, (arrayOfTasks.length + 1).toString());
    arrayOfTasks.push(task);
    localStorage.setItem('tasks', JSON.stringify(arrayOfTasks));
    addTaskToHTML(task, arrayOfTasks);
    input.value = '';
  }
});
const clearButton = document.createElement('button');
clearButton.className = 'clear-btn';
clearButton.innerHTML = 'Clear all completed';
body.appendChild(clearButton);

document.addEventListener('DOMContentLoaded', () => {
  if (localStorage.length !== 0) {
    populateHTML(arrayOfTasks);
  } else {
    createEmptyUl();
  }
  const threeDots = document.querySelectorAll('.menu-img');
  threeDots.forEach((threeDot) => {
    threeDot.addEventListener('click', (event) => {
      editTask(event.target.parentNode, arrayOfTasks);
    });
  });
  const checkboxes = document.querySelectorAll('input[type=checkbox]');
  addCheckboxListenerOnLoad(checkboxes, arrayOfTasks);

  clearButton.addEventListener('click', () => {
    clearCompleted(arrayOfTasks);
  });
});
