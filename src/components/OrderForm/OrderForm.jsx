import "./OrderForm.css";
import { OrderSummary } from '../../components/OrderSummary/OrderSummary';

export const OrderForm = () => {
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
          
            <OrderSummary />
          
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
              <input id="field2" className="field-input" type="text" />

              <label htmlFor="field1" className="field-label">
                Počet nocí:
              </label>
              <input id="field1" className="field-input" type="text" />

              <label htmlFor="field2" className="field-label">
                Počet osob:
              </label>
              <input id="field2" className="field-input" type="text" />

              <label htmlFor="select" className="field-label">
                Další požadavky:
              </label>
              <select id="select" className="field-input">
                <option>vyberte</option>
                <option>dětská postýlka</option>
                <option>pobyt s mazlíčkem</option>
                <option>snídaně</option>
                <option>polopenze</option>
                <option>plná penze</option>
                <option>čerstvé květiny na pokoj</option>
              </select>

              <label htmlFor="check1" className="field-label">
                Souhlasím se zpracováním osobních údajů.{" "}
              </label>
              <input id="check1" className="field-input" type="checkbox" />
            </div>

          

            <button className="wide" onClick={handleClick}>
              Rezervovat{" "}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
