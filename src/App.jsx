import { AppRouter } from "./router/AppRouter"
import { Navbar } from "./presupuesto/components/Navbar"

function App() {

  return (
    <div className="container-fluid px-0">
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
