import { useEffect, useState } from "react"
import "./PriceSummary.css"

export const PriceSummary = ({formData }) => {

  const [price, setPrice] = useState(0)

   useEffect (
    () => {

      const getPrize =  () => {
        const basePrice = formData.apartment * formData.nights * formData.persons
        const cribPrice = formData.crib * formData.nights
        const petPrice = formData.pet * formData.nights
        const cateringPrice = formData.catering * formData.nights * formData.persons
        const totalPrice = basePrice + cribPrice + petPrice + cateringPrice
        setPrice(totalPrice) 
      }
      getPrize()

    }, [formData]
   );

  return <div className="summary-container"> 
    <p className="summary">Celková cena pobytu: {price} Kč</p> 
  </div>
}





