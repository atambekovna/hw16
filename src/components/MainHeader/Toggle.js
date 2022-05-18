import { useContext } from 'react'
import AutnConText from '../../store/ThemeProvider'
import './Toggle.css'

const Toggle = () => {
    const conText = useContext(AutnConText)
    return (
        <label class="switch">
            <input type="checkbox" onClick={() => conText.onSwicher((prev) => !prev)}  />
            <span className="slider"></span>
        </label>
    )
}

export default Toggle