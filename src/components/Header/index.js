import React from 'react'
import "./styles.css"
import logo from "../../assests/long-logo.png"
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import  LanguageIcon from '@mui/icons-material/Language';
import BasicMenu from './ProfileMenu';
import SimpleBottomNavigation from './BottomNav'
import MobileSearchBar from '../MobileSearchBar';

function index() {
  return (
    <div className='navbar'>
        <img src={logo} alt="logo" className="navbar-logo" />
        <div className='search-bar'>
            <div className='search-bar-text'>Anywhere</div>
            <div className='search-bar-text'>Any Week</div>
            <div className='search-bar-text2'>Add guests</div>
            <div className='search-icon-div'> <SearchRoundedIcon className='search-icon'/>
            </div>
        </div>
        <div className='profile-container'>
          <div className='airbnb-your-home'>Airbnb your home</div>
          <div className='airbnb-your-home'><LanguageIcon sx={{fontSize:"1.2rem"}}/></div>
          <div className='profile-div'>
            <BasicMenu />
          </div>
        </div>
        {/*<MobileSearchBar />*/}
        <SimpleBottomNavigation />
    </div>
  )
}

export default index