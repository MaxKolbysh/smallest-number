// BEGIN (write your solution here)
const smallestDivisor=(num)=>{
let co=num;
let acc=2; 
    if (co>1){
    while (co%acc!=0){
    acc=acc+1;
    }
     return acc;   
    }
    else if (co<1&&co!=0){
    return "отрицательное";
    }
    else if (co===1){
    return 1;
    }
    else {
    return "это 0";
    }
};
// END

