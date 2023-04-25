import React, { useState } from "react";

function RecipeCreate({ saveRecipe }) {
const [name, setName] = useState("");
const [cuisine, setCuisine] = useState("");
const [photo, setPhoto] = useState("");
const [ingredients, setIngredients] = useState("");
const [preparation, setPreparation] = useState("");

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
const handleNameChange = (event) => setName(event.target.value);
const handleCuisineChange = (event) => setCuisine(event.target.value);
const handlePhotoChange = (event) => setPhoto(event.target.value);
const handleIngredientsChange = (event) => setIngredients(event.target.value);
const handlePreparationChange = (event) => setPreparation(event.target.value);
const handleSubmit = (event) => {
  event.preventDefault();
  setName("");
  setCuisine("");
  setPhoto("");
  setIngredients("");
  setPreparation("");
  saveRecipe({name, cuisine, photo, ingredients, preparation});
};

  return (
    <form name="create" onSubmit={handleSubmit}>
      <table>
        <tbody>
          <tr>
            <td>
              <input id="name" type="text" name="name" onChange={handleNameChange} value={name} placeholder="Name" />
            </td>
            <td>
              <input id="cuisine" type="text" name="cuisine" onChange={handleCuisineChange} value={cuisine} placeholder="Cuisine" />
            </td>
            <td>
              <input id="photo" name="photo" type="url" onChange={handlePhotoChange} value={photo} placeholder="URL" />
            </td>
            <td>
              <textarea id="ingredients" name="ingredients"  onChange={handleIngredientsChange} value={ingredients} placeholder="Ingredients" />
            </td>
            <td>
              <textarea id="preparation" name="preparation" onChange={handlePreparationChange} value={preparation} placeholder="Preparation" />
            </td>
            <td>
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
