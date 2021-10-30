import React from 'react'
import {IconButton} from '@material-ui/core';
import NavigateNextIcon from '@material-ui/icons/NavigateNext';

const Fixtures = () => {
    return (
        <div>
            <div className="league"> 

                <span className="flag">flag</span>

                <span className="league-details">
                    <p className="league-name">Premier League</p>
                    <p className="league-country">England</p>
                </span>

                <span className="next-button">
                    <IconButton style={{color: "white"}}>
                        <NavigateNextIcon />
                    </IconButton>
                </span>

            </div>
        </div>
    )
}

export default Fixtures
