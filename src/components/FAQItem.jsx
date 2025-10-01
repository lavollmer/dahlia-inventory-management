import FAQ from "../data/faq"
import {useState} from 'react';
import { FaArrowCircleDown } from "react-icons/fa";
import { FaArrowCircleUp } from "react-icons/fa";

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
                <span>{isOpen ? <FaArrowCircleDown /> : <FaArrowCircleUp />}</span>
            </button>
            {isOpen && <div className="faq-answer">{answer}</div>}
        </div>
    </div>
  )
}

export default FAQItem