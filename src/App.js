import React, { useState } from "react";
import "./style.css";

export default function App() {
  const [selected, setSelected] = useState([]);

  const isCornerItem = i => {
    return i % 8 === 0 || i < 8;
  };

  const isAdjacentItem = i => {
    if(i>15 && i%8!==0){
    const adjacentItem = i - 8;
    if (selected.length) return adjacentItem;
    }
  };

  const setStyle = i => {
    if (isCornerItem(i))
      return {
        backgroundColor: "#d2b8e3"
      };
     else if (selected.indexOf(i) > 0)
      return {
        backgroundColor: "#4f9929"
      };
    return {
      backgroundColor: "grey"
    };
  };

  const setContent = i => {
    if (i == 0) return "7 AM";
    else if (i < 8) return i + 3;
    else if (i % 8 === 0) {
      const result = i / 8 + 7;
      return result < 12 ? result + " AM" : result + " PM";
    }
    return null;
  };

  const handleClick = i => {
    const selectedIndex = selected.indexOf(i);
    if (selectedIndex===-1) setSelected([...selected, i]);
    else{
      const sliced=[...selected].slice(selectedIndex,1)
      setSelected([...sliced])
    }
    
  };
  return (
    <>
      <div className="wrapper">
        {Array(112)
          .fill(1)
          .map((item, i) => (
            <div key={i} style={setStyle(i)} onClick={() => handleClick(i)}>
              {setContent(i)}
            </div>
          ))}
      </div>
    </>
  );
}
