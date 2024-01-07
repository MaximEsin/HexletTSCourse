function getHiddenCard(cardNumber: string, starNumber: number = 4) {
  let shownNumbers = cardNumber.slice(-4);
  let result = "";
  for (let i = 0; i < starNumber; i++) {
    result += "*";
  }

  return (result += shownNumbers);
}

getHiddenCard("1234567812345678", 2); // "**5678"
getHiddenCard("1234567812345678", 3); // "***5678"
getHiddenCard("1234567812345678"); // "****5678"
getHiddenCard("2034399002121100", 1); // "*1100"
