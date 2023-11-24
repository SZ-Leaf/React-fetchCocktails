import { useState } from "react";

function CocktailRandom(){

   const [randomCocktail, setRandomCocktail] = useState(null);


   // If to check if cocktail value null then we execute code
   if (!randomCocktail) {

      // asynchronous function that only executes once
      (async () => {

         // await for the fetching to finish before saving the data fetched in the new variable response
         const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/random.php");

         // transforming the new variable into a readable json file
         const data = await response.json();

         // bad api forced us to pick the first slot in the object since it returns an object
         setRandomCocktail(data.drinks[0]);

      })();
   }

   return (

      <main>
        {randomCocktail ? (
            <article>
               <p> {randomCocktail.strDrink} </p>
            </article>
        ) : (
         <p>Cocktails Random en cours de Chargement</p>
        )}
      </main>

   )

}

export default CocktailRandom;