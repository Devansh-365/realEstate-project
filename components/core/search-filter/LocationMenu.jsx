import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'

import React, { useContext, useState } from 'react'

import { RiMapPinLine, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

import { HouseContext } from '../../../context/HouseContext'

const LocationMenu = () => {

  const { country, setCountry, countries } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Menu 
    as='div' 
    className=' dropdown relative '>
        <MenuHandler>
            <Button
            variant="text"
            onClick={() => setIsOpen(!isOpen)}
            className='dropdown-btn w-full text-left '>
                <RiMapPinLine className='dropdown-icon-primary' />
                <div>
                <div className='text-[15px] font-medium leading-tight'>{country}</div>
                <div className='text-[13px]'>Select your place</div>
                </div>
                {isOpen ? (
                <RiArrowUpSLine className='dropdown-icon-secondary' />
                ) : (
                <RiArrowDownSLine className='dropdown-icon-secondary' />
                )}
            </Button>
        </MenuHandler>
        <MenuList className='dropdown-menu'>
            {countries.map((country, index) => {
            return (
                <MenuItem
                
                onClick={() => setCountry(country)}
                key={index}
                className='cursor-pointer hover:text-violet-700 transition'>                
                {country}
                </MenuItem>
            );
            })}
        </MenuList>
    </Menu>
  )
}

export default LocationMenu