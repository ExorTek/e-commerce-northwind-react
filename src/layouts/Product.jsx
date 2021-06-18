import React from 'react';
import {Button, Card, Image} from 'semantic-ui-react';
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import {addToCart} from "../store/actions/cartActions";
import {toast} from "react-toastify";

export const Product = ({
                            product, styles, addProductCart
                        }
) => {

    const dispatch = useDispatch();
    const handleAddToCart = () => {
        console.log(product)
        dispatch(addToCart(product));
        toast.success(`${product.productName} added cart!`)
    };
    const {
        productId,
        // categoryId,
        productName,
        unitsInStock,
        unitPrice,
        quantityPerUnit,
    } = product;
    return (
        <Card style={styles}>
            <Image
                src='https://lallahoriye.com/wp-content/uploads/2019/04/Product_Lg_Type.jpg'
                wrapped ui={false}/>
            <Card.Content>
                <Card.Header as={Link} to={`/product/${productId}`}>{productName}</Card.Header>
                <Card.Meta><span>{unitPrice} $</span></Card.Meta>
                <Card.Description>{quantityPerUnit}</Card.Description>
            </Card.Content>
            <Card.Content>
                <span>{unitsInStock} pcs in stock</span>
            </Card.Content>
            <Button onClick={handleAddToCart} style={{backgroundColor: '#00b894', color: '#fafafa'}}>
                Add To Cart

            </Button>
        </Card>)
}
