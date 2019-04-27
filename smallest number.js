const smallestDivisor = (num) => {
  // BEGIN (write your solution here)
    if (num>1){
 const iter = (co, acc) => {
   if (co%acc===0){
       return acc;
   }else{
       return iter(co, acc+1);
 }
 };
    return iter(num,2);
    }
    else if (num===1){
        return 1;
             }
    else {
    return "отрицательное число";
    }
  // END
};