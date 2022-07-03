/*
You have been given a list of products which is having property productName, quantity and description.


PROBLEM STATEMENTS:

1. you need to write a function say, getUniqueProductCount which should return count of each Product(as an object) present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

{
  "TV": 2,
  "AC": 2,
  "FAN": 1
}



2. you need to write a function say, getUniquePrducts which should return an array of objects by grouping the products based on the productName and summing up the quantity for the same products present in the given list of Products considering Product Name as Key.

Sample Output for the given listOfProducts will be :

[{
    productName: "TV",
    quantity: 20,
    description: "television"
  },
  {
    productName: "AC",
    quantity: 10,
    description: "air conditioner"
  },
  {
    productName: "FAN",
    quantity: 10,
     description: "Ceiling Fan"
  }
]

*/




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

/* first question solution */
function getUniqueProductCount(products){
var obj={};
for(var i=0;i<products.length;i++){
if(obj[products[i].productName]===undefined){
    obj[products[i].productName]=1;
}
else{
    obj[products[i].productName]=obj[products[i].productName]+1;
   }
}
return obj;
}
console.log(getUniqueProductCount(listOfProducts));


/* Second question answer */

function getUniquePrducts(products){
var obj={};
var bag=[];
for(var i=0;i<products.length;i++){
if(obj[products[i].productName]===undefined){
    obj[products[i].productName]=products[i];
}
else{
    obj[products[i].productName].quantity=
    obj[products[i].productName].quantity+products[i].quantity;
   }
}
for (let k in obj) {
bag.push(obj[k]);
}
return bag;
}
console.log(getUniquePrducts(listOfProducts));