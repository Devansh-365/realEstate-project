import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';

import React, { useContext, useState } from 'react'

import { HouseContext } from '../../../context/HouseContext';

import {RiWallet3Line, RiArrowDownSLine, RiArrowUpSLine} from 'react-icons/ri';

const PriceMenu = () => {
  const { price, setPrice } = useContext(HouseContext);
  const [isOpen, setIsOpen] = useState(false);

  const prices = [
    {
      value: 'Price range (any)',
    },
    {
      value: '100000 - 130000',
    },
    {
      value: '130000 - 160000',
    },
    {
      value: '160000 - 190000',
    },
    {
      value: '190000 - 220000',
    },
    {
      value: '20000 - 30000',
    },
    {
      value: '30000 - 40000',
    },
  ];
  return (
    <Menu
    as='div' 
    className='dropdown relative '>
        <MenuHandler>
            <Button
            variant="text"
            onClick={() => setIsOpen(!isOpen)}
            className='dropdown-btn w-full text-black'>
                <RiWallet3Line className='dropdown-icon-primary' />
                <div>
                <div className='text-[15px] font-medium leading-tight'>{price}</div>
                <div className='text-[13px]'>Choose price range</div>
                </div>
                {isOpen ? (
                <RiArrowUpSLine className='dropdown-icon-secondary' />
                ) : (
                <RiArrowDownSLine className='dropdown-icon-secondary' />
                )}
            </Button>
        </MenuHandler>
        <MenuList className='dropdown-menu'>
            {prices.map((price, index) => {
            return (
                <MenuItem             
                onClick={() => setPrice(price.value)}
                key={index}
                className='cursor-pointer hover:text-violet-700 transition'
                >
                {price.value}
                </MenuItem>
            );
            })}
        </MenuList>
    </Menu>
  )
}

export default PriceMenu