
   ///////////////////////////////////////////////////////////////////
   //A.programs with anonyomus function and IIFE

   //1.print all the odd numbers in the arrays
   //anonyomus function
   var arr = [12,13,14,15,17,19,21]
   var result =[];
   var odd = function(arr){
        for(var i=0;i<arr.length;i++){
           if(arr[i]%2!=0){
              result.push(arr[i]);
           }
       }
       return result;
   }
   
   console.log(odd(arr));
   
   //IIFE
   ( function odd(arr){
       var result =[];
             for(var i=0;i<arr.length;i++){
                 if(arr[i]%2!=0){
                    result.push(arr[i]);
                 }
             }
           console.log (result);
         }
        )([12,13,14,15,17,19,21])
   //////////////////////////////////////////////////////////

   ///2.Convert all the strings to title caps in a string array
    //anonyomus function
var str="guvi geeks"
var u=function(str) {
  str = str.toLowerCase().split(' ');
  for (var i = 0; i < str.length; i++) {
    str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
  }
  return str.join(' ');
}
console.log(u(str));
 //IIFE
( function(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++){
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    console.log(str.join(' '));
}
  )("guvi geeks")
  /////////////////////////////////////////////////////////////////
 //////3.Sum of all numbers in an array
  //anonyomus funcvar arr = [12,13,14,15,17,19,21]
    var arr = [12,13,14,15,17,19,21]
   var sum =0;
   var add = function(arr){
        for(var i=0;i<arr.length;i++){
            sum = sum +(+arr[i]);
       }
       return sum;
   }
   
   console.log(add(arr));
   //IIFE

(function(arr){
    var sum =0;
        for(var i=0;i<arr.length;i++){
            sum = sum +(+arr[i]);
       }
       console.log(sum);
   })([12,13,14,15,17,19,21])
   /////////////////////////////////////
   //4.Return all the prime numbers in an array
//anonyomus
var arr = [3,4,6,7,9,11,14];
var result = [];
var dummy = [];
var prime = function(arr){
 for(i=0; i<arr.length; i++)
{
     if(arr[i]===2 || arr[i]===3 || arr[i]===5 ||arr[i]===7)
     {
         result.push(arr[i]);
     }
     else if (arr[i]%2 === 0 || arr[i]%3 === 0 ||arr[i] === 0 ||arr[i]%7 === 0)
     {
         dummy.push(arr[i]);
     }
     else
     {
         result.push(arr[i]);
     }
}
return result.join(" ") ;
}
console.log(prime(arr));
 //IIFE

(function(arr){
    var result = [];
var dummy = [];

    for(i=0; i<arr.length; i++)
   {
        if(arr[i]===2 || arr[i]===3 || arr[i]===5 ||arr[i]===7)
        {
            result.push(arr[i]);
        }
        else if (arr[i]%2 === 0 || arr[i]%3 === 0 ||arr[i] === 0 ||arr[i]%7 === 0)
        {
            dummy.push(arr[i]);
        }
        else
        {
            result.push(arr[i]);
        }
   }
   console.log (result.join(" ")) ;
}
)([3,4,6,7,9,11,14])
////////////////////////////////////////////////////
//////////////////////////
/////5.Return all the palindromes in an array

//anonyomus
// JavaScript code for the above approach
 
 // Driver Code
let arr1 = [ "abc", "car", "ada", "racecar", "cool" ];
let N = arr1.length;
 
// Print required answer
let s = function (arr1,N)
{
    let ans = [];
 
    // Loop to find palindrome string
    for (let i = 0; i < N; i++) {
 
        // Checking if given string is
        // palindrome or not
        if (isPalindrome(arr1[i])) {
 
            // Update answer variable
            ans.push(arr1[i]);
        }
    }
    return ans;
}
if(s.length == 0)
    console.log("-1");
for(let st of s(arr1,N))
    console.log(st," ");
// Function to check if given string
// is Palindrome or not
function isPalindrome(s)
{
    // Copy string s char into string a
    let a = s;
    s = s.split('').reverse().join('');
 
    // Check if two string are equal or not
    return s == a;
}
 
///////////////////////IIFE
 ( function (arr)
 {
    let n=arr.length;
     let ans = [];
  
     // Loop to find palindrome string
     for (let i = 0; i < n; i++) {
  
         // Checking if given string is
         // palindrome or not
         if (isPalindrome(arr[i])) {
  
             // Update answer variable
             ans.push(arr[i]);
         }
     }

     console.log(ans);
 }) ([ "abc", "car", "ada", "racecar", "cool" ])

 // Function to check if given string
 // is Palindrome or not
 function isPalindrome(s)
 {
     // Copy string s char into string a
     let a = s;
     s = s.split('').reverse().join('');
  
     // Check if two string are equal or not
     return s == a;
 }
 /////////////////////////////////////////////////
 //////////////////////////////////
 //6.Return median of two sorted arrays of the same size.
 
/* Driver program to test above function */
var ar1 = [1, 12, 15, 26, 38];
var ar2 = [2, 13, 17, 30, 45];
var n1 = ar1.length;
var n2 = ar2.length;
if (n1 == n2){
    var o=function (ar1, ar2,n1)
    {
        var i = 0; /* Current index of i/p array ar1[] */
        var j = 0; /* Current index of i/p array ar2[] */
        var count;
        var m1 = -1, m2 = -1;
     
        /* Since there are 2n elements, median will be average
        of elements at index n-1 and n in the array obtained after
        merging ar1 and ar2 */
        for (count = 0; count <= n1; count++)
        {
            /*Below is to handle case where all elements of ar1[] are
            smaller than smallest(or first) element of ar2[]*/
            if (i == n)
            {
                m1 = m2;
                m2 = ar2[0];
                break;
            }
     
            /*Below is to handle case where all elements of ar2[] are
            smaller than smallest(or first) element of ar1[]*/
            else if (j == n1)
            {
                m1 = m2;
                m2 = ar1[0];
                break;
            }
            /* equals sign because if two
                arrays have some common elements */
            if (ar1[i] <= ar2[j])
            {
                m1 = m2; /* Store the prev median */
                m2 = ar1[i];
                i++;
            }
            else
            {
                m1 = m2; /* Store the prev median */
                m2 = ar2[j];
                j++;
            }
        }
     
        return (m1 + m2)/2;
    }
    
    console.log("Median is"+ o(arr));}
else
    console.log("Doesn't work for arrays of unequal size")



    /////////////////////////////ARROW FUNCTION///////////////////////

   //1.print all the odd numbers in the arrays

   var odd = (arr)=>{
    var result =[];
        for(var i=0;i<arr.length;i++){
            if(arr[i]%2!=0){
               result.push(arr[i]);
            }
        }
        return result;
}
console.log(odd([12,13,14,15,17,19,21]))

  ///2.Convert all the strings to title caps in a string array
    //anonyomus function
    var u=(str)=>{
      str = str.toLowerCase().split(' ');
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
      }
      return str.join(' ');
    }
    console.log(u("guvi geeks"));

    //////3.Sum of all numbers in an array
 
  var add = (arr)=>{
    var sum =0;
       for(var i=0;i<arr.length;i++){
           sum = sum +(+arr[i]);
      }
      return sum;
  }
  
  console.log(add([12,13,14,15,17,19,21]));

   //4.Return all the prime numbers in an array
//anonyomus
var prime = (arr)=>{
    var result = [];
var dummy = [];
 for(i=0; i<arr.length; i++)
{
     if(arr[i]===2 || arr[i]===3 || arr[i]===5 ||arr[i]===7)
     {
         result.push(arr[i]);
     }
     else if (arr[i]%2 === 0 || arr[i]%3 === 0 ||arr[i] === 0 ||arr[i]%7 === 0)
     {
         dummy.push(arr[i]);
     }
     else
     {
         result.push(arr[i]);
     }
}
return result.join(" ") ;
}
console.log(prime([3,4,6,7,9,11,14]));


///5.Return all the palindromes in an array
const arr5 = ['carecar', 1344, 12321, 'did', 'cannot'];
const IisPalindrome =(el)=> {
   const str = String(el);
   let i = 0;
   let j = str.length - 1;
   while(i < j) {
      if(str[i] === str[j]) {
         i++;
         j--;
      }
      else {
         return false;
      }
   }
   return true;                                                
};
const findPalindrome = arr5 => {
   return arr5.filter(el => IisPalindrome(el));
};
console.log(findPalindrome(arr5));

