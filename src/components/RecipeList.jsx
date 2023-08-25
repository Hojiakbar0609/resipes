// rrd import
import { Link } from 'react-router-dom'

function RecipeList({ reicpies }) {
  return (
    <div>
      <ul className='flex gap-3'>
      {reicpies.map((recipe) => {
        return (
          <li key={recipe.id} className='bg-slate-400 text-center rounded-lg  h-[250px] p-3 flex flex-col hover:rotate-[-10deg] transition-all duration-300'>
            <h3 className='text-2xl mb-3'>{recipe.title}</h3>
            <p className='mb-3'>
              <span className='font-semibold'>Cooking Time: </span>
              {recipe.cookingTime}
            </p>
            <p>
              <span className='font-semibold'>Method: </span>
              {recipe.method.substring(0,80)}...
            </p>
            <Link to={`recipe/${recipe.id}`} className='mt-auto border self-center bg-slate-700 px-3 py-1 rounded text-white hover:opacity-60'>Read More</Link>
          </li>
        );
      })}
      </ul>
    </div>
  );
}

export default RecipeList;
