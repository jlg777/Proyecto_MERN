import { Router } from "./Router"
import { Footer } from "./components/Footer"
import NavbarExample from "./components/Navbar"



export const App = () => {
    return (
      <div>
        <NavbarExample />
        <Router />
        <Footer />
      </div>
    )
}

export default App