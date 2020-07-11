
function toCamelCase(str){

  if(str === ''){
    return ''
  }
  else{
    let BuilderString = []
    let splitString = str.replace(/[^A-Z0-9]/ig, "_").split("_")
    let firstElement = BuilderString.push(splitString.splice(0,1))
    for(let w in splitString){
      let splitWords = splitString[w].split('')
      let upperChar = splitWords[0].toUpperCase()
      
      splitWords.splice(0,1, upperChar)
      let joinW = splitWords.join('')
      BuilderString.push(joinW)
      let newWord = BuilderString.join('')
      
    }
    return BuilderString.join('')
    }
}

//Other solutions:

function toCamelCase(str){
      var regExp=/[-_]\w/ig;
      return str.replace(regExp,function(match){
            return match.charAt(1).toUpperCase();
       });
}
