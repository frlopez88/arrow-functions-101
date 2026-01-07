const bills = [
    {
        concept: "Food",
        price: 10
    }, 
    {
        concept: "movies",
        price: 5
    },
    {
        concept: "Uber",
        price : 15
    }
];

const bill15Percent = bills.map(item => {

    let tax = item.price * .15;
    let price = item.price + tax;
    let concept = item.concept;

    let newItem = {
        concept,  
        price
    }

    return newItem

} )

console.log(bill15Percent)