
import Header from './Header'
import AboutUs from './pages/AboutUs'
import Features from './pages/Features'
import Hero from './pages/Hero'

function App() {
 
  return (
    <>
  <div className="bg-white p-4 ">
  <Header/>
  <div className="flex-1 min-h-screen">
  <Hero/>
  <AboutUs/>
  <Features/>
  </div>
  </div>
    </>
  )
}

export default App
