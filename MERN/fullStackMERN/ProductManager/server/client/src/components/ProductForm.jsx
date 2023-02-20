import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams, useNavigate, Link } from "react-router-dom";

const ProductForm = props => {
    const { id } = useParams();
    const { isEditing, refreshList } = props;
    const [title, setTitle] = useState("");
    const [price, setPrice] = useState(0);
    const [description, setDescription] = useState("");

    const nav = useNavigate();

    useEffect(() => {
        id && axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                const product = res.data.product;
                console.log(product);
                setTitle(product.title);
                setPrice(product.price);
                setDescription(product.description);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id]);


    const updateItem = (e) => {
        e.preventDefault();
        axios.put(`http://localhost:8000/api/products/update/${id}`, {
            title,
            price,
            description
        })
            .then((res) => {
                console.log(res.data);
                clearPage();
                nav('/');
            })
            .catch((err) => {
                console.log(err);
                nav('/');
            })
    };

    const createProduct = (e) => {
        e.preventDefault();
        const item = {
            title,
            price: parseFloat(price),
            description
        };
        console.log(item);
        axios.post(`http://localhost:8000/api/products/new`, item)
            .then((res) => {
                console.log(res.data);
                clearPage();
            })
            .catch((err) => {
                console.log(err);
            })

    };

    const clearPage = () =>{
        refreshList();
        setTitle("");
        setPrice(0);
        setDescription("");
    }
    
    return (
        <div>
            <form onSubmit={isEditing ? updateItem : createProduct} className="p-3">
                <div className="row mb-3">
                    <label htmlFor="title" className="form-label">Title: </label>
                    <input type="text" id="title" name="title" className="form-control" onChange={(e) => setTitle(e.target.value)} value={title} />
                </div>
                <div className="row mb-3">
                    <label htmlFor="price" className="form-label">Price: </label>
                    <input type="number" id="price" name="price" className="form-control" onChange={(e) => setPrice(e.target.value)} value={price} />
                </div>
                <div className="row mb-3">
                    <label htmlFor="description" className="form-label">Description: </label>
                    <input type="text" id="description" name="description" className="form-control" onChange={(e) => setDescription(e.target.value)} value={description} />
                </div>
                <input type="submit" value={isEditing ? "Update" : "Create"} className="btn btn-primary mx-auto" />
                {isEditing && <Link to={'/'} ><button className="btn btn-primary mx-3" onClick={() => clearPage()}>Cancel</button></Link>}
            </form>
        </div>
    );
}
export default ProductForm;