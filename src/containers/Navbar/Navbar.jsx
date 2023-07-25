import React from 'react'
import "./Navbaar.scss"

const Navbar = ({category,selectedCategory,setSelectedCategory}) => {

  
  return (
    <nav className='navbar'>
        <button className='btn-category all ' onClick={()=>setSelectedCategory("All")} >All</button>
        {
            category.map((item,index)=>(
                <button className='btn-category ' key={index} onClick={()=>setSelectedCategory(item)} >{item}</button>
            ))
        }
    </nav>
  )
}

export default Navbar