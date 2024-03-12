import "./Events.css";

import React from "react";

export const Events = () => {
  return (
    <section className="dark">
      <div className="container">
        <h2>Svatby, oslavy a firemní akce</h2>
        <p>
          Váš vysněný svatební den či oslava důležitých milníků života se může
          stát skutečností právě u nás. S naším širokým zázemím a profesionálním
          přístupem vám zajistíme svatební obřad či oslavu, kterou si budete
          pamatovat navždy.
        </p>
        <p>
          Pro firemní prezentace, teambuildingy či věčírky máme připravený
          multifunkční sál s vlastním barem. Postaráme se o každý detail, aby
          vaše firemní akce byly úspěšné po všech stránkách.
        </p>

        <img className="card__image" src="/components/Events/action.webp" />
      </div>
    </section>
  );
};
