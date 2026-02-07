function finalScore(data) {
  const right = data.right;
  const wrong = data.wrong;
  const skip = data.skip;

  if (right + wrong + skip !== 100) {
    return "Invalid";
  }

  let rightAns = right * 1;
  let wrongAns = wrong * 0.5;
  let score = rightAns - wrongAns;

  return Math.round(score);
}
