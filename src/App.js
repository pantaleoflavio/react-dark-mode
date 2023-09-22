import { useState, useEffect } from "react";
import data from "./data";
import Articolo from "./Articolo";

//Funzione che se presente 'Theme' nel localStorage
// returna il suo valore o di default return 'light-mode'

function App() {
  const [theme, setTheme] = useState('light-mode')

  // func that change theme according to the value
  const changeTheme = () => {
    if (theme === 'light-mode') {
      setTheme('dark-mode')
    } else {
      setTheme('light-mode')
    }
  };

  // changing theme state add a class to html tag
  useEffect(() => {
    document.documentElement.className = theme;
  },[theme])
  return (
    <section className="section-center">
      <div className="container">
      <button onClick={changeTheme} className="btn">
          Change
        </button>
        <section className="article-section">
          {
            data.map( el => <Articolo key={el.id} {...el}/>)
          }
        </section>
      </div>
    </section>
  );
}

export default App;
