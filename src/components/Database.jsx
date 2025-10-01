import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const Database = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/dahliainventorymanagement')
      .then(response => {
        setData(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error("Error fetching data: ", error)
        setLoading(false)
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <h1>Dahlia Inventory Management Database</h1>
        <ul>
          {data.map(item => (
            <li key={item.id}>
              {item.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Database