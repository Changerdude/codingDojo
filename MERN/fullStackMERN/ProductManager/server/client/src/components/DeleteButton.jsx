import React from "react"
import axios from "axios"

export default props => {
    const { id, refreshList } = props;

    const deleteItem = () => {
        axios.delete(`http://localhost:8000/api/products/delete/${id}`)
            .then((res) => {
                console.log(res.data)
                refreshList();
            })
            .catch((err) => {
                console.log(err);
            })
    };
    return (
        <button className="btn btn-danger mx-2" onClick={deleteItem}>Delete</button>
    )
}