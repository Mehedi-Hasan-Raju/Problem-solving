//* Grouping and Aggregating Data

// Scenario: Count every survey and group by response

//? input
const surveyResponses = [
  "A",
  "C",
  "B",
  "A",
  "B",
  "B",
  "C",
  "A",
  "B",
  "D",
  "A",
  "C",
  "B",
  "A",
];

const count = surveyResponses.reduce((table, Response) => {
    if(table[Response]) {
        table[Response] = table[Response] + 1;
    }else{
        table[Response] = 1;
    }
    return table;
}, {});
console.log(count);



//* Grouping and Aggregating Data

// Scenario: You have a flat array of sales data, and you need to group the sales by category,
// calculating the total revenue and the number of items sold for each.

const sales = [
  { category: "Electronics", item: "Laptop", price: 1200, quantity: 1 },
  { category: "Books", item: "JS Basics", price: 30, quantity: 2 },
  { category: "Electronics", item: "Mouse", price: 25, quantity: 2 },
  { category: "Home", item: "Chair", price: 150, quantity: 1 },
  { category: "Books", item: "React Deep Dive", price: 50, quantity: 1 },
  { category: "Electronics", item: "Keyboard", price: 80, quantity: 1 },
];

const totalSelsbycatagory = sales.reduce((table, sale)=> {
   const {category, price, quantity } = sale;

   if(!table[category]) {
    table[category] = {
        totalRevenue: 0,
        itemCount: 0,
    };
   }

   table[category].totalRevenue += price * quantity;
   table[category].itemCount += quantity;
   
   return table;
},{})

console.log(totalSelsbycatagory);