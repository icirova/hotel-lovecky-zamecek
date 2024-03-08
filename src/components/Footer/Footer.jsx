import "./Footer.css"

export const Footer = () => {
  return  <section className="dark">
  <div className="container">
  <h2>Kontaktujte nás</h2>
  <div className="columns-2">

  <img src="/components/Footer/mapa.png" alt="mapa" />
  <div className="address">
    <h3 className="address__title">Adresa:</h3> 
    <p className="address__item">Hotel u řeky</p>
    <p className="address__item">Říční 123</p>
    <p className="address__item">987 65 Říkov</p>

    <h3 className="address__title">Telefon:</h3> 
    <p className="address__item">123 123 123</p>

    <h3 className="address__title">E-mail:</h3> 
    <p className="address__item">info@hotelureky.ab</p>
  </div>
</div>

  </div>
  
  </section>
}
