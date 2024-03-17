import React from 'react';
import logo from '../components/mua-tra-gop-iphone-14-pro-max.jpeg';

const Img = () => {
    return (
        <>
            <style>
                {`
                .img-container {
                    position: relative;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh; /* Cho toàn màn hình */
                }
                
                .tooltip {
                    display: inline-block;
                    position: relative;
                }

                .tooltip::after {
                    content: 'mua trả góp iphone 14 pro max';
                    position: absolute;
                    white-space: nowrap;
                    bottom: 100%;
                    left: 50%;
                    transform: translateX(-50%);
                    visibility: hidden;
                    background-color: black;
                    color: white;
                    text-align: center;
                    border-radius: 6px;
                    padding: 5px 10px;
                    opacity: 0;
                    transition: opacity 0.3s, visibility 0.3s;
                }

                .tooltip:hover::after {
                    visibility: visible;
                    opacity: 1;
                }
            `}
            </style>
            <div className="img-container">
                <div className="tooltip">
                    <a href={logo} download="mua-tra-gop-iphone-14-pro-max.jpeg">
                        <img src={logo} alt="mua trả góp iphone 14 pro max" style={{ maxWidth: '200px', height: 'auto' }} />
                    </a>
                </div>
            </div>
        </>
    );
}

export default Img;
