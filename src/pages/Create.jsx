import { useState } from 'react';
import {Link} from 'react-router-dom'

function Create() {
  const [title, setTitle] = useState('')
  const [cookingTime, setCookingTime] = useState('')
  const [url, setUrl] = useState('')
  const [method, setMethod] = useState('')
  const [ingredient, setIngredient] = useState('')
  const [ingredients, setIngredients] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log({
      title,
      cookingTime,
      url,
      method,
      ingredients
    });
    setTitle("")
    setCookingTime("")
    setMethod("")
    setUrl("")
  }

  const addIngredient = (e) => {
    e.preventDefault()
    if(!setIngredients.includes(ingredient)){
      setIngredient((prev) => {
        return [...prev, ingredient]
      })
    }

    setIngredient('')
  }
  return (
    <div className="w-2/6 mx-auto mt-3 border p-5 border-gray-500 bg-slate-200 rounded-xl">
    <h1 className="text-4xl text-center mb-5">Create A Recipe:</h1>
      <form onSubmit={handleSubmit}>
      <div className='mb-4'>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            
            Title
            
            </label>

            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Title" required
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            />
        </div>


        <div className='mb-4'>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            
            Ingredient
            
            </label>

            <div className='flex gap-1 mb-2'>
              <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Ingredient"
              onChange={(e) => setIngredient(e.target.value)}
               required
              />
              <button onClick={addIngredient} className="border px-3 py-2 rounded-md bg-emerald-400 text-white hover:opacity-70 transition-all transitio">Add</button>
            </div>
              <i>Ingredients: </i>
        </div>

        <div className='mb-4'>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            
            Cooking Time
            
            </label>

            <input type="number" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Cooking time" required 
            onChange={(e) => setCookingTime(e.target.value)}
            value={cookingTime}
            />
        </div>

        <div className='mb-4'>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            
            Image URL
            
            </label>

            <input type="url" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Image url" required
            onChange={(e) => setUrl(e.target.value)}
            value={url}
            />
        </div>

        <div className='mb-4'>
            <label htmlFor="first_name" className="block mb-2 text-sm font-medium text-gray-900 dark:text-black">
            
            Text
            
            </label>

            <textarea type="url" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Text" required 
            onChange={(e) => setMethod(e.target.value)}
            value={method}
            />

            
        </div>
          <button className="border px-3 py-2 rounded-md bg-lime-500 text-white hover:opacity-70 transition-all transitio" to="create">Create</button>
        
      </form> 
    </div>
  );
}

export default Create;