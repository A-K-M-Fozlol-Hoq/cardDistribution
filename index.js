const cardDistribution = (array) => {
  //make serial number to 6 digit
  const makeSixDigit = (number) => {
    const zeroDigit = 6 - number.toString().length;
    let zeros = '';
    for (let i = 0; i < zeroDigit; i++) {
      zeros = zeros + '0';
    }
    return zeros + number;
  };
  //Empty array to return o/p
  let newArray = [];
  let sl = 000000;
  // process all elements of array and push it to newArray
  array.map((element) => {
    sl += 1;
    const cardNumber = `${element.district
      .substring(0, 2)
      .toUpperCase()}${element.currentYear
      .toString()
      .substring(2, 4)}${element.postNo.toString().substring(0, 2)}${
      element.birthYear
    }${makeSixDigit(sl)}`;
    newArray = [
      ...newArray,
      {
        cardNumber: cardNumber,
        gift: `${sl % 2 == 0 ? 'R' : 'W'}`,
        priority: element.priority,
      },
    ];
  });
  // Return newArray after sort by priority number
  return newArray.sort((ele1, ele2) => ele1.priority - ele2.priority);
};

//test case1:

// const result = cardDistribution([
//   {
//     name: 'Mr Rashed',
//     birthYear: 1999,
//     currentYear: 2022,
//     district: 'Dhaka',
//     postNo: 1200,
//     priority: 2,
//   },

//   {
//     name: 'Mr Raju',
//     birthYear: 1995,
//     currentYear: 2022,
//     district: 'Rajshahi',
//     postNo: 1211,
//     priority: 1,
//   },
// ]);
// console.log(result);
