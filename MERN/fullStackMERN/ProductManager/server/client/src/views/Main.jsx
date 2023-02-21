import React from "react";
import ProductForm from "../components/ProductForm";
import ProductList from "../components/ProductList";

const Main = props => {
    const { productList, refreshList , isEditing} = props;

    return (
        <>
        <ProductForm isEditing={isEditing} refreshList={refreshList}/>
        <hr />
        <ProductList productList={productList} refreshList={refreshList}/>
        </>
    );
}
export default Main;