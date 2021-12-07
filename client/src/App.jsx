import { Navbar, Welcome, Services, Loader, Community, Footer } from "./components"

const App = () => {
  return (
    <div className="App">
      <div className='min-h-screen'>
        <div className="gradient-bg-welcome">
          <Navbar />
          <Welcome />
        </div>
        <Services />
        <Community />
        <Footer />
      </div>
    </div>
  )
}

export default App;
