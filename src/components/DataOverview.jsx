import Header from "./Header"
import Footer from "./Footer"
import { useState, useEffect } from 'react'
import axios from 'axios';
import "../App.css"

const DataOverview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/inventory')
      .then(response => setData(response.data))
      .catch(error => console.error("Error fetching data:", error))
  }, []);

  const uniqueVarieties = new Set(data.map(item => item.variety));
  const numberOfVarieties = uniqueVarieties.size;

  return (
    <div>
      <Header />
      <div className="analytics-page">
        <h1>Analytics</h1>
        <p>Analytics Dashboard</p>
        <div className="summary">
          <h2>Summary</h2>
          <p>Total unique varieties: {numberOfVarieties}</p>
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default DataOverview