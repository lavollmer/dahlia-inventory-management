import FAQList from "./FAQList"
import Footer from "./Footer"
import Navigation from "./Navigation"
import Questions from "./Questions"

const FAQ = () => {
  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <h1>Frequently Asked Questions</h1>
      </div>
      <div>
        <FAQList />
      </div>
      <div>
        <Questions />
      </div>
      <Footer/>
    </div>
  )
}

export default FAQ