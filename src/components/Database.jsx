import Header from './Header'
import { useEffect, useState } from "react";
import axios from "axios";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";

const Database = ({ setFormData }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editingId, setEditingId] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);


  const handleEdit = async (item) => {
    // upload item data
    setFormData(item);
    // editing true
    setIsEditing(true);
    setEditingId(item._id);
    await fetchData();
  }

  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this item? It cannot be restored.")
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:5000/inventory/${id}`);
      await fetchData();
    } catch (err) {
      console.error("Error deleting item:", err)
    }
  }

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:5000/inventory');
      setData(response.data)
    } catch (err) {
      console.error("There was an error fetching data:", err)
    } finally {
      setLoading(false);
    }
  }

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <div>
        <Header />
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
              <th scope='col'>Options</th>
            </tr>
          </thead>
          <tbody>
            {data.map(item => (
              <tr key={item._id}>
                <td space="row">
                  <div className='item-name'>
                    {item.name}
                  </div></td>
                <td space="row">{item.color}</td>
                <td space="row">{item.containerId}</td>
                <td space="row">{item.purchaseSource}</td>
                <td space="row">{item.purchaseYear}</td>
                <td space="row">{item.numberOfTubers}</td>
                <td space="row">{item.storage}</td>
                <td space="row">{item.condition}</td>
                <td>
                  <button onClick={() => handleEdit(item)}>
                    <FaPencilAlt />
                    Edit</button>
                </td>
                <td>
                  <button onClick={() => handleDelete(item._id)}>
                    <FaTrash />
                    Delete</button>
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
