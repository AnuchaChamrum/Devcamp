let arr = [1,2,3,4,5,6,7,8,9,10] ;
let arr2 = arr.filter((number) => (number%2 != 1)).map((number) => number*1000) ;
console.log(arr2) ;