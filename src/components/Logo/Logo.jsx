import React from "react";
import Tilt from 'react-parallax-tilt';
import face from './face logo.png';
import './Logo.css'

const Logo = () => {
    return (
        <div className="ma4 mt0" style={{ height: '150px', width: '150px' }}>
            <Tilt>
                <div className="pa3 bg-custom br2 shadow-4" style={{ height: '150px'}}>
                    <img style={{paddingTop:'10px'}} src={face} alt="Logo"/>
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;