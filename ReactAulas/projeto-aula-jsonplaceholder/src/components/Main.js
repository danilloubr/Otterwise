import React, { useState } from "react";

import { articles } from "../data";
import TextSelection from "./TextSelection";

const Main = () => {
  const [section, setSection] = useState(articles);

  const removeSection = () => {
    setSection(section.slice(0, section.length - 1));
  };

  return (
    <main>
      {section.map(({ id, title, description }) => (
        <TextSelection key={id} title={title} description={description} />
      ))}

      <button onClick={removeSection}>Altera Estado</button>
    </main>
  );
};

export default Main;
