import React, {useState}from 'react'
import { mealData } from '../data/data'
import {ArrowSmRightIcon} from '@heroicons/react/outline'

const Meals = () => {
    const [foods, setFoods] = useState(mealData)
    const filterCat = (category) =>{
        setFoods(
            mealData.filter((item) =>{
                return item.category === category
            })
        )
    }
  return (
    <div className='max-w-[1520px] m-auto px-4 py-12'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>Our Main Menu</h1>
        <div className='flex flex-col lg:flex-row justify-center'>
            <div className='flex justify-center md:justify-center'>
                <button onClick={()=>setFoods(mealData)} className='m-1 px-3 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>All</button>
                <button onClick={()=>filterCat("pizza")}  className='m-1 px-3 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Pizza</button>
                <button onClick={()=>filterCat("chicken")} className='m-1 px-3 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Chicken</button>
                <button onClick={()=>filterCat("salad")} className='m-1 px-3 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700'>Salad</button>
            </div>
        </div>
        <div className='grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4 '>
            {
                foods.map((item)=>(
                    <div key={item.id} className='border-none hover:scale-105 duration-300 hover:cursor-pointer'>
                        <img src={item.image}
                        alt={item.name}
                        className='w-full h-[200px] object-cover rounded-lg'></img>
                        <div className='flex justify-between py-4 px-4'>
                            <p className='font-bold'>{item.name}</p>
                            <p className='bg-orange-700 h-18 w-18 rounded-full font-bold -mt-10 text-white py-4 px-2 border-8'>{item.price}</p>
                        </div>
                        <div className='pl-2 py-4 -mt-7 ml-2'>
                            <p className='flex item-center text-indigo-600'>View More<ArrowSmRightIcon className='w-5 ml-2'/></p>
                        </div>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Meals