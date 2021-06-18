import React from 'react';
import {Dropdown, Label} from "semantic-ui-react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {removeFromCart} from "../store/actions/cartActions";
import {toast} from "react-toastify";

export default function CartSummary() {
    const {cartItems} = useSelector(state => state.cart);

    const dispatch = useDispatch();
    const handleRemoveToCart = (product) => {
        dispatch(removeFromCart(product));
        toast.error(`${product.productName} Deleted Cart!`)
    };

    return (
        <div>
            <Dropdown className={"dropDown"} style={{marginTop: '0.5em'}} icon='shopping cart' item>

                <Dropdown.Menu>
                    {

                        cartItems.map((cartItems) => (
                            <Dropdown.Item key={cartItems.product.productId}>
                                <Label onClick={()=>handleRemoveToCart(cartItems.product)}
                                       style={{marginRight: '1em', backgroundColor: 'red'}}>
                                    X
                                </Label>
                                {cartItems.product.productName}
                                <Label style={{marginLeft: '1em', backgroundColor: 'green'}}>
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
