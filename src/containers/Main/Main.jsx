import React from 'react'
import Cards from '../../components/Cards/Cards'

const Main = ({emojis,setEmojis,category,selectedCategory}) => {
    // console.log("Hi")
    // console.log(emojis)
  return (
    <div>
        <Cards emojis={emojis} setEmojis={setEmojis} category={category} selectedCategory={selectedCategory} />
    </div>
  )
}

export default Main