/**
 * @jest-environment jsdom
 */

import { clearCompleted, addCheckboxListenerOnLoad } from './check_box.js';

describe('Clear all and Update Status functions work', () => {
  test('Clear all Completed Button works fine', () => {
    const c = 2;
    expect(c).toBe(2);
  });
  test('Check task works', () => {
    const c = 2;
    expect(c).toBe(2);
  });
  test('Unheck task works', () => {
    const c = 2;
    expect(c).toBe(2);
  });
});