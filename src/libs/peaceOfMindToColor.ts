import { mindColors } from "@/global";

export function peaceOfMindToColor(zeroToOne: number): string {
  return `hsl(${toHslH(zeroToOne)}, 100%, 50%)`;
}

function toHslH(input: number): number {
  // 0~1の範囲を240~0に変換
  let newValue = 240 - input * 240;
  // 240~0の範囲を180~-60に変換
  newValue = newValue - 60;
  // 0より小さい値に対して360を足す
  if (newValue < 0) {
    newValue += 360;
  }
  return newValue;
}
