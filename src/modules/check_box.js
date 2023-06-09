export const updateCheckBox = (array, checkbox) => {
  const text = checkbox.nextElementSibling;
  // text.classList.toggle('line-through');
  array[parseInt(text.id, 10) - 1].completed = !array[parseInt(text.id, 10) - 1].completed;
  localStorage.setItem('tasks', JSON.stringify(array));
};

export const addCheckboxListenerOnLoad = (checkboxes, array) => {
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener('change', () => {
      updateCheckBox(array, checkbox);
    });
  });
};

export const clearCompleted = (arrayOfTasks) => {
  const incompleteTasks = arrayOfTasks.filter((task) => task.completed !== true);
  for (let i = 0; i < incompleteTasks.length; i += 1) {
    incompleteTasks[i].index = i + 1;
  }
  arrayOfTasks = incompleteTasks;
  localStorage.setItem('tasks', JSON.stringify(incompleteTasks));
  window.location.reload(true);
  return arrayOfTasks;
};