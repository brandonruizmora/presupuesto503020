import { AppRouter } from "./router/AppRouter"
import { Navbar } from "./presupuesto/components/Navbar"

function App() {

  return (
    <div className="container-fluid">
      <Navbar />
      <AppRouter />
    </div>
  )
}

export default App
