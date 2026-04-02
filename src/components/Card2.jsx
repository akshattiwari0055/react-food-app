import React from 'react'
import image1 from "../assets/image1.avif"
import { IoTrashBin } from "react-icons/io5";
import { useDispatch } from 'react-redux';
import { DecreamentQty, IncreamentQty, RemoveItem } from '../redux/castSlice';

function Card2({name,id,price,image,qty}) {
    let dispatch = useDispatch()
  return (
    <div className='w-full h-[120px]  p-2 shadow-lg flex justify-between items-center'>
        <div className='w-[60%] h-full  rounded-lg flex gap-5'> 
            <div className='w-[50%] h-full overflow-hidden rounded-lg'>
                <img src={image} alt="" className='object-cover' />
            </div>
            <div className='w-[60%] h-full flex flex-col gap-3'>
                <div className='text-lg text-gray-600 font-semibold'>{name}</div>
                <div className='w-[110px] h-[50px] bg-slate-500 flex rounded-lg overflow-hidden shadow-lg border-2 border-green-400 font-semibold text-xl'>
                    <button className='w-[30%] h-[fill] bg-white justify-center items-center cursor-pointer text-green-400 hover:bg-gray-300' onClick={()=>{qty>1?dispatch(DecreamentQty(id)):1}}>-</button>
                    <span className='w-[40%] h-[fill] bg-slate-200 flex justify-center items-center justify-center items-center text-green-400'>{qty}</span>
                    <button className='w-[30%] h-[fill] bg-white cursor-pointer text-green-400 hover:bg-gray-300' onClick={()=>dispatch(IncreamentQty(id))}>+</button>
                </div>
            </div>
        </div>
        <div className='flex flex-col justify-start items-end gap-6'>
            <span className='text-xl text-green-400  font-semibold'>Rs {price}/-</span>
            <IoTrashBin onClick={()=>dispatch(RemoveItem(id))}  className=' cursor-pointer h-[30px] w-[30px] font-semibold text-red-500'/>
        </div>
    </div>
  )
}

export default Card2