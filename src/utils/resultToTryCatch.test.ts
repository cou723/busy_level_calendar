import { describe, it, expect } from 'vitest';
import { resultToTryCatch, tryCatchToResult } from './resultToTryCatch';
import { Ok, Err } from 'ts-results';

describe('resultToTryCatch', () => {
  it('should return the value if the result is Ok', () => {
    const result = Ok('Hello, World!');
    const value = resultToTryCatch(result);
    expect(value).toBe('Hello, World!');
  });

  it('should throw an error if the result is Err', () => {
    const result = Err(new Error('Something went wrong'));
    expect(() => resultToTryCatch(result)).toThrowError('Something went wrong');
  });
});

describe('tryCatchToResult', () => {
  it('should return Ok if the function resolves', async () => {
    const result = await tryCatchToResult(() => Promise.resolve('Hello, World!'));
    expect(result).toEqual(Ok('Hello, World!'));
  });

  it('should return Err if the function rejects', async () => {
    const result = await tryCatchToResult(() => Promise.reject(new Error('Something went wrong')));
    expect(result).toEqual(Err(new Error('Something went wrong')));
  });
});
