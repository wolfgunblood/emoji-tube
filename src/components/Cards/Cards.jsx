import React from 'react'
import Card from '../Card/Card'
import "./Cards.scss";

const Cards = ({ emojis, setEmojis, category, selectedCategory,expand,setExpand,setSelectedEmoji,selectedEmoji,setBackgroundColor }) => {

  //slice(0,20)

  return (
    <div className='cards'>
      {selectedCategory === 'All'
        ? emojis.map((emoji, index) => (
          <Card key={index} emoji={emoji} setEmojis={setEmojis} expand={expand} setExpand={setExpand} setSelectedEmoji={setSelectedEmoji}
          selectedEmoji={selectedEmoji}
          setBackgroundColor={setBackgroundColor}
          />
        ))
        : emojis
          .filter((emoji) => emoji.category === selectedCategory)
          .map((emoji, index) => (
            <Card key={index} emoji={emoji} setEmojis={setEmojis} expand={expand} setExpand={setExpand} setSelectedEmoji={setSelectedEmoji}
            selectedEmoji={selectedEmoji} 
            setBackgroundColor={setBackgroundColor}
            />
          ))
      }

    </div>
  )
}

export default Cards