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
console.log(newPrice("100", 12.5));
console.log(newPrice(100, 12.5));
console.log(newPrice(1500, 20));
