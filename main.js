document.addEventListener('DOMContentLoaded',function(){

  //Define an empty array which wee will populate with the generated characters
  var arrChar = [];

  //This function generates a random character from the given string "chars"
  function randomCharacter() {
    var chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var nr = chars.length;
    console.log("Length of char string A-Z :",nr);
    return chars.substr( Math.floor(Math.random() * 26), 1);
  }

  //This for loop will execute 35 times and push the value of rchar in the arrChar array
  for(let i=0; i < 35; i++){
    var rchar = randomCharacter();
    arrChar.push(rchar);
  }

  //Output of the results in h6 headers and span elements selected by
  //Using the sort() function we sort tthe array of characters generated
  document.getElementById("sp1").innerText = arrChar;
  console.log("The generated string length : ",arrChar.length);
  var sortedArray = arrChar.sort();

  document.getElementById("sp2").innerText = sortedArray;

  //This section splits the array in two equal parts using splice
  //Because the numbering is 0 based the element we look for is the splice results last element
  var half_length = Math.ceil(sortedArray.length / 2);
  var leftSide = sortedArray.splice(0,half_length);

  console.log("Half of the character string: ",leftSide.length-1);

  document.getElementById("sp3").innerText = leftSide[leftSide.length-1];
});
