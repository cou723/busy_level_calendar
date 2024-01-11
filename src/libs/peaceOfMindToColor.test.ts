import { describe, expect, it } from 'vitest';

import { getMentalLevelColor } from './peaceOfMindToColor';

describe('peaceOfMindToColor', () => {
  it('should return the correct color for a given peace of mind value', () => {
    // Test case 1: peaceOfMind = 0
    expect(getMentalLevelColor(0)).toBe('hsl(180, 50%, 80%)');

    // Test case 2: peaceOfMind = 50
    expect(getMentalLevelColor(0.5)).toBe('hsl(90, 50%, 80%)');

    // Test case 3: peaceOfMind = 100
    expect(getMentalLevelColor(1)).toBe('hsl(0, 50%, 80%)');
  });
});
