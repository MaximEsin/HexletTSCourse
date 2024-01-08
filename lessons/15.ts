function forEach(
  numbers: number[],
  callback: (n: number, index?: number) => number
): void {
  numbers.forEach((num, index) => callback(num, index));
}
