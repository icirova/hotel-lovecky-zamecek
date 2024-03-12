import { useEffect, useState } from "react"
import "./OrderSummary.css"

export const OrderSummary = ({numNights, numGuests, apartment, catering, crib, pet }) => {

  const [price, setPrice] = useState("")

   useEffect (
    () => {

      const getPrize =  () => {
        const basePrice = apartment * numNights * numGuests
        const cribPrice = crib * numNights
        const petPrice = pet * numNights
        const cateringPrice = catering * numNights * numGuests
        const totalPrice = basePrice + cribPrice + petPrice + cateringPrice
        setPrice(totalPrice) 
      }
      getPrize()

    }, [numNights, numGuests, apartment,catering, crib, pet]
   );

  return <div className="summary-container"> 
    <p className="summary">Celková cena pobytu: {price} Kč</p> 
  </div>
}





