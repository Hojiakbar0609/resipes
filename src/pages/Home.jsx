// request hook
import { useFetch } from '../hooks/useFetch'

// component
import RecipeList from '../components/RecipeList'

function Home() {
  const {data: recipies, isPending, error} = useFetch('http://localhost:3000/recipes');
  

  if (isPending) {
    return <div className="text-center text-2xl mt-3">Loading...</div>
  }


  if (error) {
    return <div className="text-center text-2xl mt-3 text-red-500">{error}</div>
  }

  return (
    <div className='max-w-5xl mx-auto py-3 px-3'>
        {recipies && <RecipeList reicpies={recipies}/>}
    </div>
  )
}

export default Home