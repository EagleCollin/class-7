drinks = [
    { name: "lemonade", price: 50 },
    { name: "lime", price: 10 },
    { name: "whiskey", price: 40},
    { name: "water", price: 30},
  ];

 const drinkPrice = drinks.sort((a,b) => a.price - b.price)
 console.log(drinkPrice)