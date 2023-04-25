import React from "react";

function RecipeView({recipe, deleteRecipe}){
  console.log(recipe);
  return(
    <tr>
      <td className="name"><p>{recipe.name}</p></td>
      <td className="cuisine"><p>{recipe.cuisine}</p></td>
      <td className="image"><p><img src={recipe.photo} alt={recipe.photo} /></p></td>
      <td className="content_td ingredients"><p>{recipe.ingredients}</p></td>
      <td className="content_td preparation"><p>{recipe.preparation}</p></td>
      <td><p><button name="delete" onClick={deleteRecipe}>Delete</button></p></td>
    </tr>
  );
}

export default RecipeView;