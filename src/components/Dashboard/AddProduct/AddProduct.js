import React from 'react';
import { useForm } from 'react-hook-form';

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();
    const onSubmit = data => {
        fetch("http://localhost:5000/addItem", {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    alert('New Item successfully added');
                    reset()
                }
            })
    };
    return (
        <div className="container mt-4">
            <h1 className="pink-text text-center">Add A New Product</h1>
            <div className="row">
                <div className="col-md-3"></div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit(onSubmit)} className="mt-3">
                        <input
                            type="text"
                            {...register("name", { required: true })}
                            className="form-control my-3 "
                            placeholder="Product Name"
                        />
                        <input
                            type="number"
                            {...register("price", { required: true })}
                            className="form-control my-3 "
                            placeholder="Price"
                        />
                        <input
                            type="text"
                            {...register("description", { required: true })}
                            className="form-control my-3 "
                            placeholder="Description"
                        />
                        <input
                            type="number"
                            {...register("rating", { required: true, min: 0, max: 5 })}
                            className="form-control my-3 "
                            placeholder="Rating"
                        />
                        <input
                            type="url"
                            {...register("img", { required: true })}
                            className="form-control my-3 "
                            placeholder="Image url link"
                        />
                        <input type="submit" value="Add Product" className="pink-btn w-100 mb-5" />
                    </form>
                </div>
                <div className="col-md-3"></div>
            </div>
        </div>
    );
};

export default AddProduct;