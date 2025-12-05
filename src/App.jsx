import './App.css'
import Footer from './components/Footer'
import Header from './components/Header'

function App() {

  return (
    <>
      <Header />
      <div className="container mx-auto p-4">
        <h2 className="text-xl font-semibold mb-4">Welcome to My Website</h2>
        <p className="mb-4">This is a simple React application styled with Tailwind CSS.</p>
        <p>Feel free to explore and modify the components!</p>
      </div>
      <Footer />
    </>
  )
}

export default App
