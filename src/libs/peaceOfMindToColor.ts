export function getMentalLevelColor(zeroToOne: number): string {
  return `hsl(${toHslH(zeroToOne)}, 50%, 80%)`;
}

function toHslH(input: number): number {
  // 0~1の範囲を240~0に変換
  let newValue = 180 - input * 180;
  // 240~0の範囲を180~-60に変換
  // newValue = newValue - 60;
  // 0より小さい値に対して360を足す
  if (newValue < 0) {
    newValue += 360;
  }
  return newValue;
}
