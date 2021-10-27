import React, { useState } from "react";

import { articles } from "../data";
import TextSelection from "./TextSelection";

import "../styles/mainContainer.css"

const Main = () => {
  const [section, setSection] = useState(articles);

  

  return (
    <main className="main-container">
      {section.map(({ id, title, description }) => (
        <TextSelection key={id} title={title} description={description} />
      ))}

    </main>
  );
};

export default Main;
