import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react';

import React, { useContext, useState } from 'react'

import { HouseContext } from '../../../context/HouseContext';

import { RiHome5Line, RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri';

const PropertyMenu = () => {
    const { property, setProperty, properties } = useContext(HouseContext);
    const [isOpen, setIsOpen] = useState(false);
    return (
      <Menu as='div' className='dropdown relative'>
        <MenuHandler>
            <Button
            variant="text"
            onClick={() => setIsOpen(!isOpen)}
            className='dropdown-btn w-full text-left text-black'
            >
            <RiHome5Line className='dropdown-icon-primary' />
            <div>
                <div className='text-[15px] font-medium leading-tight'>
                {property}
                </div>
                <div className='text-[13px]'>Choose property type</div>
            </div>
            {isOpen ? (
                <RiArrowUpSLine className='dropdown-icon-secondary' />
            ) : (
                <RiArrowDownSLine className='dropdown-icon-secondary' />
            )}
            </Button>
        </MenuHandler>
  
        <MenuList className='dropdown-menu'>
          {properties.map((property, index) => {
            return (
              <MenuItem
                
                onClick={() => setProperty(property)}
                key={index}
                className='cursor-pointer hover:text-violet-700 transition'
              >
                {property}
              </MenuItem>
            );
          })}
        </MenuList>
      </Menu>
    );
}

export default PropertyMenu