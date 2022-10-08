import { useState } from "react"
import { MdDarkMode, MdLightMode } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { setToggle } from "../store/action/Index"
const Toggle = () => {
   const darkMode =useSelector((state)=>state.ToggleReducer.darkMode)
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setToggle())
    }

    return (
        <div onClick={handleClick} >

            <h2  >
                {
                    darkMode  ? ( <MdLightMode  /> ) : (       <MdDarkMode />   )
                }

            </h2>
        </div>
    )
}

export default Toggle
