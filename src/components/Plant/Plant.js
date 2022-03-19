import React, { useEffect, useState } from 'react';
import { Button, Modal } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Rating from 'react-rating';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Plant = () => {
    const [plants, setPlants] = useState([]);
    const [singlePlant, setSinglePlant] = useState({});

    // load all plants
    useEffect(() => {
        fetch('http://localhost:5000/plants')
            .then(res => res.json())
            .then(data => setPlants(data))
    }, [])

    // show modal 
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    // show single plant
    const showDetails = id => {
        fetch(`http://localhost:5000/plantDetail/${id}`)
            .then(res => res.json())
            .then(data => setSinglePlant(data))
    }


    //  order a plant
    const { user } = useAuth()
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        data.status = 'Pending';
        data.image = singlePlant.img;
        console.log(data);
        fetch("http://localhost:5000/order", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    alert('Successfully Order a Plant');
                    reset()
                }
            })
    };

    return (

        <div className="container text-center">
            <h1 className="py-3">this is plant</h1>
            <div class="row row-cols-1 row-cols-md-3 g-4 mb-4">
                {
                    plants.map(plant => <div class="col">
                        <div class="card h-100">
                            <img src={plant?.img} class="card-img-top" alt="..." />
                            <div class="card-body">
                                <h5 class="card-title">{plant?.name}</h5>
                                <h5 class="card-title">$ {plant?.price}</h5>
                                <Link onClick={() => showDetails(`${plant?._id}`)}>
                                    <button onClick={handleShow} className="pink-btn mt-2">Order Now</button>
                                </Link>
                                {/* <a href="">
                                <button className="rounded-pill px-4 text-white btn background">See Detail</button>
                            </a> */}
                            </div>
                        </div>
                    </div>
                    )
                }

            </div>


            <Modal show={show} onHide={handleClose}>
                <Modal.Header>
                    <Modal.Title>{singlePlant?.name}</Modal.Title>
                </Modal.Header>
                <Modal.Body className="text-center">
                    <img src={singlePlant?.img} className="img-fluid" alt="" />
                    <h5>{singlePlant?.description}</h5>
                    <h3>$ {singlePlant?.price}</h3>
                    <Rating className="fs-4"
                        readonly
                        placeholderRating={singlePlant?.rating}
                        emptySymbol={<i className="fa-regular fa-star text-warning"></i>}
                        placeholderSymbol={<i className="fa-solid fa-star text-warning"></i>}
                        fullSymbol={<i className="fa-solid fa-star text-warning"></i>}
                    />
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
                        {user?.displayName && <input
                            type="text"
                            defaultValue={user?.displayName}
                            {...register("username", { required: true })}
                            className="form-control"
                            placeholder="User Name"
                        />}
                        {user?.email && <input
                            type="email"
                            defaultValue={user?.email}
                            {...register("email", { required: true })}
                            className="form-control my-3 "
                            placeholder="User Email"
                        />}
                        <input
                            {...register("phone", { required: true })}
                            type="tel"
                            className="form-control my-3 "
                            placeholder="Enter Your Phone Number"
                        />
                        <input
                            {...register("address", { required: true })}
                            type="text"
                            className="form-control my-3 "
                            placeholder="Enter Your Address"
                        />
                        <input
                            {...register("date", { required: true })}
                            type="date"
                            className="form-control my-3 "
                        />
                        {singlePlant?.name && <input
                            {...register("plantName", { required: true })}
                            defaultValue={singlePlant?.name}
                            type="text"
                            className="form-control my-3 "
                            placeholder="Plant Name"
                        />}
                        <input type="submit" value="Send" className="pink-btn w-100 mb-5" />
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleClose}>
                        Save Changes
                    </Button>
                </Modal.Footer>
            </Modal>
        </div>
    );
};

export default Plant;