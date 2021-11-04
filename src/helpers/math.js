export function sum(a, b) {
  return a + b;
}

export function mul(a, b) {
  return a * b;
}

export function mulStr(str, multiplier){
  let result = ''
  for(let i = 0; i< multiplier; i++){
    // if(i===0){
    //   const newStr = str.toUpperCase();
    //   result = result + newStr;
    // }else{
      
    // }
    result = result + str;
  }
  String.prototype.capitalize = function() {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
  // return str.repeat(multiplier)
  return result.capitalize()
  
}
export function arrSum(arr){
  return arr.reduce((a,b)=>{
    return a+b
  })
}
export function arrRev(arr){
  return arr.reverse()
}
export function arrayFilterEven(arr){
  let newArr=[]
  for (let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
      newArr.push(arr[i])
    }
  }
  return newArr
}
export function getSmallest(arr){
  return Math.min(...arr)
}
export function convertMoney(usd){
  let yuan = 6.40 * usd
  return yuan + ' yuan'
}
export default function() {
  console.log('work1312');
}
