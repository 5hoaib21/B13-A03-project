function validOtp(otp) {
  if (typeof otp !== "string") {
    return "Invalid";
  }
  const absoluteAlphabet = otp.startsWith("ph-");
  const lengthOfAlphabet = otp.length === 8;

  //   const bothConditions = absoluteAlphabet + lengthOfAlphabet;
  //  if (bothConditions ===m true){
  //  return true;
  //  }
  //  else{
  //      return false;
  //  }
  //
  //

  if (absoluteAlphabet === true && lengthOfAlphabet === true) {
    return true;
  } else {
    return false;
  }
}
console.log(validOtp("ph-10985"));
console.log(validOtp("otp-1234"));
console.log(validOtp("ph-12"));
console.log(validOtp(12345678));
