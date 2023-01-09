
import './App.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Drinks from './components/Drinks';

function App() {
  const [dataDrink, setDataDrink] = useState([]);
  const [name, setName] = useState(" ");

  useEffect(() => {
    getData();
  }, [name]);

  const getData = () => {
    axios
      .get(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${name}`)
      .then((resp) => {
        setDataDrink(resp.data.drinks);
      })
      .catch((error) => console.error(error));
  };

  const changeDrink = (e) => {
    e.preventDefault();
    setName(e.target[0].value.toLowerCase());
  };

  if (dataDrink === null) {
    return (
      <div className="App">
        <div className="screen">
        <form onSubmit={(e) => changeDrink(e)}>
            <input type="text"
            placeholder='Welcome. Please enter your favorite drink.'
            />
            <button type="submit">Search</button>
          </form>
        </div>
        <div className="screen">
          <div className="card card-error">
            <h2>Sorry, at this moment</h2>
            <img src="./src/assets/not-exist.jpg" alt="" />
            <h2>we don´t have this drink</h2>
          </div>
        </div>
      </div>
    );
  }

  let dataDrinkCopy = dataDrink.slice();

  dataDrinkCopy.sort((a, b) => {
      if (a.strDrink < b.strDrink) {
        return -1;
      }
      if (a.strDrink > b.strDrink) {
        return 1;
      }
      return 0;
    }
  );

  return (
    <div className="App">
      <div className="screen">
        <form onSubmit={(e) => changeDrink(e)}>
          <input 
          type="text" 
          placeholder='WELCOME!!! Please enter your favorite drink.'
          />
          <button 
          type="submit"
          >Search</button>
        </form>
      </div>
      <div className="screen">
        {
          dataDrinkCopy.map((data, index) => 
          <Drinks 
          key={index} 
          nameData={data} 
          />)
        }
      </div>
    </div>
  )
}

export default App
