import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import { useState, useEffect } from 'react'

const Tuber = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/inventory/:{id}`);
      setData(response.data)
    } catch (err) {
      console.error("There was an error fetching data:", err)
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      <Header />
      <div className='individual-tuber'>
        <h1>Individual Tuber Details</h1>
        <div>
          {data.map(item => (
            <div key={item._id}>
              {item.name}
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Tuber