import { Routes, Route} from "react-router-dom";

import './App.css'
import Home from './pages/Home'
import Recipes from './pages/Recipes'
import Recipe from './pages/Recipe'



const NoMatch = () => {
  return(
    <>
      <h1>NoMatch</h1>
    </>
  )
}

function App() {

  return (
    <>
      <Routes>
        {/* <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />

          <Route path="*" element={<NoMatch />} />
        </Route> */}

        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="recipes/:MealId" element={<Recipe />} />
        {/* </Route> */}
        {/* <Route path="*" element={<NoMatch />} /> */}
      </Routes>

    </>
  )


}

export default App
