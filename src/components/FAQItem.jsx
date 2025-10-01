import FAQ from "../data/faq"
import {useState} from 'react';
import { CiCirclePlus } from "react-icons/ci";
import { CiCircleMinus } from "react-icons/ci";


const FAQItem = ({question, answer}) => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleOpen = () => {
        setIsOpen(!isOpen);
    }

  return (
    <div>
        <div className="faq-item">
            <button onClick={toggleOpen} className="faq-question">
                {question}
                <span>{isOpen ? <CiCircleMinus /> : <CiCirclePlus />}</span>
            </button>
            {isOpen && <div className="faq-answer">{answer}</div>}
        </div>
    </div>
  )
}

export default FAQItem