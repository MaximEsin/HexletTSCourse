function filterAnagrams(word: string, array: string[]) {
  const standard = word.split("").sort().join("");
  return array.filter((item) => item.split("").sort().join("") === standard);
}
