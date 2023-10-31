//odd numbers in an array

const arry =[1,2,3,4,5,6,7,8,9];

const even = arry.filter(number => {
  return number % 2 !== 0;
});

console.log(even);


//Convert all the strings to title caps in a string array
function titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1); 
    }
    return str.join(' ');
  }
  titleCase("I'm a little tea pot");




// Sum of all numbers in an array
const sum= function(val1,val2){
    return val1+val2 ;
}(200+300);

console.log(sum);


//Return all the prime numbers in an array

var numArray = [2, 3, 4, 5, 6, 7, 8, 9, 10]

numArray = numArray.filter((number) => {
  for (var i = 2; i <= Math.sqrt(number); i++) {
if (number % i === 0) return false;
  }
  return true;
});

console.log(numArray);



//Return all the palindromes in an array

let palindromeArray = (arr) => {
    let isPalindrome = true;
    for(let i = 0; i < arr.length / 2; i++) {
        if(arr[i] !== arr[arr.length - i - 1]){
          isPalindrome = false; 
          break;
        }
    }
    return isPalindrome;
}
console.log(palindromeArray([1,2,2,1]));
console.log(palindromeArray([1,2,2,2]));



//RETURN MEDIAN OF TWO SORTED ARRAYS OF SAME SIZE")
let median = function(arr1,arr2){
    let arr3 = []
    for (let i = 0 ;i < arr1.length ;i++)
    {
        if (arr1[i] < arr2[i])
        {
            arr3.push(arr1[i])
            arr3.push(arr2[i])
        }
    }
    if (arr3.length % 2 == 1)
    {
        return (arr3[arr3.length/2])
    }
    else 
    {
        return parseInt(((arr3[arr3.length/2]+arr3[arr3.length/2]-1)/2))
    }
}




//Remove duplicates from an array

let arr = ["scale", "happy", "strength",
"peace", "happy", "happy"];

function removeDuplicates(arr) {
return arr.filter((item,
index) => arr.indexOf(item) === index);
}

console.log(removeDuplicates(arr));



//Rotate an array by k times

(function (a, n, k) 
{ 
    let arr1 = []
    console.log("Input is:",[1, 2, 3, 4, 5])
    k = k % n; 
    for (let i = 0; i < n; i++) { 
		if (i < k) { 
			arr1.push(a[n + i - k]); 
		} 
		else { 
			arr1.push((a[i - k])); 
		} 
	} 
	console.log( "Output is:",arr1 )
})([1, 2, 3, 4, 5],5,3) 