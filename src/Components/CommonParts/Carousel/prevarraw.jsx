import React from 'react'

const PrevArrow = (props) => {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, 
      background: "none",
      borderRadius: "100%", 
      display: "flex", 
      justifyContent: "center", 
      alignItems : "center", 
      padding: "5px",
     }}
        onClick={onClick}
      />
    )
}

export default PrevArrow;