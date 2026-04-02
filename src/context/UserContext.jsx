import React, { useState } from 'react'
import { createContext } from 'react'
import { food_items } from '../food'
export const dataContext=createContext()
function UserContext({children}) {
    let [input,setInput] = useState("")
    let [foodData, setFoodData] = useState(food_items)
    let [showCart, setShowCart] = useState(false)
    let data = {
        input,
        setInput,
        foodData,
        setFoodData,
        showCart,
        setShowCart
    }
  return (
    <div>
        <dataContext.Provider value = {data}>
        {children}
        </dataContext.Provider>
    </div>
  )
}

export default UserContext