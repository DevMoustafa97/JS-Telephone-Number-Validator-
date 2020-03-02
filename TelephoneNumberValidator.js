function telephoneCheck(str) {
    if(str[0] == '(' && str[str.length-1] == ')'){
      // if str inside "(" and ")"
      return false
    }
  // 1st validate if there are 11 or 12 digits
    if(str.match(/\d/g).length == 10 || str.match(/\d/g).length == 11){
    // string here has 10 or 11 digits 
    // chicking for single parenthese:
    let num = 0;
    let arr = [...str];
      arr.forEach((c)=>{
        if(c=='('|c==')'){
          num++;
        }
      })
      //now num = even or odd number of parentheses
      if(num%2 == 0){// if parentheses are even ??

        // here we treate str depends of number of digits inside it
        if(str.match(/\d/g).length == 10){
          // if str has 10 digits?
          if(/(1 |\(|1\(|1 \()?[\d]{3}(-|\) |\)| )?[\d]{3}(-| )?[\d]{4}/ig.test(str)){
            // final validation on 10 digits on regex
            return true
          }//end of final validation of 10 digits number
        }// end of 10 digits validation
      if( str.match(/\d/g).length == 11  && str[0] == '1'){
        // if str has 11 digits the extra digit must be the key of the country 
        // so it must be only the digit 1 in the beginning 
        if(/(1 |\(|1\(|1 \()?[\d]{3}(-|\) |\)| )?[\d]{3}(-| )?[\d]{4}/ig.test(str) ){
          // the same regex validation for 11 digit to make sure results are the same
          
          return true 
        }// end of final validation of 11 digit number
      return false
      }// end of validation of 11 digits
  return false
  }// end of validation of even number of parentheses
  }// end of counting how many digits inside the str

  return false
// finally the method returns false if str not has 10 or 11 digits
}
