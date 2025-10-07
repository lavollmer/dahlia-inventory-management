import Header from "./Header"
import Footer from "./Footer"
import { useState, useEffect } from 'react'
import axios from 'axios';

const DataOverview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/inventory')
      .then(response => setData(response.data))
      .catch(error => console.error("Error fetching data:", error))
  }, []);

  return (
    <div>
      <Header />
      <div className="analytics-page">
        <h1>Analytics</h1>
        <p>Analytics Dashboard</p>
        <div>
          {data.map(item => (
            <p key={item._id}>{item.name}: {item.variety}</p>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default DataOverview