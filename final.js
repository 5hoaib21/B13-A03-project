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
