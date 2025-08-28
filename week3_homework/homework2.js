//workshop 3.2
let productPrice = 5000
let discountPercentage = 50
if ((productPrice - (productPrice * (discountPercentage/100) ) ) > 500 ){
    let priceAfterDiscount = (productPrice -(productPrice*discountPercentage/100)) 

    let totalprice = priceAfterDiscount - (priceAfterDiscount * 10/100)
    console.log('price : ',totalprice)
    

}
else if((productPrice - (productPrice * (discountPercentage/100) ) ) <= 500 && (productPrice - (productPrice * (discountPercentage/100) ) ) > 0 ){
    let price = (productPrice - (productPrice * (discountPercentage/100))) + 50
    console.log('price : ',price)
}

else{
    let price= 0 
    console.log('price : ' ,price)
}