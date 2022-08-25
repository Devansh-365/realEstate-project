import React, { useContext } from 'react'

import { HouseContext } from '../../../context/HouseContext';

import { ImSpinner2 } from 'react-icons/im';
import Link from 'next/link';
import PropertyCard from './PropertyCard';

const PropertyList = () => {
  const { houses, loading } = useContext(HouseContext)

  if (loading) {
    return (
      <ImSpinner2 className='mx-auto animate-spin text-violet-700 text-4xl mt-[200px]' />
    );
  }

  if (houses.length < 1) {
    return (
      <div className='text-center text-3xl text-gray-400 mt-48'>
        Sorry, nothing was found.
      </div>
    );
  }

  return (
    <section className='mb-20 mt-20'>
      <div className='container mx-auto w-full'>
        <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-14'>
          {houses.map((house, index) => {
            return (
              <a href={`/property/${house.id}`} key={index}>
                <PropertyCard property={house} />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  )
}

export default PropertyList