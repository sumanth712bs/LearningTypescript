import React from 'react';

function Product(props) {
    console.log("props product = ", props.product);
    return (
    <div>
<h4>Id: {props.product.id}</h4>
<h4>Title: {props.product.title}</h4>
    </div>
    );
}

export default Product;