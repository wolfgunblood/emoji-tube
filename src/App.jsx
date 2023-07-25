import React, { useEffect, useState } from 'react';
import "./App.scss";
import Main from './containers/Main/Main';
import SideBar from './containers/Sidebar/SideBar';
import Navbar from './containers/Navbar/Navbar';
import Cards from './components/Cards/Cards';
import { AiOutlineClose } from 'react-icons/ai'
import Loader from './components/Loader/Loader';



const App = () => {


  const [emojis, setEmojis] = useState([]);
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [expand, setExpand] = useState(false);
  const [selectedEmoji, setSelectedEmoji] = useState({ "name": "grinning face", "category": "smileys and people", "group": "face positive", "htmlCode": ["\u0026#128512;"], "unicode": ["U+1F600"] });
  const [backgroundColor, setBackgroundColor] = useState("#8fb3ff");
  const fetchEmoji = async () => {

    try {
      const response = await fetch("https://emojihub.yurace.pro/api/all");

      if (!response.ok) {
        throw new Error("Error fetching emoji");
      }
      const data = await response.json();
      setEmojis(data);
      console.log(data);

    }
    catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    fetchEmoji();

  }, [])

  useEffect(() => {
    // Create a Set to store unique categories
    const uniqueCategories = new Set();

    // Loop over data to add each unique category to the Set
    emojis.forEach((item) => {
      uniqueCategories.add(item.category);
    });

    // Convert the Set back to an array and update the state
    setCategory(Array.from(uniqueCategories));
  }, [emojis]);

  // console.log(category);
  // console.log(selectedCategory);
  console.log(selectedEmoji)
  console.log(backgroundColor)

  const { group, htmlCode, name, unicode } = selectedEmoji;
  // console.log(htmlCode)
  // console.log(unicode)
  const decimalValue = parseInt(htmlCode[0].substr(2, htmlCode[0].length - 3), 10);
  const emojiCode = String.fromCodePoint(decimalValue);
  const categoryUpper = selectedEmoji.category.toUpperCase();
  const groupUpper = group.toUpperCase();

  return (
    <div className='app'>
      {/* <h1>EmojiHub</h1> */}
      <Loader />
      <Navbar category={category} selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      {/* <Main emojis={emojis} setEmojis={setEmojis} category={category} selectedCategory={selectedCategory} /> */}
      {!expand &&
        <Cards
          emojis={emojis} setEmojis={setEmojis}
          category={category} selectedCategory={selectedCategory}
          setSelectedEmoji={setSelectedEmoji}
          selectedEmoji={selectedEmoji}
          expand={expand} setExpand={setExpand}
          setBackgroundColor={setBackgroundColor}
        />
      }
      {/* <SideBar />       */}
      {
        expand &&
        <div className='card-overlay'>
          <div className={`card-overlay-content ${backgroundColor} `}>
            <button className='close-btn' onClick={() => setExpand(false)} >
              <AiOutlineClose size={30} color="#fff" className='close-icon' />
            </button>
            <div className={`card-container ${backgroundColor}-shaders`}>
              <div className='card-content'>
                <p className='name'>{`Name ${name}`}</p>
                <div className='details'>
                  <p className='html-code'>{`HTML Code : ${htmlCode}`}</p>
                  <p className='unicode'>{`UNICODE : ${unicode}`}</p>
                  <p className='category'>{`Category : ${categoryUpper}`}</p>
                  <p className='group'>{`Group : ${groupUpper}`}</p>
                </div>
              </div>
              <div className='card-emoji'>
                <p className='emoji-code'>{emojiCode}</p>
              </div>
            </div>
          </div>
        </div>
      }

    </div>
  )
}

export default App