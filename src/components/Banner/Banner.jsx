import "./Banner.css"
import { useNavigate } from "react-router-dom"


export const Banner = () => {

  const navigate = useNavigate()

  return <div className="banner">
  <div className="banner__stripe">
    <div className="container">
      <h1 onClick={()=> navigate("/")}>Hotel u řeky</h1>
      <p className="lead">„Rodinný hotel v srdci přírody: Zažijte harmonii u řeky s námi.”</p>    
    </div>
  </div>
</div>
}
