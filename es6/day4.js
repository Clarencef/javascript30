import '../stylesheets/javascript30.scss';

const inventors = [{
  first: 'Albert',
  last: 'Einstein',
  year: 1879,
  passed: 1955
}, {
  first: 'Isaac',
  last: 'Newton',
  year: 1643,
  passed: 1727
}, {
  first: 'Galileo',
  last: 'Galilei',
  year: 1564,
  passed: 1642
}, {
  first: 'Marie',
  last: 'Curie',
  year: 1867,
  passed: 1934
}, {
  first: 'Johannes',
  last: 'Kepler',
  year: 1571,
  passed: 1630
}, {
  first: 'Nicolaus',
  last: 'Copernicus',
  year: 1473,
  passed: 1543
}, {
  first: 'Max',
  last: 'Planck',
  year: 1858,
  passed: 1947
}, {
  first: 'Katherine',
  last: 'Blodgett',
  year: 1898,
  passed: 1979
}, {
  first: 'Ada',
  last: 'Lovelace',
  year: 1815,
  passed: 1852
}, {
  first: 'Sarah E.',
  last: 'Goode',
  year: 1855,
  passed: 1905
}, {
  first: 'Lise',
  last: 'Meitner',
  year: 1878,
  passed: 1968
}, {
  first: 'Hanna',
  last: 'Hammarström',
  year: 1829,
  passed: 1909
}];

const flavours = ['Chocolate Chip', 'Kulfi', 'Caramel Praline', 'Chocolate', 'Burnt Caramel', 'Pistachio', 'Rose', 'Sweet Coconut', 'Lemon Cookie', 'Toffeeness', 'Toasted Almond', 'Black Raspberry Crunch', 'Chocolate Brownies', 'Pistachio Almond', 'Strawberry', 'Lavender Honey', 'Lychee', 'Peach', 'Black Walnut', 'Birthday Cake', 'Mexican Chocolate', 'Mocha Almond Fudge', 'Raspberry'];

const people = ['Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'];

function createTd(sourceArr,elemToInsert) {
  const htmlString = sourceArr.reduce((sum,item) => {
    return sum += `<tr><td>${item.first}</td><td>${item.last}</td><td>${item.year}</td><td>${item.passed}</td></tr>`
  },"");
  elemToInsert.innerHTML = htmlString;
  return htmlString; 
} 

// 1. filter the list of inventors for those who were born in the 1500's
const born1500 = inventors.filter((inventor, i) => {
  return inventor.year >= 1500 && inventor.year < 1600;
});
const InsertElem1 = document.querySelector('.table1_body');
createTd(born1500,InsertElem1);


// 2.give us an array of the inventors first and last names
const fullName = inventors.map((inventor) => {
  return `${inventor.first} ${inventor.last}`;
});

console.log(fullName);

// 3. sort the inventors by birthdate, oddest to youngest
const sortAge = inventors.sort((prev, next) => {
  return prev.year - next.year;
});
const InsertElem2 = document.querySelector('.table2_body');
createTd(sortAge,InsertElem2);


// 4. how many years did all the inventors live?
const totalAge = inventors.reduce((sum, inventor) => {
  return sum += (inventor.passed - inventor.year);
}, 0);

console.log(totalAge);

// 5. sort the inventors by year lived
const sortByLived = inventors.sort((prev, next) => {
  return (next.passed - next.year) - (prev.passed - prev.year);
});
const InsertElem3 = document.querySelector('.table3_body');
createTd(sortByLived,InsertElem3);

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
const category = document.querySelector('.mw-category');
const pageLink = [...document.querySelectorAll('a')];
const pageLink_de = pageLink.map(function (link, i) {
  return link.textContent;
}).filter(function (link, i) {
  return link.includes('de');
})

console.table(pageLink_de);

// 7. sort Exercise
// Sort the people alphabetically by last name
const sortByName = people.sort((prev, next) => {
  const prevLastName = prev.split(", ")[1];
  const nextLastName = next.split(", ")[1];
  // console.log(nextLastName,prevLastName);
  if (prevLastName > nextLastName) {
    return 1;
  }
  if (prevLastName < nextLastName) {
    return -1;
  }
  return 0;
});

console.table(sortByName);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck'];
const countAppearTime = data.reduce((sum,item)=> {
  if(!sum[item]) {
    sum[item] = 0;
  }
  sum[item]++;
  return sum;
},{});

console.log(countAppearTime);