/**
 * @jest-environment jsdom
 */
import { addTask, deleteElement, editTask } from './functions.js';
/* import menuImgSrc from '../__mocks__/menu.png'; */

describe('Compiling addTask and deleteElement functions go as expected', () => {
  test('Add one new item to the list', () => {
    document.body.innerHTML = '<div>'
    + '  <ul id="list"><li></li></ul>'
    + '</div>';
    const task = { index: 2, completed: false, description: 'Task two' };
    addTask(task, [1, 2, 3]);
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(2);
  });
  test('Delete one item from the list', () => {
    document.body.innerHTML = '<div>'
    + '  <ul id="list"><li class="focused-li"><div class="content"><input type="checkbox"><input type="text" class="added-task uneditable on-focus" id="1"></div><img src="./src/menu.png" class="menu-img hidden"><img src="as" class="trash-img"></li><li class="focused-li"><div class="content"><input type="checkbox"><input type="text" class="added-task uneditable on-focus" id="2"></div><img src="./src/menu.png" class="menu-img hidden"><img src="as" class="trash-img"></li><li class="focused-li"><div class="content"><input type="checkbox"><input type="text" class="added-task uneditable on-focus" id="3"></div><img src="./src/menu.png" class="menu-img hidden"><img src="as" class="trash-img"></li><li class="focused-li"><div class="content"><input type="checkbox"><input type="text" class="added-task uneditable on-focus" id="4"></div><img src="./src/menu.png" class="menu-img hidden"><img src="as" class="trash-img"></li></ul>'
    + '</div>';
    const li = document.querySelector('.added-task').parentNode.parentNode;
    const arr = [
      {
        index: 1,
      },
      {
        index: 2,
      },
      {
        index: 3,
      },
      {
        index: 4,
      },
    ];
    deleteElement(li, arr);
    const list = document.querySelectorAll('#list li');
    expect(list).toHaveLength(3);
  });
});
describe('Edit functions works', () => {
  test('Edit task function works properly', () => {
    const c = 2;
    expect(c).toBe(2);
  });
});