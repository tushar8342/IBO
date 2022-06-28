const listOfProducts = [{
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "TV",
    quantity: 10,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 5,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
    description: "Ceiling Fan"
  }
];

//-----------------------PROBLEM STATEMENTS: 1 --------------------------------------------------------
const obj = {};
for(let i = 0;i<listOfProducts.length;i++){
  if (obj[listOfProducts[i].productName] === undefined) {
    obj[listOfProducts[i].productName] = 1;
  } 
  else {
    obj[listOfProducts[i].productName]++;
  } 
}
console.log(obj)


//-----------------------PROBLEM STATEMENTS: 1 --------------------------------------------------------

const unique = [...new Set(listOfProducts.map(item => item.productName))];
let arr = []
for(let i = 0;i<unique.length;i++){
  let obj = {}
  for(let j = 0;j<listOfProducts.length;j++){
    if(unique[i]===listOfProducts[j].productName){
      if (Object.keys(obj).length === 0) {
        obj = listOfProducts[j];
      } 
      else {
        obj.quantity+=listOfProducts[j].quantity;
      } 
    }
  }
  arr.push(obj);
}
console.log(arr);