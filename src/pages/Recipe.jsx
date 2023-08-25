// react imports
import { Fragment } from "react";

// rrd import
import { useParams } from "react-router-dom";

// useFetch
import { useFetch } from "../hooks/useFetch";

function Recipe() {
  const { id } = useParams();
  const url = "http://localhost:3000/recipes/" + id;
  const { data: recipe, isPending, error } = useFetch(url);


  if (isPending) {
    return <div className="text-center text-2xl mt-3">Loading...</div>
  }


  if (error) {
    return <div className="text-center text-2xl mt-3 text-red-500">{error}</div>
  }

  return (
    <div className="max-w-5xl mx-auto py-3 px-3">
      {recipe && (
        <div
          key={recipe.id}
          className="bg-slate-300 text-center rounded-lg p-3 flex flex-col"
        >
          <h2 className="text-4xl mb-3 font">{recipe.title}</h2>
          <p className="mb-3">
            <span className="font-semibold">Cooking Time: </span>
            {recipe.cookingTime}
          </p>
          <p className="mb-3">
            <span className="font-semibold">Ingredients: </span>
            {recipe.ingredients.map((ing, _, arr) => {
                return <Fragment key={ing}>
                    <span>{ing}</span>
                    {arr.at(-1) == ing ? '.' : ', '}
                </Fragment>
                
            })}
          </p>
          <p className="mb-5">
            <span className="font-semibold">Method: </span>
            {recipe.method}
          </p>

          <img src={recipe.image} alt="" className="w-full h-72 object-cover rounded"/>
        </div>
      )}
    </div>
  );
}

export default Recipe;
