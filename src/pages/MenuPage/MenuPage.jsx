import "./MenuPage.css"

export const MenuPage = () => {
  return <section className="container">
   
    <h2>Jídelní lístek</h2>
      <div className="menu">
        <h3>Předkrmy:</h3>
          <div className="menu__item">
            <p className="menu__name">Kančí paštika</p>
            <p className="menu__price">90 Kč</p>
          </div>
        
        <h3>Polévky:</h3>
          <div className="menu__item">
            <p className="menu__name">Hovězí vývar s domácími nudlemi</p>
            <p className="menu__price">50 Kč</p>
          </div>
          <div className="menu__item">
          <p className="menu__name">Kulajda</p>
          <p className="menu__price">50 Kč</p>
        </div>

        <h3>Hlavní chod:</h3>
          <div className="menu__item">
            <p className="menu__name">Srnčí ragů na víně</p>
            <p className="menu__price">260 Kč</p>
          </div>
          <div className="menu__item">
            <p className="menu__name">Kančí burger s brusinkami</p>
            <p className="menu__price">250 Kč</p>
          </div>
          <div className="menu__item">
            <p className="menu__name">Jelenní wellington</p>
            <p className="menu__price">350 Kč</p>
          </div>
          <div className="menu__item">
            <p className="menu__name">Bažantí stehna se zelím a bramborovými knedlíky</p>
            <p className="menu__price">250 Kč</p>
          </div>

          <h3>Dezerty:</h3>
       
          <div className="menu__item">
            <p className="menu__name">Tvarohové knedlíky s lesními jahodami</p>
            <p className="menu__price">60 Kč</p>
          </div>
       

        </div>

        <h2 className="menu__title">Nápojový lístek</h2>
          <div className="menu">

          </div>

   
   
  </section>
}
