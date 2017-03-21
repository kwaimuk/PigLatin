  var wordArray;
function word(text){
  var firstw = text.charAt(0);
  var remaining;
  var converted;


//if first letter is not vowels
  if(firstw !== "a"||firstw !== "e"||firstw !== "i"||firstw !== "o"||firstw !== "u"){
    remaining = text.slice(1);

    converted=remaining+"-"+text.charAt(0)+"ay";
    return converted;
  }else{
    converted = text+"-ay";
    return converted;
  }
}


//split words to array
function wordsToArray(string){
  var werds = 0;
werds = string.split(" ");
wordArray=werds;
return wordArray;
};
console.log(wordArray[1]);
//load array of words
/*function loadString(werds){
  for (var i =0; i<werds.length; i++){
    text(werds[i])
  }
}
*/
/*if(firstw === "a"||"e"||"i"||"o"||"u"){
  converted = text+"-ay";
  return converted;
}else{
  remaining = text.slice(1);
  console.log(remaining);
  converted=remaining+"-"+text.charAt(0)+"ay";
  return converted;
}
}*/



