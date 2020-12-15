//sum all number
const sum = a => b => b ? sum(a + b) : a;
//console.log(sum(2)(6)(22)(3)());

// 4 = 4*3*2
const multi = n => n <=1 ? n : multi(n-1) * n;
//console.log(multi(5));

//153 = 1^3 + 5^3 + 3^3 where n = 3
const fab = n => {
    let numArr = n.toString().split('').map(Number);
    let sum = numArr.map(x=>x**numArr.length).reduce((a,b)=>a+b);
    return (n == sum) ? true : false;
    
}
//console.log(fab(153));


// 0,1,1,2,3,5,8
const fabanic = n => {
    let temp = [0,1];
    for(let i=temp.length; i<=n; i++){
        temp[i] = temp[i-2] + temp[i-1];
    }
    return temp;
}
console.log(fabanic(6));

for(let i =0; i<myA.length; i++) {
    for(let j=0; j<(myA.length-i-1); j++) {
      if(myA[j] === myA[j+1]) {
        myA.splice(j, 1)
      }
    if(myA[j] > myA[j+1]) {
      let temp = myA[j];
      myA[j]=myA[j+1];
      myA[j+1]=temp
    }
    }
  }

  const removeDup = string => {
    return string.filter((x, index) => string.indexOf(x) == index)
}

  //start pattern
  function starPatter(){
    let output
    for(let i=0; i<5; i++){
        for(let j=1; j<=i; j++){
          output += j;
      }
      output +='\n';
    }
    return output;
}
