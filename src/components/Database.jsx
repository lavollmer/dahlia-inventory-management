
import { useEffect, useState } from "react";
import axios from "axios";
import { FaPencilAlt } from "react-icons/fa";
import { FaTrash } from "react-icons/fa";
import { Description, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import EditDahliaForm from "./EditDahliaForm"

const Database = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  let [isOpen, setIsOpen] = useState(false)
  const [editItem, setEditItem] = useState(null);
  const [selectedData, setSelectedData] = useState(null);



  useEffect(() => {
    fetchData();
  }, []);


  const handleUpdate = async () => {
    try {
      const {
        name,
        variety,
        color,
        bloom_size,
        status,
        container_id,
        purchase_source,
        purchase_year,
        number_of_tubers,
        storage,
        condition,
      } = selectedData;

      const updatedData = {
        name,
        variety,
        color,
        bloom_size,
        status,
        container_id,
        purchase_source,
        purchase_year,
        number_of_tubers,
        storage,
        condition,
      };

      await axios.put(`https://dahlia-petal-ledger.onrender.com/inventory/${selectedData._id}`, updatedData);
      alert("Item updated successfully!");

      setIsOpen(false);

      await fetchData();

      setSelectedData(null);

    } catch (err) {
      console.error("Error updating item:", err);
      alert("Failed to update item.");
    }
  };


  const handleDelete = async (id) => {
    const confirmed = window.confirm("Are you sure you want to delete this item? It cannot be restored.");
    if (!confirmed) return;

    try {
      await axios.delete(`https://dahlia-petal-ledger.onrender.com/inventory/${id}`);
      alert('Item deleted successfully!');
      await fetchData();
    } catch (err) {
      console.error("Error deleting item:", err);
      alert('Failed to delete item.');
    }
  };


  const fetchData = async () => {
    try {
      const response = await axios.get('https://dahlia-petal-ledger.onrender.com/inventory');
      console.log("Fetched data:", response.data)
      console.trace();
      setData(response.data)
    } catch (err) {
      console.error("There was an error fetching data:", err)
    } finally {
      setLoading(false);
    }
  }


  const handleEdit = async (id) => {
    //click the action button and trigger this function
    setIsOpen(true)
    console.trace();
    console.log('Fetching inventory with ID:', id);

    try {
      const response = await axios.get(`https://dahlia-petal-ledger.onrender.com/inventory/${id}`);
      console.log("Fetched data:", response.data)
      setSelectedData(response.data)
    } catch (err) {
      console.error("Error:", err)
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
              <th scope='col'>Variety</th>
              <th scope='col'>Color</th>
              <th scope='col'>Bloom Size</th>
              <th scope='col'>Status</th>
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
                <td space="row">{item.variety}</td>
                <td space="row">{item.color}</td>
                <td space="row">{item.bloom_size}</td>
                <td space="row">{item.status}</td>
                <td space="row">{item.container_id}</td>
                <td space="row">{item.purchase_source}</td>
                <td space="row">{new Date(item.purchase_year).getFullYear()}</td>
                <td space="row">{item.number_of_tubers}</td>
                <td space="row">{item.storage}</td>
                <td space="row">{item.condition}</td>
                <td>
                  <button className="action-btn" onClick={() => handleEdit(item._id)}>
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
        <div>
          {isOpen && selectedData && (
            <Dialog open={isOpen} onClose={() => setIsOpen(false)} className="modal-overlay">
              <div className="modal-content">
                <DialogPanel>
                  <div>
                    {/* <DialogTitle>Edit Dahlia Details</DialogTitle> */}
                    <Description>This will permanently change your data. Select the cancel button if you do not want to continue.</Description>
                    <EditDahliaForm
                      data={selectedData}
                      setData={setSelectedData}
                      editingId={selectedData._id}
                      onSubmit={handleUpdate}
                    />
                    <button onClick={() => setIsOpen(false)}>Cancel</button>
                  </div>
                </DialogPanel>
              </div>
            </Dialog>
          )}
        </div>
      </div>
    </div>
  )
};

export default Database;
