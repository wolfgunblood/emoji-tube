import React, { useEffect } from 'react'
import "./Loader.scss"

const Loader = () => {

    useEffect(() => {

        setTimeout(() => {
            const loader = document.getElementById("loader");
            loader.classList.remove("booting-loader");
            loader.classList.add("vanished");
        }, 3000);
        // setTimeout(() => {
        //     dispatch({
        //         type: "booting/FINISH",
        //     })
        // }, 4350);

    }, []);

    return (
        <div id='loader' className='loader'>

            <div className="wrapper" >
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="circle"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
                <div className="shadow"></div>
            </div>
        </div>
    )
}

export default Loader