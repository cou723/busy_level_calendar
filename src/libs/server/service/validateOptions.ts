import { isAfter } from 'date-fns';
import { ImportEventOptions } from '@/types/importEventOptions';
import { Result, Err, Ok } from 'ts-results';

export function validateOptions(options: ImportEventOptions): Result<void, string> {
  if (options.calendars.length === 0) return Err('calendar must be least one');
  if (options.range.start === undefined) return Err('start must be defined');
  if (options.range.end === undefined) return Err('end must be defined');
  if (isAfter(options.range.start, options.range.end)) return Err('start must be after end');
  return Ok.EMPTY;
}
