import React, { useRef } from 'react'
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { repairAdded } from '../actions';

export const BicycleForm = () => {
    const editMode = useSelector(store => store.editMode)
    const dispatch = useDispatch()
    const ownerRef = useRef();
    const modelRef = useRef();
    const descriptionRef = useRef();

    const addItem =(e) => {
        e.preventDefault();
        let bicycleInfo = {}
        bicycleInfo[ownerRef.current.name] = ownerRef.current.value
        bicycleInfo[modelRef.current.name] = modelRef.current.value
        bicycleInfo[descriptionRef.current.name] = descriptionRef.current.value
        console.log(bicycleInfo);
        if(editMode){
            // dispatch(repairUpdate(bicycleInfo))
        }else{
            dispatch(repairAdded(bicycleInfo))
        }
    }

  return (
    <form onSubmit={addItem}>
        <label htmlFor="owner-text-box">Owner: </label>
        <input type="text" name="owner" id="owner-text-box" ref={ownerRef}/>
        <br/>  <br/>
        <label htmlFor=" model-text-box">Model: </label>
        <input type="text" name="model" id=" model-text-box" ref={modelRef}/>
        <br/>  <br/>
        <label htmlFor="description-text-box">Description: </label>
        <input type="text" name="description" id="description-text-box" ref={descriptionRef}/>
        <br/>  <br/>
        <button>+</button>
    </form>
  )
}
