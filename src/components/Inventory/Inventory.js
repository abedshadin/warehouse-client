import React, { useEffect, useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from 'react-toastify';

import { Link, useParams } from "react-router-dom";
const Inventory = (e) => {
  
  const { id } = useParams();
  const [inventory, setInventory] = useState({});
  
  
  const handleDelivery = () => {
    

    const url = `https://rocky-plateau-64241.herokuapp.com/product/${id}`;

    fetch(url, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ quantity: inventory.quantity - 1 }),
    })
      .then((res) => res.json())
      .then((data) => {
        setInventory({ ...inventory, quantity: inventory.quantity - 1 });
        toast("Delivered Successfully");
       
      });
  };
  const handleupdateQuantity = (e) => {
    e.preventDefault();
    const quantity = parseInt(e.target.addQuantity.value);
    const addQuan = parseInt(inventory.quantity)+quantity;
   
    const url = `https://rocky-plateau-64241.herokuapp.com/product/${id}`;
    fetch(url, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({quantity: addQuan}),
    })
      .then((res) => res.json())
      .then((data) => {
       
        e.target.reset();
        setInventory({ ...inventory, quantity: addQuan });
        toast("Quantity Add Successfully");
        
      });
  };

  useEffect(() => {
    const url = `https://rocky-plateau-64241.herokuapp.com/inventory/${id}`;
    
    fetch(url)
      .then((res) => res.json())
      .then((data) => setInventory(data));
  }, []);

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <h2 className="text-center mt-2">{inventory.name}</h2>
          <div className="text-center">
            <img src={inventory.img} alt="" height="350px" />
          </div>
          <p>
            {" "}
            <span className="bold"> Price:</span> {inventory.price} TK
          </p>
          <p>
            <span className="bold"> Quantity:</span> {inventory.quantity} pcs
          </p>
          <p>
            <span className="bold"> Supplier Name:</span> {inventory.s_name}
          </p>
          <p>
            <span className="bold"> Description:</span> {inventory.s_desc}
          </p>
          <button className="btn btn-primary" onClick={handleDelivery}>
            Delivered
          </button>
        </div>

        <div className="col-md-6 text-center">
          <h2>Add Quantity</h2>
          <form action="" onSubmit={handleupdateQuantity}>
            <input type="number" name="addQuantity" />
            <br></br>
            <input type="submit" value="Update Quantity" />
          </form>
        </div>
      </div>
      <div className="text-center text-decoration-none">
        <Link to="/mngInventory">Manage Inventory</Link>
      </div>
      <ToastContainer></ToastContainer>
    </div>
   
  );
};

export default Inventory;
