/*
  String: Reverse
  Given a string,
  return a new string that is the given string reversed
*/

//const str1 = "Creature"
// const expected1 = "erutaerC"

// const str2 = "maple"
// const expected2 = "elpam"
// console.log(reverseStr(str1));
function reverseStr(str){
    var newSt = '';
    for( let i = str.length - 1; i >= 0; i --)
    {
        //newSt+= str[i];
        newSt+= str.charAt(i);
    }
    return newSt;
}
/* ************************************************* */

/*
  Acronyms
  Create a function that, given a string, returns the string’s acronym
  (first letter of each word capitalized).
  Do it with .split first if you need to, then try to do it without
*/

// const str1 = " there's no free lunch - gotta pay yer way. ";
// const expected1 = "TNFLGPYW";

//  const str2 = "Live from New York, it's Saturday Night!";
// // const expected2 = "LFNYISN";
// console.log(acronym(str2));

function acronym(str){
    var newStr = str[0];
    for(let i = 1; i < str.length; i ++)
    {
        if(str.charAt(i) == " ")
            newStr+= str.charAt(i+1);
    }
    return newStr.toUpperCase();
   // return str.split("").reverse().join(""); 

}

/* ************************************************* */
/* case insensitive string compare */

// str1 = "Dad";
// str2 = "dad";
// str3 = "WeiRd MIxEd cASe";
// str4 = "weird mixed case";
// console.log(compareNoCase(str3,str4));
function compareNoCase(str1, str2){
     return (str1.toLowerCase() == str2.toLowerCase());
}