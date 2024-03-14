import "./OrderForm.css";
import { PriceSummary } from "../PriceSummary/PriceSummary";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useRef } from "react";


const initialFormData = {
  name: '',
  phone: '',
  apartment: '',
  nights: '',
  persons: '',
  crib: '',
  pet: '',
  catering: '',
};

export const OrderForm = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState(initialFormData);
  const [errors, setErrors] = useState({ name: '', phone: '' });

  //pro odscrolování na nevyplněná pole
  const nameRef = useRef(null);
  

  const handleChange = (event) => {
    const { id, name, value, checked } = event.target;

    let newValue = value;
    if (id === 'check1' || id === 'check2') {
      newValue = checked ? event.target.value : '';
    }

    setFormData({ ...formData, [name]: newValue });
  };

  const handleClick = (event) => {
    event.preventDefault();

    let newErrors = {};

    if (formData.name.trim() === '') {
      newErrors.name = 'Prosím vyplňte vaše jméno.';
      nameRef.current.scrollIntoView({ behavior: "smooth" });
    }

    if (formData.phone.trim() === '') {
      newErrors.phone = 'Prosím vyplňte telefonní číslo.';
      nameRef.current.scrollIntoView({ behavior: "smooth" });
    } else {
      const phoneRegex = /^\+[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = 'Prosím vyplňte telefonní číslo ve správném formátu.';
        nameRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }

    setErrors(newErrors);
  

    if (Object.keys(newErrors).length === 0) {
      //předání dat z formuláře do URL pro načtení v OrderForm
      navigate("/summary", {state: { formData } })
    }
  };

  return (
    <section className="light" id="section--order">
      <div className="container">
        <h2>Rezervujte si pokoj</h2>
        
          <div className="column">
            <p>
              Vyplňte následující údaje pro rezervaci pokoje v našem hotelu.
              Pokud máte zájem o další služby, jako je snídaně, polopenze, či
              dětská postýlka, nezapomeňte je doplnit.
            </p>
            <p>
              Po odeslání formuláře vás budeme brzy kontaktovat s potvrzením
              vaší rezervace. Děkujeme za váš zájem o pobyt v našem hotelu.
              Budeme se těšit na vaši návštěvu!
            </p>
          </div>

          <form>
            <div className="form-fields">
              <label htmlFor="name" className="field-label"  ref={nameRef}>
                Jméno a příjmení:{" "}
                {errors.name && (
                  <span className="error-message">{errors.name}</span>
                )}
              </label>
              <input
                id="name"
                className="field-input"
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
               
              />

              <label htmlFor="phone" className="field-label">
                Telefon:{" "}
                {errors.phone && (<span className="error-message">{errors.phone}</span>)}
              </label>
              <input
                id="phone"
                className="field-input"
                type="tel"
                placeholder="+420 123 123 123"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                
              />

              <label htmlFor="select-apartment" className="field-label">
                Apartmán:
              </label>
              <select
                id="select-apartment"
                className="field-input"
                name="apartment"
                value={formData.apartment}
                onChange={handleChange}
              >
                <option value={""}>vyberte</option>
                <option value={450}>Lesní apartmán</option>
                <option value={700}>Medvědí apartmán</option>
                <option value={1200}>Lovecký apartmán</option>
                <option value={2500}>Vévodův apartmán</option>
              </select>

              <label htmlFor="nights" className="field-label">
                Počet nocí:
              </label>
              <input
                id="nights"
                className="field-input"
                type="number"
                min="1"
                name="nights"
                value={formData.nights}
                onChange={handleChange}
              />

              <label htmlFor="persons" className="field-label">
                Počet osob:
              </label>
              <input
                id="persons"
                className="field-input"
                type="number"
                min="1"
                max="9"
                name="persons"
                value={formData.persons}
                onChange={handleChange}
              />

              <div className="special-requests">
                <h4>Speciální požadavky:</h4>
                <div className="check-item">
                  <label htmlFor="check1" className="field-label">
                    Dětská postýlka 200 Kč/den
                  </label>
                  <input
                    id="check1"
                    className="field-input"
                    type="checkbox"
                    name="crib"
                    value={200}
                    onChange={handleChange}
                  />
                </div>

                <div className="check-item">
                  <label htmlFor="check2" className="field-label">
                    Pobyt s mazlíčkem 100 Kč/den
                  </label>
                  <input
                    id="check2"
                    className="field-input"
                    type="checkbox"
                    name="pet"
                    value={100}
                    onChange={handleChange}
                  />
                </div>

                <h4>Typ stravování: </h4>

                <div className="check-item">
                  <label htmlFor="radio1" className="field-label">
                    Plná penze 950 Kč za osobu/den
                  </label>
                  <input
                    id="radio1"
                    className="field-input"
                    type="radio"
                    name="catering"
                    
                    value={950}
                    onChange={handleChange}
                  />
                </div>

                <div className="check-item">
                  <label htmlFor="radio2" className="field-label">
                    Polopenze 450 Kč za osobu/den
                  </label>
                  <input
                    id="radio2"
                    className="field-input"
                    type="radio"
                    name="catering"
                    value={450}
                    onChange={handleChange}
                  />
                </div>

                <div className="check-item">
                  <label htmlFor="radio3" className="field-label">
                    Snídaně 150 Kč za osobu/den
                  </label>
                  <input
                    id="radio3"
                    className="field-input"
                    type="radio"
                    name="catering"
                    value={150}
                    onChange={handleChange}
                  />
                </div>

                <div className="check-item">
                  <label htmlFor="radio4" className="field-label">
                    Vlastní
                  </label>
                  <input
                    id="radio4"
                    className="field-input"
                    type="radio"
                    name="catering"
                    value={0}
                    onChange={handleChange}
                  />
                </div>
              </div>
            </div>

            <PriceSummary formData={formData}/>

            <button className="wide" onClick={handleClick}>
              Rezervovat
            </button>
          </form>

        
      </div>
    </section>
  );
};
