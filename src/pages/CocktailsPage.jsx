import { useState } from "react";

function CocktailsPage() {

   const [cocktails, setCocktails] = useState(null);

   // Fetching data, then waiting for fetch completion, then transform the response to readable json

   if (!cocktails) {

      const data = fetch("https://www.thecocktaildb.com/api/json/v1/1/search.php?s=").then((fetchResponse) => {
      return fetchResponse.json();
      })
      .then((cocktailsInJS) => {
         setCocktails(cocktailsInJS);
      });

   }

   

    return (
      <main>
         {cocktails ? (
            <article>
               Cocktails Prets
            </article>
         ) : (
            <p>Cocktails en cours de Chargement</p>
         )
      }
      </main>
    )
}

export default CocktailsPage;