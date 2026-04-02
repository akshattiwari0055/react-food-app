import React, { useContext, useEffect } from 'react'
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { FaShoppingBag } from "react-icons/fa";
import { dataContext } from '../context/UserContext';
import { food_items } from '../food';
import { useSelector } from 'react-redux';

function Nav() {
  let { input, setInput, setFoodData, setShowCart} = useContext(dataContext)

  useEffect(() => {
    let newList = food_items.filter((item) => {
      return item.food_name.toLowerCase().includes(input.toLowerCase())
    })

    setFoodData(newList)

  }, [input])
  let items = useSelector(state=>state.cart)
  return (
    <div className='w-full h-[100px] flex justify-between items-center px-5 md:px-8  ' >
        <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md hover:shadow-xl'>
            <MdFastfood className='h-[30px] w-[30px] text-green-500' />
        </div>
        <form className = 'w-[45%] h-[60px] bg-white flex items-center px-5 gap-5 rounded-md shadow-md md:70%' onSubmit={(e)=>e.preventDefault()}>
            <FaSearch className='text-green-500 w-[20px] h-[20px]' />
            <input className='outline-none w-[100%] text-[15px] md:text-[20px]' type="text" placeholder="Search items" onChange={(e)=>setInput(e.target.value)} value = {input} />
        </form>
        <div onClick={()=>{
            setShowCart(true)
        }} className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-md hover:shadow-xl relative '>
            <span className='absolute top-0 right-0 bg-red-500 text-white rounded-full w-[20px] h-[20px] flex justify-center items-center text-[12px]'>
                {items.length}
            </span>
            <FaShoppingBag className='h-[30px] w-[30px] text-green-500 cursor-pointer'/>
        </div>
    </div>
  )
}

export default Nav