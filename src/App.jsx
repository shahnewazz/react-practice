import './App.css'
import Footer from './components/Footer'
import Gallery, { FeaturedImage as TheFeaturedImage } from './components/Gallery'
import Header from './components/Header'
import Welcome from './components/Welcome'

function App() {

  return (
    <>
      <Header />
        <div className="container mx-auto p-4">
          <Welcome />
          <TheFeaturedImage />
          <Gallery />
        </div>
      <Footer />
    </>
  )
}

export default App
