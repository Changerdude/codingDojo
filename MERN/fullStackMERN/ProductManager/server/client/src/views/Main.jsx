import React from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = props => {
    const { deleteItem, productList, refreshList , isEditing} = props;

    return (
        <>
        <ProductForm isEditing={isEditing} refreshList={refreshList}/>
        <hr />
        <ProductList deleteItem={deleteItem} productList={productList}/>
        </>
    );
}
export default Main;