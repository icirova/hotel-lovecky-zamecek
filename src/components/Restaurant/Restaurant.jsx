import "./Restaurant.css"


export const Restaurant = () => {

  return <section className="light">
    <div className="container">
      <h2 >Restaurace</h2>
      <p>Vaříme poctivou českou kuchyni se zaměřením na zvěřinu. Kombinujeme původní receptury s moderním pojetím a servisem.</p>
      <p>Velký důraz klademe na čerstvé a lokální suroviny, menu připravujeme dle ročních období.</p>
      <img className="card__image" src="/components/Restaurant/restaurant.webp" /> 
      <a href="/menu" className="restaurant__link">Naše Menu</a>
      
    </div>
  </section>
};
