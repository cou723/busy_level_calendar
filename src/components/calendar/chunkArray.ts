export function chunkArray(array: Date[], chunkSize: number): Date[][] {
  let index = 0;
  const arrayLength = array.length;
  const tempArray = [];

  for (index = 0; index < arrayLength; index += chunkSize) {
    const chunk = array.slice(index, index + chunkSize);
    tempArray.push(chunk);
  }

  return tempArray;
}
