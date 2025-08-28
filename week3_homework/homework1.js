//workshop 3.1
score = 70
if (score >= 80 ){
    console.log('Grade : A')
}
if (score >= 70 && score <= 79){
    console.log('Grade : B')
}
if(score >= 60 && score <= 69){
    console.log('Grade : C')
}
if(score <= 59){
    console.log('Grade : F')
}

//workshop 3.2
let productPrice = 200
let discountPercentage = 10
if ((productPrice - (productPrice * (discountPercentage/100) ) ) > 500 ){
    let totalprice = (productPrice -discountPercentage) - (productPrice * 10/100)
    console.log('price : ',totalprice)
    
}
else if((productPrice - (productPrice * (discountPercentage/100) ) ) <= 500 && (productPrice - (productPrice * (discountPercentage/100) ) ) > 0 ){
    price = (productPrice - (productPrice * (discountPercentage/100))) + 50
    console.log('price : ',price)
}

else{
    price= 0 
    console.log('price : ' ,price)
}