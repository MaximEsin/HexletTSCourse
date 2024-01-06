function repeat(text: string, count: number) {
  let result: string = "";
  for (let i = 1; i <= count; i++) {
    result = result + text;
  }
  return result;
}
