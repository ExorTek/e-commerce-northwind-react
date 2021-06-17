import React from 'react';
import {Dropdown} from "semantic-ui-react";
import {NavLink} from "react-router-dom";

export default function CartSummary() {
    return (
        <div>
            <Dropdown style={{marginTop: '0.5em'}} icon='shopping cart' item text=''>
                <Dropdown.Menu>
                    <Dropdown.Item>1</Dropdown.Item>
                    <Dropdown.Item>2</Dropdown.Item>
                    <Dropdown.Divider/>
                    <Dropdown.Item as={NavLink} to="/cart">Go Cart</Dropdown.Item>
                </Dropdown.Menu>
            </Dropdown>
        </div>
    );
}
