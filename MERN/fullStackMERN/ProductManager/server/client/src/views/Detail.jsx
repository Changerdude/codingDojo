import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useParams, Link } from "react-router-dom";
import DeleteButton from "../components/DeleteButton";

const Detail = props => {
    const { id } = useParams();
    const { refreshList } = props;
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
                        <DeleteButton id={product._id} refreshList={refreshList}/>
                    </div>
                </div>
                :
                <p>Loading...</p>
            }
        </>
    );
}
export default Detail;