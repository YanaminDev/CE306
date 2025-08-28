let product = [
    {
        price : 1000,
        discount_percentage: 50 //500

    },
    {
        price : 350,
        discount_percentage: 10 //315
    },
    {
        price:1000,
        discount_percentage:90 //100
    },
    {
        price :200,
        discount_percentage:60 //80
    },
    {
        price : 300,
        discount_percentage:40 //180

    }

]

function calculateTotal(){
    let total_price = 0
    let after_discount_price = 0
    product.forEach((product) => {
        after_discount_price = product.price - (product.price * (product.discount_percentage/100))
        total_price += after_discount_price
    })
    console.log(`Total price after discount :  ${total_price}`)
    
}

calculateTotal()