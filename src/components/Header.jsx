import Navigation from "./Navigation"
import '../App.css'
import { LuFlower2 } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";

const Header = () => {
  return (
    <div className='header-bar'>
      <div className='logo'>
        <LuFlower2 />
        Dahlia Petal Ledger
      </div>
      <div>
        <RxHamburgerMenu />
      </div>
      <div>
        <Navigation />
      </div>
    </div>
  )
}

export default Header