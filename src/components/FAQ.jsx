import FAQList from "./FAQList"
import Footer from "./Footer"
import Header from "./Header"
import Questions from "./Questions"

const FAQ = () => {
  return (
    <div className="FAQ-page">
      <Header />
      <div className="FAQ-page-body">
        <h1>Help & FAQ</h1>
        <h2>Find answers to common questions.</h2>
        <FAQList />
        <Questions />
      </div>
      <Footer />
    </div>
  )
}

export default FAQ