


var middle = (array) =>{
  let arrayLength = array.length
  if (arrayLength <= 2){
    return [];
  }
  if (arrayLength % 2 == 0){
    return [array[arrayLength / 2 - 1], array[arrayLength / 2]];
  }
  else {
    return [array[Math.floor(arrayLength / 2)]]
  }  
}

module.exports=middle;
