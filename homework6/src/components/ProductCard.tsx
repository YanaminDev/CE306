import React from 'react'
import Button from './Button'

interface ProductCardProps {
    imageUrl : string ,
    title : string,
    description : string,
    price : number,

}

const ProductCard : React.FC<ProductCardProps> = ({imageUrl , title , description , price}) => {
    const onAddToCart = () => {
        alert('Add To Cart')
    }

    return(
        <div className='flex  flex-col md:w-[360px] md:h-[600px]   justify-center gap-3 p-[20px] rounded-xl border border-gray-300 flex-wrap shadow-xl bg-white shadow-black/60 w-full  h-full '>
            <img src={imageUrl || 'https://www.finearts.cmu.ac.th/wp-content/uploads/2021/07/blank-profile-picture-973460_1280-1.png'} alt='' className='w-full h-[220px] object-cover  self-center rounded-lg'></img>
            <p className='self-start text-[25px] font-bold '>{title}</p>
            <p className='text-start indent-4'>{description}</p>
            <p className='mt-auto self-start text-blue-600 font-bold text-[22px]'>${price}</p>

            <Button variant='primary' size='lg' onClick={onAddToCart}>Add To Cart</Button>

        </div>
    )
}

export default   ProductCard
