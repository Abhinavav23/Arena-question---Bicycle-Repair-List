import React from 'react'
import { useDispatch } from 'react-redux'
import { repairRemoved, repairUpdated } from '../actions'

export const Bicycle = ({owner, model, description, id}) => {
    const dispatch = useDispatch()
  return (
    <section>
        <div>Owner: {owner}</div>
        <div>Model: {model}</div>
        <div>Description: {description}</div>
        <button onClick={() => dispatch(repairUpdated(id))}>update</button>
        <button onClick={() => dispatch(repairRemoved(id))}>delete</button>
        <button>done</button>
    </section>
  )
}
