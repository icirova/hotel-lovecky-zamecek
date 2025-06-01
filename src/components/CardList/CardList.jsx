import "./CardList.css"
import { useNavigate } from "react-router-dom"
import { Card } from "/components/Card/Card"

export const CardList = ({rooms}) => {

  const navigate = useNavigate();

  const openDetail= (roomId) => {
    navigate(`/detail/${roomId}`)
  };


  return <section className="dark">
    <div className="container">

      <h2>Naše apartmány</h2>
      <p>V hlavní budově najdete recepci, restauraci a 4 stylové apartmány se dvěma až šesti lůžky s možností dětské postýlky.</p>
      <p>Vřele přivítáme nejen vás, ale i vaše domácí mazlíčky. Pokud máte pejska nebo kočičku, neváhejte a vezměte je s sebou. </p>

      <div className="cards-row">
        {rooms.map(oneRoom => {
          return <Card 
              key={oneRoom.apartments_id} 
              image={oneRoom.image}
              title={oneRoom.title} 
              description={oneRoom.description}
              openDetail={() => openDetail(oneRoom.apartments_id)} 
              />
        })}
      </div>
    </div>
  </section>

  

}
