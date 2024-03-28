import './style.css';
import { useEffect, useState } from 'react';
import { CardList } from '../../components/CardList/CardList';
import { OrderForm } from '../../components/OrderForm/OrderForm';
import { Restaurant } from '../../components/Restaurant/Restaurant';
import { Events } from '../../components/Events/Events';

export const HomePage = ({}) => {

  const [rooms, setRooms] = useState([]);

  useEffect(
    ()=> {
      const fetchData = async () => {
        try {
          const response = await fetch("http://localhost:4000/api/rooms");
          if (!response.ok) {
            throw new Error("Nepodařilo se načíst data.");
          }
          const data = await response.json();
          setRooms(data);
        } catch (error) {
          console.error("Chyba při načítání dat:", error.message);
        }
      };
      fetchData()
    },[]
  );

  return <>
      <CardList rooms={rooms} />
      <Restaurant />
      <Events />
      <OrderForm />
  </>
};
