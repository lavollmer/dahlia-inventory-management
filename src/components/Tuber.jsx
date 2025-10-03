import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import { useState } from 'react'

const Tuber = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    try {
      const response = await axios.get("http://localhost:5000/inventory/:id");
      setData(response.data)
    } catch (err) {
      console.error("There was an error fetching data:", err)
    }
  }

  return (
    <div>
      <Header />
      <div>
        <h1>Individual Tuber Details</h1>
        <div>
          {data.map(item => (
            <div key={item._id}>
              {item.name}
            </div>
          )}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Tuber