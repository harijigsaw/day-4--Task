//Finding Odd numbers in array


let odd = (num) => {
    let arr1 = []
    for(let obj of num)
   { 
     if (obj % 2 == 1)
     arr1.push(obj)
   }
     return arr1
 }


 //Coverting all String to titlecaps in string array
let titlefunc = (str) =>
 {  let arr = []
    for (let val of str)
    {
     let str1 = val[0].toUpperCase()
     let str2 = val.slice(1,val.length)
     arr.push(str1 + str2)
    }
     return arr.join(" ")
 }


 //Sum of numbers in array.
 let sum = (num) => {
    let total = 0;
     for ( let val of num)
     {
         total+=val
     }
     return total
 }



 //Prime Number in array

 let prime = (num) => {
     let arr = []
     for (let val of num)
     {
         if ( !(val % 2 == 0 || val % 3 == 0 || val % 5 ==0 || val %7==0)|| (val == 2 ||val == 3 || val == 5 || val == 7) )
         {
             arr.push(val)
         }
     }
     return arr
 }



 //Return all the palindrome in a array
 let palindrome= (num) => {
     let arr1 = [] 
     for ( let val of num)
    {  
         let temp = val
         let a = temp % 10
         while (temp >=10)
         {
             temp/=10
         }
         let b =Math.floor(temp)
         if ( a === b)
         {
             arr1.push(val)
        }
     }
     return arr1
 }
