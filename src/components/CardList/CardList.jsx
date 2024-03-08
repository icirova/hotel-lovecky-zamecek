import "./CardList.css"
import { Card } from "/components/Card/Card"
  import { useNavigate } from "react-router-dom"


export const CardList = ({rooms}) => {

  const navigate = useNavigate();

  const openDetail= (roomId) => {
    navigate(`/detail/${roomId}`)
    console.log(roomId)
   
  }


   
  return <>

<section className="dark">
    <div className="container">

    <h2>Naše apartmány</h2>
    <div className="cards-row">

    {rooms.map(oneRoom => {
       return <Card 
          key={oneRoom.id} 
          image={oneRoom.image}
          title={oneRoom.title} 
          description={oneRoom.description}
          openDetail={() => openDetail(oneRoom.id)} 
          />
          
    })}

   

  </div>
      
    </div>
  </section>

  
  </>
}
