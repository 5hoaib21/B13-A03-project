function finalScore(omr) {
  let omrSheet = {
    right: 100,
    wrong: 100,
    skip: 100,
  };

  let right = omrSheet.right;
  let wrong = omrSheet.wrong;
  let skip = omrSheet.skip;
  if (right + wrong + skip !== 100) {
    return "Invalid";
  }
  //number '+'/'-' korte partechi na ;
}
console.log(finalScore({ right: 50, wrong: 30, skip: 20 }));
