function mib (amount, costsArray) {

  if (amount <=0 || amount > 1000000 || costsArray.length < 3 || costsArray.length > 9) {
    return ''
  }


  let result = []
  costsArray.map((item,index,array) => {

    function concat (item, n) {
      return Array(n+1).join(item);
    }


    if (item > 0 && item <= 100000 && Math.trunc(amount/item) > 0) {
      console.log(item)
                      console.log(index+1)
      console.log(Math.trunc(amount/item))
      result.push(concat(index+1, Math.trunc(amount/item)))
    }
    else {
      result.push(0)
    }

    
  })
  // result
  return Math.max.apply(null, result) != 0 ? String(Math.max.apply(null, result)) : ''

}



console.log(mib (1000000,[10000,99999,99999]))


module.exports = function (amount, costsArray) {
  if (amount <=0 || amount > 1000000 || costsArray.length < 3 || costsArray.length > 9) {
    return ''
  }


  let result = []
  costsArray.map((item,index,array) => {

    function concat (item, n) {
      return Array(n+1).join(item);
    }


    if (item > 0 && item <= 100000 && Math.trunc(amount/item) > 0) {
      console.log(item)
                      console.log(index+1)
      console.log(Math.trunc(amount/item))
      result.push(concat(index+1, Math.trunc(amount/item)))
    }
    else {
      result.push(0)
    }

    
  })
  return Math.max.apply(null, result) != 0 ? String(Math.max.apply(null, result)) : ''

}


//весы

module.exports = function (amount, costsArray) {
  if (amount <=0 || amount > 1000000) {
    return ''
  }

  let result = []
  costsArray.map((item,index,array) => {
    if (item > 0 && item <= 100000 && Math.trunc(amount/item) > 0) {
      result.push(index+1 * Math.trunc(amount/item))
      // result
    }
    else {
      result.push(0)
    }

    
  })

  function concat (item, n) {
    return Array(n+1).join(item);
  }

  const maxItemIndex = result.indexOf(Math.max.apply(null, result));
  return maxItemIndex!=-1 ? concat(maxItemIndex + 1, result[maxItemIndex] ) : ''
}