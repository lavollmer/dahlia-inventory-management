import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'


const Tuber = () => {
  // get the id from the url
  const { id } = useParams();

  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  // useState values
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    try {
      const response = await axios.get(`https://dahlia-petal-ledger.herokuapp.com/inventory/${id}`);

      if (!response.data || Object.keys(response.data).length === 0) {
        setData(null);
      } else {
        setData(response.data)
      }
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
        <div>
          <h1>Individual Tuber Details</h1>
        </div>
        {loading ? (
          <div className='loading'>
            <p>Loading ...</p>
          </div>
        ) : data ? (
          <div className='id-data'>
            <div> {data._id}</div>
            <div> {data.name}</div>
            <div> {data.variety} </div>
            <div> {data.color} </div>
            <div> {data.bloom_size} </div>
            <div> {data.status} </div>
            <div> {data.container_id} </div>
            <div> {data.storage} </div>
            <div> {data.purchase_source} </div>
            <div> {data.purchase_year} </div>
            <div> {data.number_of_tubers} </div>
            <div> {data.condition} </div>
          </div>
        ) : (
          <p>No data found for this tuber.</p>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Tuber