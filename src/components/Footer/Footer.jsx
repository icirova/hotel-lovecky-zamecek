import "./Footer.css"

export const Footer = () => {

  return  <section className="dark">
    <div className="container">
      <h2>Kontaktujte nás</h2>
      <div className="columns-2">      
        <div className="footer__img">
          <iframe className="map" src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d42943.67323466038!2d16.072886368544175!3d50.51360078026087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNTDCsDMwJzQ1LjQiTiAxNsKwMDYnMDYuOSJF!5e1!3m2!1scs!2scz!4v1710174131616!5m2!1scs!2scz" width="600" height="450" style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
        </div>
        <div className="address">
          <h3 className="address__title">Adresa:</h3> 
          <p className="address__item">Lovecký zámeček Brendy</p>
          <p className="address__item">Panská 101</p>
          <p className="address__item">542 33 Rtyně v Podkrkonoší</p>

          <h3 className="address__title">Telefon:</h3> 
          <p className="address__item"> + 420 123 123 123</p>

          <h3 className="address__title">E-mail:</h3> 
          <p className="address__item">info@brendy.ab</p>
        </div>
      </div>
    </div>
  </section>
}
