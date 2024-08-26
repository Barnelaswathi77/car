import React from 'react';
const Header = () => {
    return (
        <>
            <div className="head-container">
                <div className="head-row">
                    <div className="col-md-4 box1">
                        <img className="img-logo" src="//imgd.aeplcdn.com/0x0/cw/static/icons/new-header/logo.svg"/>
                
                    </div>
                    <div className="col-md-4 box1">
                        <p className="heading">NEW CARS</p>
                    </div> 
                    <div className="col-md-4 box1">
                        <p className="heading">USED CARS</p>
                    </div>
                    <div className="col-md-4 box1">
                        <p className="heading">REVIEWS&NEWS</p>
                    </div>
                </div>
                
            </div>
            
        </>     

           
    );
};
export default Header;


