import "./OrderForm.css";
import { OrderSummary } from "../../components/OrderSummary/OrderSummary";
import { useState } from "react";

export const OrderForm = () => {
   //stavy pro výpočet celkové ceny
  const [apartment, setApartment] = useState("");
  const [numNights, setNumNights] = useState("");
  const [numGuests, setNumGuests] = useState("");
  const [catering, setCatering] = useState("");
  const [crib, setCrib] = useState("");
  const [pet, setPet] = useState("");

   //změna textu na tlačítku po odeslání
   const [buttonText, setButtontext] = useState("Rezervovat");

  //validace formuláře
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    apartment: "",
    nights: "",
    persons: "",
    crib: "",
    pet: "",
    catering: "",
  });
  const [errors, setErrors] = useState({ name: "", phone: "" });

  const handleChange = (event) => {
    let { id, checked } = event.target;

    if(id.includes("radio"))
      id = "radio"

    // formulář
    const { name, value } = event.target;
  
    switch (id) {
      case "check1":
        setCrib(checked ? event.target.value : "");
        break;
      case "check2":
        setPet(checked ? event.target.value : "");
        break;
      case "persons":
        setNumGuests(event.target.value);
        break;
      case "nights":
        setNumNights(event.target.value);
        break;
      case "select-apartment":
        setApartment(event.target.value);
        break;
      case "radio":
        setCatering(checked ? event.target.value : "");
        break;
    }
    setFormData({ ...formData, [name]: value });
  };

  //odeslání rezervace
  const handleClick = (event) => {
    event.preventDefault();
  
    // Validace jména a telefonu
    let newErrors = {};

    if (formData.name.trim() === "") {
      newErrors.name = "Prosím vyplňte vaše jméno.";
    }

    if (formData.phone.trim() === '') {
      newErrors.phone = 'Prosím vyplňte telefonní.';
    } else {
      const phoneRegex = /^\+[0-9]{3}\s[0-9]{3}\s[0-9]{3}\s[0-9]{3}$/;
      if (!phoneRegex.test(formData.phone.trim())) {
        newErrors.phone = 'Prosím vyplňte telefonní číslo ve správném formátu.';
      }
    }

    // Aktualizace stavu s chybami
    setErrors(newErrors);

    // Pokud nejsou žádné chyby, formulář se odešle
    if (Object.keys(newErrors).length === 0) {
      setButtontext("Rezervace byla odeslána.");
      console.log("Form submitted successfully:", formData);
    }
  };

  return (
    <section className="light" id="section--order">
      <div className="container">
        <h2>Rezervujte si pokoj</h2>
        <div className="columns-2">
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
              <label htmlFor="name" className="field-label">
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
                {errors.phone && (
                  <span className="error-message">{errors.phone}</span>
                )}
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
                value={numNights}
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
                value={numGuests}
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

            <OrderSummary
              numNights={numNights}
              numGuests={numGuests}
              apartment={apartment}
              catering={catering}
              crib={crib}
              pet={pet}
            />

            <button className="wide" onClick={handleClick}>
              {buttonText}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};
