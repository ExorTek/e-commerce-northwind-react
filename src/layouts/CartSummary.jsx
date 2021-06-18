import React from 'react';
import {Dropdown, Label} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import {useSelector} from "react-redux";

export default function CartSummary() {
    const {cartItems} = useSelector(state => state.cart);
    return (
        <div>
            <Dropdown style={{marginTop: '0.5em'}} icon='shopping cart' item text=''>
                <Dropdown.Menu>
                    {
                        cartItems.map((cartItems)=>(
                            <Dropdown.Item key={cartItems.product.productId}>
                                {cartItems.product.productName}
                                <Label style={{marginLeft:'0.3em',backgroundColor:'red'}}>
                                    {cartItems.quantity}
                                </Label>
                            </Dropdown.Item>
                        ))
                    }
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to="/cart">Go Cart</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
