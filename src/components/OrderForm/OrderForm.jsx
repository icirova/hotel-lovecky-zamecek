import "./OrderForm.css";
import { OrderSummary } from '../../components/OrderSummary/OrderSummary';
import { useState } from "react";

export const OrderForm = () => {

  const [apartment, setApartment] = useState("")
  const [numNights, setNumNights] = useState(1)
  const [numGuests, setNumGuests] = useState(1)
  const [catering, setCatering] = useState("")
  const [crib, setCrib] = useState("")
  const [pet, setPet] = useState("")

  const handleChange = (event) => {
    const {id, checked} = event.target

    switch(id){
      case "check1": setCrib(checked ? event.target.value : ""); break;
      case "check2": setPet(checked ? event.target.value : ""); break;
    }

    setCatering(checked ? event.target.value : "")
  }

  const handleClick = () => {
    alert("Vaše rezervace byla odeslána");
  };

  return (
    <section className="light" id="section--order">
      <div className="container">
        <h2>Rezervujte si pokoj</h2>
        <div className="columns-2">
          <div className="column">
            <p>Prosím, vyplňte následující údaje pro rezervaci pokoje v našem hotelu. Pokud máte zájem o další služby, jako je snídaně, polopenze, dětská postýlka atd., prosím, nezapomeňte doplnit.</p>
            <p>Po odeslání formuláře vás budeme brzy kontaktovat s potvrzením vaší rezervace. Děkujeme za váš zájem o pobyt v našem hotelu. Budeme se těšit na vaši návštěvu!</p>
          </div>

          <form>
            <div className="form-fields">
              <label htmlFor="field2" className="field-label">
                Jméno a příjmení:
              </label>
              <input id="field2" className="field-input" type="text" />

              <label htmlFor="field2" className="field-label">
                Telefon:
              </label>
              <input id="field2" className="field-input" type="tel" />

              <label htmlFor="select select--apartment" className="field-label">
                Apartmán:
              </label>
              <select id="select-apartment" className="field-input" value={apartment} onChange={(event) => setApartment(event.target.value)}>
                <option value={""}>vyberte</option>
                <option value={450}>Lesní apartmán</option>
                <option value={700}>Medvědí apartmán</option>
                <option value={1200}>Lovecký apartmán</option>
                <option value={2500}>Vévodův apartmán</option>
              </select>

              <label htmlFor="field1" className="field-label">
                Počet nocí:
              </label>
              <input id="field1" className="field-input" type="number"  value={numNights} onChange={(event) => setNumNights(event.target.value)}/>

              <label htmlFor="field2" className="field-label">
                Počet osob:
              </label>
              <input id="field2" className="field-input" type="number" value={numGuests} onChange={(event) => setNumGuests(event.target.value)} />

                <div className="special-requests">
                  <h4>Speciální požadavky:</h4>
                  <div className="check-item">
                    <label htmlFor="check1" className="field-label" >
                      Dětská postýlka{""}
                    </label>
                    <input id="check1" className="field-input" type="checkbox" value={0.5} onChange={handleChange}/>
                  </div>

                  <div className="check-item">
                    <label htmlFor="check2" className="field-label">
                      Pobyt s mazlíčkem{``}
                    </label>
                    <input id="check2" className="field-input" type="checkbox" value={0.25} onChange={handleChange}/>
                  </div>

                  <h4>Typ stravování: </h4>

                  <div className="check-item">
                    <label htmlFor="radio1" className="field-label">
                      Plná penze{``}
                    </label>
                    <input id="radio1" className="field-input" type="radio" name="catering" value={950} onChange={handleChange} />
                  </div>

                  <div className="check-item">
                    <label htmlFor="radio2" className="field-label">
                      Polopenze{``}
                    </label>
                    <input id="radio2" className="field-input" type="radio" name="catering" value={450} onChange={handleChange}/>
                  </div>

                  <div className="check-item">
                    <label htmlFor="radio3" className="field-label">
                      Snídaně{``}
                    </label>
                    <input id="radio3" className="field-input" type="radio" name="catering" value={150} onChange={handleChange} />
                  </div>

                  <div className="check-item">
                    <label htmlFor="radio4" className="field-label">
                      Vlastní{``}
                    </label>
                    <input id="radio4" className="field-input" type="radio" name="catering" value={''} onChange={handleChange} />
                  </div>
              
                </div>
  
            </div>

            <OrderSummary 
              numNights={numNights} 
              numGuests={numGuests} 
              apartment={apartment} 
              catering={catering}
              crib={crib}
              pet={pet}
            />

            <button className="wide" onClick={handleClick}>
              Rezervovat{" "}
            </button>
            
          </form>
        </div>
      </div>
    </section>
  );
};
