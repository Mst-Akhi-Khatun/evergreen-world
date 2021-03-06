import { Table } from 'react-bootstrap';
import React, { useEffect, useState } from 'react';

const ManageOrders = () => {
    const [allOrders, setAllOrders] = useState([]);
    const [remove, setRemove] = useState(false);
    const [order, setOrder] = useState({});
    const [update, setUpdate] = useState(false);

    // load all orders
    useEffect(() => {
        fetch('http://localhost:5000/allOrders')
            .then(res => res.json())
            .then(data => setAllOrders(data))
    }, [remove, update])



    const handleRemove = (id) => {
        const proceed = window.confirm("Are you sure to remove order?");
        if (proceed) {
            fetch(`http://localhost:5000/removeOrder/${id}`, {
                method: 'DELETE',
                headers: { 'Content-Type': 'application/json' }
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert("Order successfully Removed!")
                        setRemove(!remove)
                    };
                })
        }
    }



    // update status
    const handleShipped = (id) => {
        fetch(`http://localhost:5000/allOrders/${id}`)
            .then((res) => res.json())
            .then((data) => setOrder(data));


        order.status = "Shipped"
        fetch(`http://localhost:5000/allOrders/${id}`, {
            method: "PUT",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(order),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount > 0) {
                    alert("Order  Successfully Shipped!");
                    setUpdate(!update)
                }
            });
    }
    return (
        <div className="mb-5 px-2" style={{ minHeight: '500px' }}>
            <h1 className="pink-text text-center mt-2">Manage All Orders</h1>
            <h3 className="light-pink-text text-center">All customers ordered plants are here</h3>
            <Table className="light-pink-bg my-5" responsive="sm" striped bordered hover>
                <thead>
                    <tr className="pink-text">
                        <th>No</th>
                        <th>User Name</th>
                        <th>Email </th>
                        <th>Phone</th>
                        <th>Address</th>
                        <th>Product</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        allOrders.map((items, index) => <tr key={items?._id}>
                            <td>{index + 1}</td>
                            <td>{items?.username}</td>
                            <td>{items?.email}</td>
                            <td>{items?.phone}</td>
                            <td>{items?.address}</td>
                            <td>{items?.plantName} ({items?.status})</td>
                            <td>
                                <button onClick={() => handleShipped(items?._id)} className="btn btn-outline-success mt-1">Shipped</button>
                                <button onClick={() => handleRemove(items?._id)} className="btn btn-outline-success ms-2 mt-1">Cancel</button>
                            </td>
                        </tr>)
                    }
                </tbody>
            </Table>
        </div>
    );
};

export default ManageOrders;