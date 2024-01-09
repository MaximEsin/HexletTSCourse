function reverse(arr: readonly number[]) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    result.unshift(arr[i]);
  }

  return result;
}
