import Navigation from "./Navigation";
import { useEffect, useState } from "react";
import axios from "axios";

const Database = () => {
  const [data, setData] = useState([]);

  useEffect (() => {
    axios.get('http://localhost:5000/api/dahliainventorymanagement')
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error("Error fetching data: ", error)
      });
  }, []);

  return (
    <div>
      <div>
        <Navigation />
      </div>
      <div>

      </div>
    </div>
  )
}

export default Database