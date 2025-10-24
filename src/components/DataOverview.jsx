import Header from "./Header"
import Footer from "./Footer"
import { useState, useEffect } from 'react'
import axios from 'axios';
import DahliaColorChart from "../graphs/DahliaColorChart"
import TubersByVariety from "../graphs/TubersByVariety";
import PurchaseTrends from "../graphs/PurchaseTrends";

const DataOverview = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get('https://dahlia-petal-ledger.onrender.com/inventory')
      .then(response => setData(response.data))
      .catch(error => console.error("Error fetching data:", error))
  }, []);

  // number of varieties
  const uniqueVarieties = new Set(data.map(item => item.variety));
  const numberOfVarieties = uniqueVarieties.size;

  // number of tubers
  const total = data.reduce((acc, item) => acc + item.number_of_tubers, 0);
  console.log(total)


  return (
    <div>
      <Header />
      <div className="analytics-page">
        <h1>Analytics Dashboard</h1>
        <div className="summary">
          <h2>Summary</h2>
          <p>Total number of tubers: {total} </p>
          <p>Total unique varieties: {numberOfVarieties}</p>
        </div>
        <div className="dahlia-color-chart">
            <DahliaColorChart inventory={data} />
        </div>
        <div className="dahlia-color-chart">
            <TubersByVariety inventory={data} />
        </div>
        <div className="dahlia-color-chart">
            <PurchaseTrends inventory={data} />
        </div>
      </div>
      <Footer />
    </div >
  )
}

export default DataOverview