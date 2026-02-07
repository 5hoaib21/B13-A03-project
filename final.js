//problem 01 completed
function newPrice(currentPrice, discount) {
  if (typeof currentPrice !== "number" || typeof discount !== "number") {
    return "Invalid";
  }

  if (discount < 0 || discount > 100) {
    return "Invalid";
  }

  const discountPrice = (currentPrice * discount) / 100;
  const afterDiscount = currentPrice - discountPrice;
  return afterDiscount.toFixed(3);
}
//
//
//
//problem 02 completed

//
//
//
// problem 03 completed

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

//
//
//
// problem 04 completed
//
//
//
//
//
//

// problem 05 completed
