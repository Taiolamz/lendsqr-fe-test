export function formatNumberWithCommas(number: number) {
  let numberString = number.toString();
  let characters = numberString.split("");
  let commaIndex = characters.length - 3;
  while (commaIndex > 0) {
    characters.splice(commaIndex, 0, ",");
    commaIndex -= 3;
  }
  return characters.join("");
}
