import FAQList from "./FAQList"
import Footer from "./Footer"
import Header from "./Header"
import Questions from "./Questions"

const FAQ = () => {
  return (
    <div>
      <div>
        <Header />
      </div>
      <div>
        <h1>Help & FAQ</h1>
        <h2>Find answers to common questions.</h2>
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