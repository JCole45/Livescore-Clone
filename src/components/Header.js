import React from 'react'
//import SettingsIcon from '@material-ui/icons/SettingsIcon';
import SearchIcon from '@material-ui/icons/Search';
import SettingsIcon from "@material-ui/icons/Settings"

const Header = () => {
    return (
        <header className="header">
            <SettingsIcon />
            <p> Livescore </p>
            <SearchIcon/>
        </header>
    )
}

export default Header
