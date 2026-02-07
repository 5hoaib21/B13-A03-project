function analyzeText(str) {
  if (typeof str !== "string" || str.trim().length === 0) {
    return "Invalid";
  }

  const noSpaceWord = str.split(" ").join("");
  const tokenCuntt = noSpaceWord.length;

  const arrayWord = str.split(" ");
  let longest = "";

  for (let i = 0; i < arrayWord.length; i++) {
    const currentWord = arrayWord[i];

    if (currentWord.length > longest.length) {
      longest = currentWord;
    }
  }

  return {
    longwords: longest,
    token: tokenCuntt,
  };
}
