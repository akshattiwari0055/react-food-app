import React, { useContext } from 'react'
import Nav from '../components/Nav'
import Categories from '../Category'
import Card from '../components/Card'
import { food_items } from '../food'
import { dataContext } from '../context/UserContext'
import { ImCross } from "react-icons/im";
import Card2 from '../components/Card2'
import { useSelector } from 'react-redux'
import { toast } from 'react-toastify'

function Home() {

  let { foodData, setFoodData, input,showCart, setShowCart } = useContext(dataContext)

  function filter(category) {
    if (category === "All") {
      setFoodData(food_items)
    } else {
      let newList = food_items.filter(
        (item) => item.food_category === category
      )
      setFoodData(newList)
    }
  }
let items = useSelector(state=>state.cart)
let subtotal = items.reduce((total,item)=>total+item.qty*item.price,0)
let deliveryfee = 20;
let taxes = subtotal*0.5/100;
let total = Math.floor(subtotal+deliveryfee+taxes);
console.log(items)
  return (
    <div className='bg-slate-200 w-full min-h-[100vh]'>
      <Nav />

      {/* Show categories only when search is empty */}
      {!input && (
        <div className='flex flex-wrap justify-center items-center gap-6 w-full'>
          {Categories.map((category) => {
            return (
              <div
                key={category.id}
                onClick={() => filter(category.name)}
                className='w-[115px] h-[125px] md:w-[140px] md:h-[150px] bg-white flex flex-col items-start gap-5 p-5 font-bold md:text-[20px] text-[12px] text-gray-400 rounded-lg shadow-md hover:bg-green-200 hover:shadow-2xl cursor-pointer transition-all duration-500'
              >

                {category.icon}
                <p>{category.name}</p>
              </div>
            )
          })}
        </div>
      )}
      
      {/* Always show food items */}
      <div className='w-full flex flex-wrap gap-5 px-5 justify-center items-center pt-8 pb-8'>
        {foodData.length>1?   foodData.map((item) => {
          return (
            <Card
              key={item.id}
              name={item.food_name}
              image={item.food_image}
              id={item.id}
              price={item.price}
              type={item.food_type}
            />
          )
        }):<div className='text-center text-2xl text-green-500 font-semibold pt-5'>No Dish Found</div>}

      </div>
      <div className={`w-full md:w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 transition-all duration-500 flex flex-col items-center overflow-auto ${showCart?"translate-x-0":"translate-x-full"}`}>
        <header className='w-[100%] flex justify-between items-center '>
            <span className='text-green-400 text-[18px] font-semibold'>Order Items</span>
            <ImCross className='w-[30px] h-[20px] cursor-pointer text-red-400 text-[18px] font-semibold' onClick={()=>{
                setShowCart(false)
            }}/>
        </header>
        {items.length>0?<>
        <div className='w-full mt-8 flex flex-col gap-8 items-center'>
            {items.map((item)=>(
                <Card2 name = {item.name} price={item.price} image={item.image}
                id={item.id} qty={item.qty}/>
            ))}
        </div>
        <div className='w-full border-t-2 border-gray-400 border-b-2 mt-7 flex flex-col gap-2 p-4 text-lg'>
            <div className='w-full flex justify-between'>
                <span className='text-xl text-gray-600 font-semibold'>Subtotal</span>
                <span className='text-green-400 font-semibold'>Rs {subtotal}/-</span>
            </div>
             <div className='w-full flex justify-between'>
                <span className='text-xl text-gray-600 font-semibold'>Delivery Fees</span>
                <span className='text-green-400 font-semibold'>Rs {deliveryfee}/-</span>
            </div>
            <div className='w-full flex justify-between'>
                <span className='text-xl text-gray-600 font-semibold'>Tax</span>
                <span className='text-green-400 font-semibold'>Rs {taxes}/-</span>
            </div>

        </div>
            <div className='w-full flex justify-between text-lg p-5'>
                <span className='text-xl text-gray-600 font-semibold'>Total</span>
                <span className='text-green-400 font-semibold'>Rs {total}/-</span>
            </div>
            <button className='w-[80%] p-4 bg-green-300 rounded-lg text-white hover:bg-green-400 transition-all cursor-pointer' onClick={()=>{
                toast.success("Order Placed")
            }}>Place Order</button>
            </> : <div className='text-center text-2xl text-green-500 font-semibold pt-5'>Empty Cart...</div>
            }

      </div>
    </div>
  )
}

export default Home