function finalScore(omr) {
  // let omr = {
  //   right: Number,
  //   wrong: Number,
  //   skip: Number,
  // };

  let right = omr.right;
  let wrong = omr.wrong;
  let skip = omr.skip;

  if (right + wrong + skip !== 100) {
    return "Invalid";
  }

  let rightAns = right * 1;
  let wrongAns = wrong * 0.5;
  let score = rightAns - wrongAns;

  return Math.round(score);
}
