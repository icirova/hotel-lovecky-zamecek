import "./RoomDetail.css"
import { useParams } from "react-router-dom"
import { useState, useEffect } from "react"

export const RoomDetail = () => {

  const { id } = useParams();
  const [room, setRoom] = useState(null);

  useEffect(
     () => {
      const fetchData = async () => {
        const response = await fetch(`http://localhost:4000/api/rooms/${id}`)
        const data = await response.json()
        setRoom(data)
      };
      fetchData()
    }, []);

  return <section className="container">
    {room && (
      <>
        <h2>{room.title}</h2>
        <img src={`/components/Card/img/${room.image}`} alt={`foto pokoje ${room.title}`} />
       
        <p>{room.description}</p>

        <h4 className="detail__subtitle">Kapacita:</h4>
        <p> {room.capacity} lůžek</p>

        <h4 className="detail__subtitle">Cena za osobu: </h4>
        <p>{`${room.price} Kč/noc`}</p>
      </>
    )}
</section>
};
