

var tail = (list) => {
  let tailList = [];
  for (let i = 1; i < list.length; i++) {
    tailList = [...tailList, list[i]];
  }

  return tailList;
};



module.exports = tail;
