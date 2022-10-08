import { MdDarkMode, MdLightMode } from "react-icons/md"
import { useDispatch, useSelector } from "react-redux"
import { setToggle } from "../store/action/Index"
const Toggle = () => {
    const dispatch = useDispatch();
    const handleClick = () => {
        dispatch(setToggle())
    }
    return (
        <div >

            <h2 onClick={handleClick} >

                <MdLightMode  />
                <MdDarkMode  />

            </h2>
        </div>
    )
}

export default Toggle
