import { useDispatch, useSelector } from 'react-redux'
import Router from './config/Router'

const App = () => {
  const darkMode =useSelector((state)=>state.ToggleReducer.darkMode)
  return (
    <div style=
    {
      {
      background : darkMode? "#2C2C29" : "",
      color      : darkMode? "white"   : ""
      }
    }
    >
      <Router/>
    </div>
  )
}

export default App
