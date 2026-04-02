import React from 'react'
import { LuVegan } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";
import {useDispatch} from 'react-redux';
import { AddItem } from '../redux/castSlice';
import { toast } from 'react-toastify';
function Card({name,image,id,price,type}) {
    let dispatch = useDispatch()
  return (
    <div className='w-[300px] h-[400px] bg-white p-3 rounded-lg flex flex-col gap-3 shadow-lg hover:shadow-2xl transition-all hover:border-2 border-green-500'>
        {/* Img div */}
        <div className='w-[100%] h-[60%] overflow-hidden rounded-lg'>
            <img src={image} alt={name} className='object-cover' />
        </div>
        {/* Item_Name */}
        <div className='text-2xl font-semibold'>
            {name}
        </div>
        {/* Price */}
        <div className='w-full flex justify-between items-center'>
            <div className='text-lg font-bold text-green-500 '>
                Rs. {price}/-
            </div>
                <div className='flex justify-center items-center gap-2 text-green-500 text-lg font-semibold'>{type==="veg"?<LuVegan />:<GiChickenOven/>}<span>{type}</span></div>
        </div>
        <button className='w-full p-4 bg-green-300 rounded-lg text-white hover:bg-green-400 transition-all cursor-pointer' onClick={()=>{dispatch(AddItem({id:id,name:name,image:image,price:price,qty:1}))
        toast.success("Item added")}
    }>Add to cart</button>

    </div>
  )
}

export default Card