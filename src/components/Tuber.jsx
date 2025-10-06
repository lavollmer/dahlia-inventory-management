import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Tuber = () => {
  // get the id from the url
  const { id } = useParams();

  // useState values
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://localhost:5000/inventory/${id}`);
      setData(response.data)
    } catch (err) {
      console.error("There was an error fetching data:", err)
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    if (id) fetchData();
  }, [id]);

  return (
    <div>
      <Header />
      <div className='individual-tuber'>
        <h1>Individual Tuber Details</h1>
        {loading ? (
          <p>Loading ...</p>
        ) : data ? (
          <div>
            {data.map(item => (
              <div key={item._id}>
                <div> {item._id}</div>
                <div> {item.name}</div>
                <div> {item.variety} </div>
                <div> {item.color} </div>
                <div> {item.bloom_size} </div>
                <div> {item.status} </div>
                <div> {item.container_id} </div>
                <div> {item.storage} </div>
                <div> {item.purchase_source} </div>
                <div> {item.purchase_year} </div>
                <div> {item.number_of_tubers} </div>
                <div> {item.condition} </div>
              </div>
            ) : (
              <p>No data found for this tuber.</p>
          </div>
           )}
      </div>
      <Footer />
    </div>
  );
};

export default Tuber