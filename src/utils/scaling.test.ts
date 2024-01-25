import { describe, expect, it } from 'vitest';

import { scaling } from './scaling';

describe('scaling', () => {
  it('should scale the input within the specified range', () => {
    expect(scaling(1, 0, 100)).toBe(100);
    expect(scaling(0.5, 0, 100)).toBe(50);
    expect(scaling(0, 0, 100)).toBe(0);
  });
});
