import React, { useEffect, useState } from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import useAuth from '../../../hooks/useAuth';

const MyOrders = () => {
    const [myOrders, setMyOrders] = useState([]);
    const [remove, setRemove] = useState(false);
    const { user } = useAuth()

    useEffect(() => {
        fetch(`http://localhost:5000/myOrders/${user?.email}`)
            .then(res => res.json())
            .then(data => setMyOrders(data))
    }, [remove])


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


    return (
        <div className="container my-5" style={{ minHeight: "200px" }}>
            <h1 className="pink-text text-center text-uppercase">Collection of my Orders</h1>
            <h4 className="pink-text text-center">Total Orders: {myOrders.length}</h4>
            <Row xs={1} md={4} className=" my-3">
                {myOrders.map(order => (
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={order?.image} height="200px" />
                            <Card.Body className="text-center">
                                <Card.Title className="fs-4 pink-text">{order?.plantName}</Card.Title>
                                <h6 className="pink-text">Order Date: {order?.date}</h6>
                                <Card.Text>
                                    <h6 className="pink-text">Price: $ {order?.price}</h6>
                                    <h6 className="pink-text">Status: {order?.status}</h6>
                                    <button onClick={() => handleRemove(order?._id)} className="btn btn-success w-100">Cancel</button>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default MyOrders;