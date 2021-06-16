import React, {useEffect, useState} from 'react';
import {useParams} from "react-router";
import {Button, Card, Image} from "semantic-ui-react";
import ProductService from "../services/productService";

export default function ProductDetail() {
    let {id} = useParams()

    const [product, setProduct] = useState({});

    useEffect(() => {
        let productService = new ProductService();
        productService.getByProductId(id).then(result => setProduct(result.data.data))
    }, [id])

    return (
        <div>
            <Card.Group>
                <Card fluid style={{marginTop: '2em',textAlign:'left'}}>
                    <Card.Content>
                        <Image
                            floated='right'
                            size='mini'
                            src='https://avatars.githubusercontent.com/u/54851701?v=4'
                        />
                        <Card.Header>Product Name : {product.productName}</Card.Header>
                        <Card.Meta>Category Name : {product.categoryName}</Card.Meta>
                        <Card.Description>Quantity Per Unit : {product.quantityPerUnit}</Card.Description>
                        <Card.Content>Price : {product.unitPrice} $</Card.Content>
                    </Card.Content>
                    <Card.Content extra>
                        <div className='ui two buttons'>
                            <Button basic color='green'>
                                Buy
                            </Button>
                            <Button basic color='red'>
                                Delete
                            </Button>
                        </div>
                    </Card.Content>
                </Card>
            </Card.Group>
        </div>
    );
};
