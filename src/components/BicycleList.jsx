import React from 'react'
import { useSelector } from 'react-redux'
import { Bicycle } from './Bicycle';

export const BicycleList = () => {
    const bicycleList = useSelector((store) => store.bicycle.items);
  return (
    <>
        <h3>BicycleList</h3>
        {
            bicycleList.map((bicycle) => {
                return <Bicycle {...bicycle} key={bicycle.id}/>
            })
        }
    </>
  )
}
