import React , { useState } from 'react'

interface Content {
    title : string,
    children: React.ReactNode;
}

const Navbar : React.FC<Content> = ({title , children}) => {

    const [open , Setopen] = useState(false)
    const[button , SetButton] = useState('☰')

    const handleCick = () => {
        Setopen(!open)
        if (button == '☰'){
            SetButton('☓')
        }else{
            SetButton('☰')
        }

    }
    return(
        <div className='h-screen w-screen'>
            <nav className='flex flex-row bg-white w-screen max-h-[320px] top-0 left-0 relative md:p-[20px] justify-center shadow-xl p-[10px] flex-wrap '>
                <h1 className='font-bold  text-[30px] self-center text-blue-700'>MySite</h1>
                <div className='hidden md:flex flex-row gap-[80px]  ml-auto mr-10 '>
                    <a href="" className='text-black text-[20px] self-center hover:text-blue-600'>Home</a>
                    <a href="" className='text-black text-[20px] self-center hover:text-blue-600'>About</a>
                    <a href="" className='text-black text-[20px] self-center hover:text-blue-600'>Service</a>
                    <a href="" className='text-black text-[20px] self-center hover:text-blue-600'>Contact</a>
                </div>
                <button className='md:hidden w-[50px] h-[50px] self-center ml-auto mr-[10px] bg-gray-300 text-center p-[2px] rounded-md '  onClick={() => handleCick()}>{button}</button> 
                
                <div className={`md:hidden flex flex-col gap-[25px] w-full mt-[20px] ml-[5px] overflow-hidden transition-all duration-10 00 ease-in-out
    ${open ? "max-h-96 opacity-100" : "max-h-0 opacity-0"}
  `}
>
                    <a href="" className='text-black text-[16px] text-left font-normal hover:text-blue-600'>Home</a>
                    <a href="" className='text-black text-[16px] text-left font-normal hover:text-blue-600'>About</a>
                    <a href="" className='text-black text-[16px] text-left font-normal hover:text-blue-600'>Service</a>
                    <a href="" className='text-black text-[16px] text-left font-normal hover:text-blue-600'>Contact</a>
                </div> 
                  
            </nav>
            
            

            <div className="mt-[150px] max-w-screen text-left md:mx-[100px] mx-[20px]">
                <h1 className="text-[30px] md:text-[50px] font-bold ">{title}</h1><br />               
                <p className='md:text-[20px]'>{children}</p>
            </div>
        </div>
    )
}

export default Navbar