module.exports = function reverse (n) {
    if(n<0){
        n = n * -1;
    }
    let res = [];
  
    
    while(n>0){
      let v = n%10;
      res.push(v);
      n = parseInt(n/10);
    }
    res = parseInt(res.join(''))
    return res;
}
