//Problem-01: New Price for Eid Sale
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

//Problem-02: OTP Validation for Zapshift
function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  }
  const absoluteAlphabet = otp.startsWith("ph-");
  const lengthOfAlphabet = otp.length === 8;
  if (absoluteAlphabet === true && lengthOfAlphabet === true) {
    return true;
  } else {
    return false;
  }
}

//Problem-03: BCS Final Score Calculator
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

//Problem-04: Upcoming Gono Vote
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

//Problem-05: Text Analyzer for an AI Company
function analyzeText(str) {
  // Your code here
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
