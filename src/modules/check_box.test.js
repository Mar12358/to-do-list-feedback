/**
 * @jest-environment jsdom
 */

import { clearCompleted, updateCheckBox } from './check_box.js';

describe('Clear all and Update Status functions work', () => {
  test('Clear all Completed Button works fine', () => {
    const arr = [{ completed: true }, { completed: false }, { completed: true }];
    expect(clearCompleted(arr).length).toBe(1);
  });
  test('Check task works', () => {
    const array = [
      { completed: false },
    ];

    const checkBox = {
      nextElementSibling: {
        id: '1',
      },
    };
    updateCheckBox(array, checkBox);
    expect(array[0].completed).toBeTruthy();
  });
  test('Unheck task works', () => {
    const array = [
      { completed: true },
    ];

    const checkBox = {
      nextElementSibling: {
        id: '1',
      },
    };
    updateCheckBox(array, checkBox);
    expect(array[0].completed).toBeFalsy();
  });
});