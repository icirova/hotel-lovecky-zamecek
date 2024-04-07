import { useState, useEffect } from "react";
import "./MenuPage.css"
import { MenuItem } from "../../components/MenuItem/MenuItem";

export const MenuPage = () => {

  const [menu, setMenu] = useState({
    meal: {
      appetizer: [],
      soup: [],
      lunch: [],
      dessert: [],
    },
    drink: {
      hot: [],
      alcoholic: [],
      soft: []
    }
  });

  useEffect(
    ()=> {
      const fetchMenu = async () => {
        try {
          const response = await fetch("http://localhost:4000/api/menu");
          if (!response.ok) {
            throw new Error("Nepodařilo se načíst data.");
          }
          const menu = await response.json();
          setMenu(menu);
        } catch (error) {
          console.error("Chyba při načítání dat:", error.message);
        }
      };
      fetchMenu()
    },[]
  );

  return <section className="container">
   
    <h2>Jídelní lístek</h2>
      <div className="menu">
        <h3>Předkrmy:</h3>
          {menu.meal.appetizer.map(item => {
            return <MenuItem key={item.menu_id} name={item.name} price={item.price}/>
            })} 
        <h3>Polévky:</h3>
        {menu.meal.soup.map(item => {
           return <MenuItem key={item.menu_id} name={item.name} price={item.price}/>
             })} 

        <h3>Hlavní chod:</h3>
        {menu.meal.lunch.map(item => {
            return <MenuItem key={item.menu_id} name={item.name} price={item.price}/>
             })} 

          <h3>Dezerty:</h3>
          {menu.meal.dessert.map(item => {
           return <MenuItem key={item.menu_id} name={item.name} price={item.price}/>
             })} 
       

        </div>

        <h2 className="menu__title">Nápojový lístek</h2>
          <div className="menu">
          <h3>Nealko:</h3>
          {menu.drink.soft.map(item => {
           return <MenuItem key={item.drinks_id} name={item.name} price={item.price}/>
             })} 
        
        <h3>Teplé nápoje:</h3>
        {menu.drink.hot.map(item => {
           return <MenuItem key={item.drinks_id} name={item.name} price={item.price}/>
             })} 
         
        <h3>Alkohol:</h3>
        {menu.drink.alcoholic.map(item => {
           return <MenuItem key={item.drinks_id} name={item.name} price={item.price}/>
             })} 
          </div>
  </section>
}
