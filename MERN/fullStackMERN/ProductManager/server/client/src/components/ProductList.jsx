import React from "react";
import { Link } from "react-router-dom";

const ProductList = props => {
    const { deleteItem, productList } = props;

    return(
        <>
        {productList ? productList.products.map((product, i) => {
            return (
                <div key={i} className="card text-center mb-4">
                    <div className="card-header">
                        <Link to={`/${product._id}`}><h4>{product.title}</h4></Link>
                    </div>
                    <div className="card-body">
                        <h5 className="card-title">Price:</h5>
                        <p className="card-text">${product.price}</p>
                        <h5 className="card-title">Description:</h5>
                        <p className="card-text">{product.description}</p>
                        <Link to={`/${product._id}/edit`} className="btn btn-primary mx-2">Edit</Link>
                        <button className="btn btn-danger mx-2" onClick={() => deleteItem(product._id)}>Delete</button>
                    </div>
                </div>
            );
        })
        :
        <h4>No list Available</h4>
        }
        </>
    );
}
export default ProductList;