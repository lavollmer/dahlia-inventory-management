import FAQItem from './FAQItem';
import faqsData from '../data/faq';

const FAQList = () => {
  return (
    <div className='faq-list'>
        {faqsData.map((faq) => (
            <FAQItem key={faq.id} question={faq.question} answer={faq.answer}/>
        ))}
    </div>
  )
}

export default FAQList