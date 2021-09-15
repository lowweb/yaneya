function digits (amount, costsArray) {
    if (amount <=0 || amount > 1000000) {
        return ''
      }
      //если есть единица то она всегда максимально возможный вариант дает
      let lastIndexOfOne = costsArray.lastIndexOf(1)
      console.log(lastIndexOfOne)

      if( lastIndexOfOne != -1)
      { 
        return new Array(amount+1).join(lastIndexOfOne + 1)
      }

      let lengthArr = costsArray.length
      console.log(lengthArr)

      let uniqDigit = Array.from(new Set(costsArray))
      console.log(uniqDigit)

      let maxCountOfDigit = []
      let trim = []

      uniqDigit.map(item=> {
          maxCountOfDigit.push(Math.trunc(amount/item))
          trim.push (amount % item)
      })

      uniqDigit.map ((item,index) => {

      })
      console.log(maxCountOfDigit)
      console.log(trim)

      let maxIndex = maxCountOfDigit.indexOf(Math.max.apply(null, maxCountOfDigit))
      console.log(maxIndex)
      let resArr = []
      resArr.push(uniqDigit[maxIndex])
      if (trim[maxIndex]>0) {

            let oneMoreTrimDigit = uniqDigit.find(item=> item === uniqDigit[maxIndex] + trim[maxIndex])
            console.log(oneMoreTrimDigit)
           if (  oneMoreTrimDigit != undefined) {
               console.log('a')
               resArr.push(uniqDigit.find(item => item === oneMoreTrimDigit))
           }
             
      }


      //делаем set, сортируем по возрастанию находим колво символом, 
    //   создаем масивы с максимольно возможными колвом цифр для каждого элемента
    // создаем массив делния по остатку чтобы понять укладывается ли целое число
    //   если не укладывается ищем число подходяшее по остатку
    // имея set из уникальных чисел проходимся по изначальному массивус конца lastindexoff начиная с max
    // формируем выходную строку

      console.log(resArr)



    
}

// digits(5,[5,4,3,2,1,2,3,4,5]);
digits(11,[2,2,2,3,5]);
// console.log(digits(5,[5,4,3,2,1,2,3,4,5]))


module.exports = function (amount, costsArray) {
    if (amount <=0 || amount > 1000000) {
      return ''
    }
  
  
    let result = []
    costsArray.map((item,index,array) => {
  
      function concat (item, n) {
        return item + Array(n).join(item);
      }
  
  
      if (item >= 0 && item <= 100000 && Math.trunc(amount/item) > 0) {
        result.push(concat(index+1, Math.trunc(amount/item)))
      }
      else {
        result.push(0)
      }
  
      
    })
  
    return Math.max.apply(null, result) != 0 ? String(Math.max.apply(null, result)) : ''
  }