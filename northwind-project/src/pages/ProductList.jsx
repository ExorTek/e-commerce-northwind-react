import React, {useEffect, useState} from 'react';
import ProductService from "../services/productService";
import {Product} from "../layouts/Product";
import {Grid, GridRow} from "semantic-ui-react";
import {useParams} from "react-router";

export default function ProductList() {
    const [products, setProducts] = useState([]);
    let {categoryId} = useParams();

    useEffect(() => {
        let productService = new ProductService();
        if (categoryId) {
            productService.getProductByCategory(categoryId).then(result => setProducts(result.data.data))
        } else {
            productService.getProducts().then(result => setProducts(result.data.data))
        }
    }, [categoryId])

    const styTop = {marginTop: '1em', marginLeft: '1em'};
    const styLeft = {marginLeft: '1em'};
    return (
        <div>
            <Grid columns={3}>
                <Grid.Row>
                    {
                        products.map((product, index) => (

                            <Grid.Column>
                                {
                                    index > 2 ? (
                                        <Product product={product} key={product.id}
                                                 styles={styTop}/>
                                    ) : (
                                        <Product product={product} key={product.id} styles={styLeft}/>
                                    )
                                }

                            </Grid.Column>

                        ))
                    }
                </Grid.Row>
            </Grid>

            {/*<Table celled>*/}
            {/*    <Table.Header>*/}
            {/*        <Table.Row>*/}
            {/*            <Table.HeaderCell>Product Name</Table.HeaderCell>*/}
            {/*            <Table.HeaderCell>Quantity Per Unit</Table.HeaderCell>*/}
            {/*            <Table.HeaderCell>Category</Table.HeaderCell>*/}
            {/*            <Table.HeaderCell>Price</Table.HeaderCell>*/}
            {/*            <Table.HeaderCell>In Stock</Table.HeaderCell>*/}
            {/*        </Table.Row>*/}
            {/*    </Table.Header>*/}

            {/*    <Table.Body>*/}
            {/*        {*/}
            {/*            products.map(product => (*/}
            {/*                <Table.Row key={product.Id}>*/}
            {/*                    <Table.Cell><Link*/}
            {/*                        to={`/products/${product.productId}`}>{product.productName}</Link></Table.Cell>*/}
            {/*                    <Table.Cell>{product.quantityPerUnit}</Table.Cell>*/}
            {/*                    <Table.Cell>{product.categoryId}</Table.Cell>*/}
            {/*                    <Table.Cell>{product.unitPrice}</Table.Cell>*/}
            {/*                    <Table.Cell>{product.unitsInStock}</Table.Cell>*/}
            {/*                </Table.Row>*/}
            {/*            ))*/}
            {/*        }*/}

            {/*    </Table.Body>*/}

            {/*    <Table.Footer>*/}
            {/*        <Table.Row>*/}
            {/*            <Table.HeaderCell colSpan='3'>*/}
            {/*                <Menu floated='right' pagination>*/}
            {/*                    <Menu.Item as='a' icon>*/}
            {/*                        <Icon name='chevron left'/>*/}
            {/*                    </Menu.Item>*/}
            {/*                    <Menu.Item as='a'>1</Menu.Item>*/}
            {/*                    <Menu.Item as='a'>2</Menu.Item>*/}
            {/*                    <Menu.Item as='a'>3</Menu.Item>*/}
            {/*                    <Menu.Item as='a'>4</Menu.Item>*/}
            {/*                    <Menu.Item as='a' icon>*/}
            {/*                        <Icon name='chevron right'/>*/}
            {/*                    </Menu.Item>*/}
            {/*                </Menu>*/}
            {/*            </Table.HeaderCell>*/}
            {/*        </Table.Row>*/}
            {/*    </Table.Footer>*/}
            {/*</Table>*/}


        </div>
    );
}
