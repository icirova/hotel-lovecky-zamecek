import { useState, useEffect } from "react";
import "./MenuPage.css";
import { MenuItem } from "../../components/MenuItem/MenuItem";
import { MenuCategory } from "../../components/MenuCategory/MenuCategory";

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
      soft: [],
    },
  });

  useEffect(() => {
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
    fetchMenu();
  }, []);

  return (
    <section className="container">
      <h2 className="menu__title">Jídelní lístek</h2>
      <div className="menu">
        <MenuCategory
          categoryTitle={"Předkrmy"}
          categoryList={menu.meal.appetizer}
        />
        <MenuCategory 
          categoryTitle={"Polévky"} 
          categoryList={menu.meal.soup}
        />
        <MenuCategory
          categoryTitle={"Hlavní chod"}
          categoryList={menu.meal.lunch}
        />
        <MenuCategory
          categoryTitle={"Dezerty"}
          categoryList={menu.meal.dessert}
        />
      </div>

      <h2 className="menu__title">Nápojový lístek</h2>
      <div className="menu">
        <MenuCategory
         categoryTitle={"Nealko"}
         categoryList={menu.drink.soft}
        />
        <MenuCategory
          categoryTitle={"Teplé nápoje"}
          categoryList={menu.drink.hot}
        />
        <MenuCategory
          categoryTitle={"Alkohol"}
          categoryList={menu.drink.alcoholic}
        />
      </div>
    </section>
  );
};
