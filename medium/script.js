// medium ----------------------------

function sharePizza(numOfSlices, numOfPeople) {
    const slicesPerPerson = numOfSlices / numOfPeople;
    return "Each person gets " + slicesPerPerson.toFixed(2) + " from our " + numOfSlices + " slice pizza.";
  };
  
  console.log(sharePizza(8, 2)); 
  console.log(sharePizza(8, 3)); 
  console.log(sharePizza(21, 20));
  console.log(sharePizza(10, 3)); 

