import Navigation from "./Navigation"
import '../App.css'
import { LuFlower2 } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <div className='header-bar'>
      <div className='logo'>
        <LuFlower2 />
        Dahlia Petal Ledger
      </div>
      <div>
        <button onClick={toggleOpen}>
          <RxHamburgerMenu size="1.5em" />
        </button>
        {isOpen && <div className="faq-answer"><Navigation /></div>}
      </div>
    </div>
  )
}

export default Header