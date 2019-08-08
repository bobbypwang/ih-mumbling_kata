function accum(s) {
    let lowS = s.toLowerCase();
      let newS = lowS.split("");
    let repeat = "";
  
    for (i = 0; i < newS.length; i++) {
      let x = newS[i].repeat(i+1) ;
      repeat += x.charAt(0).toUpperCase() + x.slice(0, -1) + '-';
      y = repeat.slice(0, -1)
    }
    
    return y;
  }