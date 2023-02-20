import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";

const Detail = props => {
    const { id } = useParams();
    const { deleteItem } = props;
    const [product, setProduct] = useState();


    useEffect(() => {
        axios.get(`http://localhost:8000/api/products/${id}`)
            .then((res) => {
                setProduct(res.data.product);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])


    return (
        <>
            {product ?
                <div className="card text-center">
                    <div className="card-header">
                        <h4>{product.title}</h4>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Price:</h5>
                        <p className="card-text">${product.price}</p>
                        <h5 className="card-title">Description:</h5>
                        <p className="card-text">{product.description}</p>
                        <Link to={'/'} className="btn btn-primary mx-2">Back</Link>
                        <Link to={`/${product._id}/edit`} className="btn btn-primary mx-2">Edit</Link>
                        <button className="btn btn-danger mx-2" onClick={() => deleteItem(product._id)}>Delete</button>
                    </div>
                </div>
                :
                <p>Loading...</p>
            }
        </>
    );
}
export default Detail;