import Header from './Header'
import Footer from './Footer'
import axios from 'axios';
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'


const Tuber = () => {
  // get the id from the url
  const { id } = useParams();

  const navigate = useNavigate();
  const apiUrl = import.meta.env.VITE_API_URL;
   console.log("VITE_API_URL:", import.meta.env.VITE_API_URL);

  // useState values
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [tuberList, setTuberList] = useState([]);
  const [loadingList, setLoadingList] = useState(false);

  const fetchData = async () => {
    try {
      const response = await axios.get(`${apiUrl}/inventory/${id}`);
      console.log("Single tuber response", response.data);
      if (!response.data || Object.keys(response.data).length === 0) {
        setData(null);
      } else {
        setData(response.data)
        console.log(response.data)
      }
    } catch (err) {
      console.error("There was an error fetching data:", err)
      setData(null);
    } finally {
      setLoading(false);
    }
  }

 const fetchTuberList = async () => {
  setLoadingList(true);
  try {
    console.log("Fetching tuber list from URL:", `${apiUrl}/inventory`);
    const response = await axios.get(`${apiUrl}/inventory/`);
    console.log("Full response:", response);
    if (Array.isArray(response.data)) {
      setTuberList(response.data);
    } else {
      console.error("Unexpected response data:", response.data);
      setTuberList([]);
    }
  } catch (err) {
    console.error("Error fetching tuber list:", err);
    setTuberList([]);
  } finally {
    setLoadingList(false);
  }
}

  useEffect(() => {
    if (id) {
      fetchData();
    } else {
      fetchTuberList();
      setData(null);
      setLoading(false);
    }
  }, [id]);

  const handleSelectChange = (e) => {
    const selectedId = e.target.value;
    if (selectedId) {
      navigate(`/tuber/${selectedId}`);
    }
  }

  return (
    <div>
      <Header />
      <div className='individual-tuber'>
        <h1>Individual Tuber Details</h1>
        <h2>Use the dropdown menu to review individual tuber details or scan the QR code on the tuber for quick access to its information.</h2>
        {!id && (
          <div className="tuber-selector">
            <label htmlFor="tuber-select">Select a tuber:</label>
            {loadingList ? (
              <p>Loading tubers...</p>
            ) : (
              <select id="tuber-select" onChange={handleSelectChange} defaultValue="">
                <option value="" disabled>Select tuber...</option>
                {tuberList.map(tuber => (
                  <option key={tuber._id} value={tuber._id}>
                    {tuber.name} {tuber.variety ? `(${tuber.variety})` : ''}
                  </option>
                ))}
              </select>
            )}
          </div>
        )}

        {loading ? (
          <div className='loading'>
            <p>Loading ...</p>
          </div>
        ) : data ? (
          <div className='id-data'>
            <div><strong>ID:</strong> {data._id}</div>
            <div><strong>Name:</strong> {data.name}</div>
            <div><strong>Variety:</strong> {data.variety}</div>
            <div><strong>Color:</strong> {data.color}</div>
            <div><strong>Bloom Size:</strong> {data.bloom_size}</div>
            <div><strong>Status:</strong> {data.status}</div>
            <div><strong>Container ID:</strong> {data.container_id}</div>
            <div><strong>Storage:</strong> {data.storage}</div>
            <div><strong>Purchase Source:</strong> {data.purchase_source}</div>
            <div><strong>Purchase Year:</strong> {data.purchase_year}</div>
            <div><strong>Number of Tubers:</strong> {data.number_of_tubers}</div>
            <div><strong>Condition:</strong> {data.condition}</div>
          </div>
        ) : id ? (
          <p>No data found for this tuber.</p>
        ) : null}
      </div>
      <Footer />
    </div>
  );
};

export default Tuber