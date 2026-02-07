function gonoVote(array) {
  if (!Array.isArray(array)) {
    return "Invalid";
  }
  let votYes = 0;
  let votNo = 0;
  for (let count = 0; count < array.length; count++) {
    const vot = array[count];

    if (vot === "ha") {
      votYes = votYes + 1;
    } else if (vot === "na") {
      votNo = votNo + 1;
    }
    // else{return "Invalid"}
  }
  if (votYes > votNo) {
    return true;
  } else if (votYes === votNo) {
    return "equal";
  } else {
    return false;
  }
}

console.log(gonoVote(["ha", "na", "ha", "ha", "na", "ha"]));
console.log(gonoVote(["ha", "na", "na", "ha", "ha", "na", "na", "ha"]));
console.log(gonoVote(["na", "na", "ha", "na", "na", "ha"]));
