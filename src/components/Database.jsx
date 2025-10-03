
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
    const confirmed = window.confirm("Are you sure you want to delete this item? It cannot be restored.");
    if (!confirmed) return;

    try {
      await axios.delete(`http://localhost:5000/inventory/${id}`);
      alert('Item deleted successfully!');
      await fetchData();
    } catch (err) {
      console.error("Error deleting item:", err);
      alert('Failed to delete item.');
    }
  };


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
      <div className="table-wrapper">
        <table className="dahlia-table">
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
              <th scope='col'>Action</th>
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
                <td space="row">{item.container_id}</td>
                <td space="row">{item.purchase_source}</td>
                <td space="row">{new Date(item.purchase_year).getFullYear()}</td>
                <td space="row">{item.number_of_tubers}</td>
                <td space="row">{item.storage}</td>
                <td space="row">{item.condition}</td>
                <td>
                  <button className="action-btn" onClick={() => handleEdit(item)}>
                    <FaPencilAlt />
                   </button>
                  <button className="action-btn" onClick={() => handleDelete(item._id)}>
                    <FaTrash />
                   </button>
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
