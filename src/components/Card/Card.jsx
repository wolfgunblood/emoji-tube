import React, { useState } from 'react';
import "./Card.scss";
import { AiOutlineExpandAlt } from 'react-icons/ai';
import { IconContext } from "react-icons";


const Card = ({ emoji,expand,setExpand,setSelectedEmoji,selectedEmoji,setBackgroundColor }) => {

    const { category, group, htmlCode, name, unicode } = emoji;
    // console.log(htmlCode)
    // console.log(unicode)
    const decimalValue = parseInt(htmlCode[0].substr(2, htmlCode[0].length - 3), 10);
    const emojiCode = String.fromCodePoint(decimalValue);
    const categoryUpper = category.toUpperCase();
    const groupUpper = group.toUpperCase();
    const nameUpper = name.charAt(0).toUpperCase() + name.slice(1);

    // console.log(emojiCode);
    let categoryClass;

    if (category === "smileys and people") {
        categoryClass = "smileys";
    } else if (category === "animals and nature") {
        categoryClass = "animals";
    } else if (category === "food and drink") {
        categoryClass = "food";
    } else if (category === "travel and places") {
        categoryClass = "travel";
    } else if (category === "activities") {
        categoryClass = "activities";
    } else if (category === "objects") {
        categoryClass = "objects";
    } else if (category === "symbols") {
        categoryClass = "symbols";
    } else if (category === "flags") {
        categoryClass = "flags";
    }


   

    const handleExpand = () => {
        setExpand(true)
        setSelectedEmoji(emoji)
        setBackgroundColor(categoryClass)
    };  

    return (
        <div className={`card-container ${categoryClass}`}>
            <div className='card-content'>
                <p className='name'>{` ${nameUpper}`}</p>
                <div className='details'>
                    {/* <p className='html-code'>{`HTML Code : ${htmlCode}`}</p> */}
                    <p className='html-code'>
                        HTML Code
                        {
                            htmlCode.map((code, index) => (
                                // <button key={index} className="htmlcode-btn">
                                //     {code}
                                // </button>
                                <span>{code}</span>
                            ))
                        }
                    </p>
                    <p className='unicode'>{`UNICODE : ${unicode}`}</p>
                    <p className='category'>{`Category : ${categoryUpper}`}</p>
                    <p className='group'>{`Group : ${groupUpper}`}</p>
                </div>
            </div>
            <div className='card-emoji'>
                <p className='emoji-code'>{emojiCode}</p>
            </div>
            <button className='expand-btn' onClick={handleExpand}>
                <IconContext.Provider value={{ color: "#fff" }}>
                    <AiOutlineExpandAlt size={30} />
                </IconContext.Provider>
            </button>
        </div>
    )
}

export default Card