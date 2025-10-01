import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const Database = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios.get('http://localhost:5000/inventory')
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
        <table>
          <caption>Dahlia Inventory Management Database</caption>
          <thead>
            <tr>
              <th scope='col'>Dahlia Variety Name</th>
              <th scope='col'>Color</th>
              <th scope='col'>Container ID</th>
              <th scope='col'>Storage</th>
              <th scope='col'>Purchase Source</th>
              <th scope='col'>Purchase Year</th>
              <th scope='col'>Number of Tubers</th>
              <th scope='col'>Storage</th>
              <th scope='col'>Condition</th>
            </tr>
            {/* {data.map(item => (
            <tr key={item.id}>
              {item.name}
              {item.color}
              {item.container_id}
              {item.storage}
              {item.purchase_source}
              {item.purchase_year}
              {item.number_of_tubers}
              {item.storage}
              {item.condition}
            </tr> */}
          ))}
          </thead>
        </table>
      </div>
    </div>
  )
}

export default Database;