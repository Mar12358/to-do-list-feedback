/**
 * @jest-environment jsdom
 */

import { clearCompleted } from './check_box.js';

describe('Clear all and Update Status functions work', () => {
  test('Clear all Completed Button works fine', () => {
    const arr = [{ completed: true }, { completed: false }, { completed: true }];
    expect(clearCompleted(arr).length).toBe(1);
  });
  // test('Check task works', () => {
  //   const c = 2;
  //   expect(c).toBe(2);
  // });
  // test('Unheck task works', () => {
  //   const c = 2;
  //   expect(c).toBe(2);
  // });
});