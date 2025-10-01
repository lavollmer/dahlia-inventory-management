import Navigation from "./Navigation"
import '../App.css'
import { LuFlower2 } from "react-icons/lu";

const Header = () => {
  return (
    <div className='navigation-bar'>
      <div className='logo'>
        <LuFlower2 />
        Dahlia Petal Ledger
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  )
}

export default Header