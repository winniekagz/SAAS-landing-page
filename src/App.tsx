

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LandingPage1 from './pages/LandingPage1'
import LandingPage2 from './pages/LandingPage2'

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: (
       <LandingPage1/>
      ),
    },
    {
      path: "/landing-page-2",
      element: <LandingPage2/>,
    },
  ]);
  return (
    <>
  <div className="bg-white p-0 ">
 <RouterProvider router={router}/>
  </div>
    </>
  )
}

export default App
