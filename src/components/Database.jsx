import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import axios from "axios";
import InventoryItem from "../../server/models/InventoryItem";

const Database = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/api/dahliainventorymanagement')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error)
      });
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>
        <h1>Dahlia Inventory Management</h1>
        <ul>
          {InventoryItem.map(InventoryItem => (
            <li key={InventoryItem.id}>
              {InventoryItem.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Database