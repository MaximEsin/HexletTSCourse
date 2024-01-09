function getField(num: number) {
  let result = [];
  for (let i = 0; i < num; i++) {
    result.push(Array.from({ length: num }, () => null));
  }

  return result;
}
