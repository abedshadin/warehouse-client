import React, { useEffect, useState } from "react";

import { Link, useParams } from "react-router-dom";
const Inventory = (e) => {
  const [quan, setQuan] = useState([]);
  const { id } = useParams();
  const [inventory, setInventory] = useState({});
  console.log(inventory);
  useEffect(() => {
    fetch(`http://localhost:5000/product/${id}`)
      .then((res) => res.json())
      .then((data) => setQuan(data));
  }, []);
  const handleDelivery = () => {
    const quantity = parseInt(quan.quantity) - 1;
    const newQuantity = quantity;

    const url = `http://localhost:5000/product/${id}`;

    fetch(url, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ newQuantity }),
    })
      .then((res) => res.json())
      .then((data) => {
        setInventory({ ...inventory, quantity: inventory.quantity - 1 });
        alert("done");
        console.log(data);
      });
  };
  const handleupdateQuantity = (e) => {
    e.preventDefault();
    const quantity = e.target.addQuantity.value;
    const addQuan = parseInt(quantity + quan.quantity);
    const url = `http://localhost:5000/product/${id}`;
    fetch(url, {
      method: "put",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify({ addQuan }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        e.target.reset();
        if (data.modifiedCount > 0) {
          alert("done");
        }
      });
  };

  useEffect(() => {
    const url = `http://localhost:5000/inventory/${id}`;
    console.log(url);
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
    </div>
  );
};

export default Inventory;
