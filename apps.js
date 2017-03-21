function word(text){
  var firstw = text.charAt(0);
  var remaining;
  var converted;
//if first letter is not vowels

console.log(firstw ==="a"||firstw === "e"||firstw === "i"||firstw === "o"||firstw === "u");

  if(firstw !== "a"||firstw !== "e"||firstw !== "i"||firstw !== "o"||firstw !== "u"){
    remaining = text.slice(1);
    console.log(remaining);
    converted=remaining+"-"+text.charAt(0)+"ay";
    return converted;
  }else{
    converted = text+"-ay";
    return converted;
  }
}

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





console.log(word("uganda"));