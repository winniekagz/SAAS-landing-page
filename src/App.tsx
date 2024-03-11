
import Header from './Header'
import AboutUs from './pages/AboutUs'
import Hero from './pages/Hero'

function App() {
 
  return (
    <>
  <div className="bg-white p-4 ">
  <Header/>
  <div className="flex-1 min-h-screen">
  <Hero/>
  <AboutUs/>
  </div>
  </div>
    </>
  )
}

export default App
