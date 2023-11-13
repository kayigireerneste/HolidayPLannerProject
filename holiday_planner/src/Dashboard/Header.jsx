import "../DashboardCSS/DashboardNavBar.css"
import { useState } from "react"
import {BsFillBellFill, BsFillEnvelopeFill, BsPersonCircle, BsSearch, BsJustify} from 'react-icons/bs'


function Header() {

    const [showSearch, setShowSearch] = useState(false)

    const ShowSearchField = () => {
          setShowSearch(true)
    }


  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon'/>
        </div>
        <div className='header-left'>
            <BsSearch onClick={ShowSearchField} className='icon'/>
            { showSearch && (
                <input type="search" name="search" id="searchInput"/> 
            )}
        </div>
        <div className='header-right'>
            <BsFillBellFill className='icon'/>
            <BsFillEnvelopeFill className='icon'/>
            <BsPersonCircle className='icon'/>
        </div>
    </header>
  )
}

export default Header
