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

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this item? It cannot be restored.")
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:5000/inventory/${id}`);
      setData(prevData => prevData.filter(item => item._id !== id));
    } catch (err) {
      console.error("Error deleting item:", err)
    }
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div className="table">
        <table>
          <caption>Dahlia Inventory Management Database</caption>
          <thead>
            <tr>
              <th scope='col'>Dahlia Variety Name</th>
              <th scope='col'>Color</th>
              <th scope='col'>Container ID</th>
              <th scope='col'>Purchase Source</th>
              <th scope='col'>Purchase Year</th>
              <th scope='col'>Number of Tubers</th>
              <th scope='col'>Storage</th>
              <th scope='col'>Condition</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item.id}>
                <td space="row">{item.name}</td>
                <td space="row">{item.color}</td>
                <td space="row">{item.containerId}</td>
                <td space="row">{item.purchaseSource}</td>
                <td space="row">{item.purchaseYear}</td>
                <td space="row">{item.numberOfTubers}</td>
                <td space="row">{item.storage}</td>
                <td space="row">{item.condition}</td>
                <td>
                  <button onClick={() => handleDelete(item._id)}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Database;
