var reverse = function(x) {
    let rev_num , digit = 0;
    while(x!==0){
      digit = x % 10;
      x = parseInt(x/10);
      rev_num = (rev_num * 10 )+ digit;
     if(rev_num < Math.pow(-2, 31) || rev_num > Math.pow(2,31)-1) return 0;
    }
    return rev_num;
};

