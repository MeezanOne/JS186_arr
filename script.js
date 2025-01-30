// const numbers = [1, 2, 3];
// console.log(numbers);

// // const moreNumbers = Array(5, 2);
// // console.log(moreNumbers);

// // const yetMoreNumbers = Array.of(1, 2);
// // console.log(yetMoreNumbers);

// const listItems = document.querySelectorAll('li');
// console.log(listItems);

// const arrayListItems = Array.from(5);
// console.log(arrayListItems);

// const hobbies = ['Cooking', 'Sports'];
// const personalData = [30, 'Max', {moreDetail: []}];

// const analyticsData = [[1, 1.6], [-5.4, 2.1]];

// for (const data of analyticsData) {
//   for (const dataPoint of data) {
//     console.log(dataPoint);
//   }
// }

// console.log(personalData[1]);

// const hobbies = ['Sports', 'Cooking'];
// hobbies.push('Reading');
// hobbies.unshift('Coding');
// const poppedValue = hobbies.pop();
// hobbies.shift();
// console.log(hobbies);

// hobbies[1] = 'Coding';
// // hobbies[5] = 'Reading'; // rarely used
// console.log(hobbies, hobbies[4]);

// hobbies.splice(1, 0, 'Good Food');
// console.log(hobbies);

// const removedElements = hobbies.splice(-2, 1);
// console.log(hobbies);

// const testResults = [1, 5.3, 1.5, 10.99, 1.5, -5, 10];
// // const storedResults = testResults.slice(2);
// const storedResults = testResults.concat([3.99, 2]);

// testResults.push(5.91);

// console.log(storedResults, testResults);
// console.log(testResults.indexOf(1.5));

// console.log(testResults.includes(10.99));
// console.log(testResults.indexOf(10.99) !== -1);

// const personData = [{ name: 'Max' }, { name: 'Manuel' }];
// console.log(personData.indexOf({ name: 'Manuel' }));
// indexOf doesn't work for object

// const manuel = personData.find((person, idx, persons) => {
//   return person.name === 'Manuel';
// });

// manuel.name = 'Anna';

// console.log(manuel, personData);

// const maxIndex = personData.findIndex((person, idx, persons) => {
//   return person.name === 'Max';
// });

// console.log(maxIndex);

// const prices = [10.99, 5.99, 3.99, 6.59];
// const tax = 0.19;
// const taxAdjustedPrices = [];

// // for (const price of prices) {
// //   taxAdjustedPrices.push(price * (1 + tax));
// // }

// prices.forEach((price, idx, prices) => {
//   const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
//   taxAdjustedPrices.push(priceObj);
// });

// console.log(taxAdjustedPrices);

function transformToObjects(numberArray) {
    // Todo: Add your logic
    // should return an array of objects
    return numberArray.map((num)=>{
        return {val:num}
    })
  }
  
  const arr = [1,2,3]
  
  console.log(transformToObjects(arr))
  
  const prices = [10.99, 5.99, 3.99, 6.59];
  const tax = 0.19;
  
  const taxAdjustedPrices = prices.map((price, idx, prices) => {
    const priceObj = { index: idx, taxAdjPrice: price * (1 + tax) };
    return priceObj;
  });
  
  // console.log(prices, taxAdjustedPrices);
  
  
  const sortedPrices = prices.sort((a, b) => {
    if (a < b) {
      return -1;
    } else if (a === b) {
      return 0;
    } else {
      return 1;
    }x
  });
  // console.log(sortedPrices.reverse());
  console.log(sortedPrices);
  
  const filteredArray = prices.filter(p => p > 6);
  
  console.log(filteredArray);
  
  // let sum = 0;
  
  // prices.forEach((price) => {
  //   sum += price
  // });
  
  // console.log(sum);
  
  const sum = prices.reduce((prevValue, curValue) => prevValue + curValue, 0);
  
  console.log(sum);
  
  const data = 'new york;10.99;2000';
  
  const transformedData = data.split(';');
  transformedData[1] = +transformedData[1];
  console.log(transformedData);
  
  const nameFragments = ['Max', 'Schwarz'];
  const name = nameFragments.join(' ');
  console.log(name);
  
  const copiedNameFragments = [...nameFragments];
  nameFragments.push('Mr');
  console.log(nameFragments, copiedNameFragments);
  
  console.log(Math.min(...prices));
  
  const persons = [{ name: 'Max', age: 30 }, { name: 'Manuel', age: 31 }];
  const copiedPersons = persons.map(person => ({
    name: person.name,
    age: person.age
  }));
  
  persons.push({ name: 'Anna', age: 29 });
  persons[0].age = 31;
  
  console.log(persons, copiedPersons);
  

  const num = [1,2,3,4]

const chainingVariable = num.map(num=>num*2).reduce((pre,cur)=>pre+cur,0)
console.log(chainingVariable)

const animeStore = ['jujutsu kaisen', 'One Piece'];
const copiedAnimeStore = [...animeStore];

animeStore.push('Dragon Ball Z');
console.log(animeStore, copiedAnimeStore)


const animeData = [
    { animeName:'Jujutsu Kaisen', rating: 4.6},
    { animeName:'One Piece', rating: 4.3},
    { animeName:'Dragon Ball Z', rating: 5},
]

const copiedAnimeData = [...animeData];

const anotherCopiedAnimeData = animeData.map(anime=>({
    animeData: anime.animeName,
    rating: anime.rating,
}))

animeData[0].rating = 4;
console.log(animeData , copiedAnimeData , anotherCopiedAnimeData);

// Sets & Maps 

// Sets
// const ids = new Set(['Hi', 'from', 'set!']);
// ids.add(2);
// if(ids.has('Hi')){
//   ids.delete('Hi')
// }

// for(const entry of ids.entries()){
//   console.log(entry[0])
// }

// Maps
// const person1 = { name: "Meezan" }
// const person2 = { name: "Piece" }

// const personData = new Map([[person1, [{date: 'yesterday',price:  10}]]]);

// personData.set(person2, [{date: 'two weeks ago', price: 100}]);

// personData.delete(person2)

// console.log(personData.has(person1))
// console.log(personData.get(person2))

// for(const [key, value] of personData.entries()){
//   console.log(key , value)
// }

// for(const key of personData.keys()){
//   console.log(key)
// }

// for(const value of personData.values()){
//   console.log(value)
// }