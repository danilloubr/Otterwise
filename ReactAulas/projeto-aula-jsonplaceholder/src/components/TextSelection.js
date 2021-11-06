import React, { useEffect } from "react";

const TextSelection = ({ title, description }) => {
  
  useEffect(() => {
      console.log("Montou o componente")
  }, [])
    return (
    <div>
      <h2>{title}</h2>
      <p>{description}</p>
    </div>
  );
};

export default TextSelection;
