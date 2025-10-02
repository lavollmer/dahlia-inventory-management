import Navigation from "./Navigation"
import '../App.css'
import { LuFlower2 } from "react-icons/lu";
import { RxHamburgerMenu } from "react-icons/rx";
import { useState } from "react";
import { IoClose } from "react-icons/io5";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    setIsOpen(!isOpen);
  }

  return (
    <>
      <div className='header-bar'>
        <div className="header">
          <div className='logo'>
            <LuFlower2 />
            Dahlia Petal Ledger
          </div>
          <div>
            <button onClick={toggleOpen}>
              <span>{isOpen ? <IoClose /> : <RxHamburgerMenu size="1.2em" />}</span>
            </button>
          </div>
        </div>
          {isOpen && <div className="faq-answer"><Navigation /></div>}
      </div>
    </>
  )
}

export default Header