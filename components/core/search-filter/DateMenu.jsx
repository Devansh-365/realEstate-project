import { Button, Menu, MenuHandler, MenuItem, MenuList } from '@material-tailwind/react'

import React, { useContext } from 'react'

import { RiArrowDownSLine, RiArrowUpSLine, RiCalendarTodoLine } from 'react-icons/ri';
import { HouseContext } from '../../../context/HouseContext';

const DateMenu = () => {
  const { date, setDate, dates } = useContext(HouseContext)

  return (
    <Menu as='div' className='dropdown relative'>
      <MenuHandler>
      <Button
            variant="text"
            className='dropdown-btn w-full text-left '>
                <RiCalendarTodoLine className='dropdown-icon-primary' />
                <div>
                <div className='text-[15px] font-medium leading-tight'>{date}</div>
                <div className='text-[13px]'>Choose move-in date</div>
                </div>
                {false ? (
                <RiArrowUpSLine className='dropdown-icon-secondary' />
                ) : (
                <RiArrowDownSLine className='dropdown-icon-secondary' />
                )}
            </Button>
      </MenuHandler>
      <MenuList>
        <MenuItem>
          {dates.map((date, index) => {
                return (
                    <MenuItem
                    onClick={() => setDate(date)}
                    key={index}
                    className='cursor-pointer hover:text-violet-700 transition'>                
                    {date}
                    </MenuItem>
                );
            })}
        </MenuItem>
      </MenuList>
    </Menu>
  )
}

export default DateMenu