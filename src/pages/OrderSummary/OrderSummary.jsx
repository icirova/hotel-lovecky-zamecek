import "./OrderSummary.css"
import { useLocation } from "react-router-dom";

export const OrderSummary = () => {

  const location = useLocation();
  const formData = location.state.formData; // Načtení dat z adresy URL

  let apartmentName

  if (formData.apartment === "") {
    apartmentName = "nespecifikováno";
  } else {
    switch (formData.apartment) {
      case "450":
        apartmentName = "Lesní apartmán";
        break;
      case "700":
        apartmentName = "Medvědí apartmán";
        break;
      case "1200":
        apartmentName = "Lovecký apartmán";
        break;
      case "2500":
        apartmentName = "Vévodův apartmán";
        break;
      default:
        apartmentName = "Nedefinovaný apartmán";
        break;
    }
  }

  let cateringType;

  switch (formData.catering) {
    case "0":
      cateringType = "vlastní";
      break;
    case "150":
      cateringType = "snídaně";
      break;
    case "450":
      cateringType = "polopenze";
      break;
    case "950":
      cateringType = "plná penze";
      break;
    default:
      cateringType = "nespecifikováno";
      break;
  }

  return <section className="light">
  <div className="container">

  <h2>Vaše rezervace byla odeslána!</h2>
  <p>Pro výběr termínu a upřesnění vašich požadavků vás budeme brzy kontaktovat. </p>
  <h3 className="summary__subtitle">Shrnutí vaší rezervace: </h3>
  <p>Jméno: {formData.name}</p>  
  <p>Telefon: {formData.phone}</p>
  <p>Apartmán: {apartmentName}</p>
  {formData.nights === "" ? <p>Počet nocí: nespecifikováno</p>  : <p>Počet nocí: {formData.nights}</p> }
  {formData.persons === "" ? <p>Počet osob: nespecifikováno</p> : <p>Počet osob: {formData.persons} </p> }
  <p>Stravování: {cateringType} </p>
  {formData.crib ? <p>Dětská postýlka: ano</p> : <p>Dětská postýlka: ne</p> }
  {formData.pet ? <p>Pobyt s mazlíčkem: ano </p>: <p>Pobyt s mazlíčkem: ne </p> }

  <a className="summary__link" href="/"> ← Zpět na hlavní stránku</a>
  </div>
</section>
  

}
