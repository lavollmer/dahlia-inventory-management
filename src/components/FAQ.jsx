import FAQList from "./FAQList"
import Navigation from "./Navigation"

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
    </div>
  )
}

export default FAQ