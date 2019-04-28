const reverse = (str) => {
  let i = 0;
  let b=(str.length-1);
   
  let result = '';

  while (i < str.length) {
    result =result+str[b];
     b=b-1;   
      i = i + 1;
  }

  return result;
};
