import React, { useState } from "react";
import Nav from './components/Nav';
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from "./components/Contact";

function App() {
  const [categories] = useState([
    {
      name: 'portfolio',
      description: 'Webdev Portfolio',
    },
    {name: 'portraits', description: 'People'},
    { name: 'food', description: 'yumm'},
    {name: 'landscape', description: 'Majestic Stuff'},
  ]);
  const [CurrentCategory, setCurrentCategory] = useState(categories[0]);

  const [contactSelected, setContactSelected] = useState(false);

  return (
    <div>
      <Nav 
      categories={categories}
      setCurrentCategory={setCurrentCategory}
      currentCategory={currentCategory}
      contactSelected={contactSelected}
      setContactSelected={setContactSelected}></Nav>
      <main>
        {!contactSelected ? (
          <>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About>
          
          </About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}


export default App;
