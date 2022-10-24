import { Routes, Route, Outlet, Link } from "react-router-dom";

import './App.css'
import Home from './pages/Home'
import Recipes from './pages/Recipes'



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

      {/* Routes nest inside one another. Nested route paths build upon
      parent route paths, and nested route elements render inside
      parent route elements. See the note about <Outlet> below. */}

      <Routes>
        {/* <Route path="/" element={<Home />}>
          <Route index element={<Home />} />
          <Route path="/recipes" element={<Recipes />} />

          <Route path="*" element={<NoMatch />} />
        </Route> */}

        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="*" element={<NoMatch />} />
      </Routes>

    </>
  )


}

export default App
