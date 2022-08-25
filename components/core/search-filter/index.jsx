import React, { useContext } from 'react'

import DateMenu from './DateMenu'
import LocationMenu from './LocationMenu'
import PriceMenu from './PriceMenu'
import PropertyMenu from './PropertyMenu'

import  {HouseContext} from '../../../context/HouseContext'

import { RiSearch2Line } from 'react-icons/ri';

const SearchFilter = () => {

  const { handleClick } = useContext(HouseContext)

  return (
    <div className=' mx-auto flex flex-col lg:flex-row justify-between gap-4 lg:gap-x-3 lg:-top-4 lg:shadow-1 lg:bg-transparent lg:backdrop-blur rounded-lg'>
        <LocationMenu />
        <DateMenu />
        <PriceMenu />
        <PropertyMenu />
        <button
            onClick={() => {
            handleClick();
            }}
            className='bg-violet-700 hover:bg-violet-800 transition w-full lg:max-w-[142px] h-16 rounded-lg flex justify-center items-center text-white text-lg'
        >
            <RiSearch2Line />
      </button>
    </div>
  )
}

export default SearchFilter