import React, {useState} from 'react';
import {Container, Menu} from "semantic-ui-react";
import CartSummary from "./CartSummary";
import SignedIn from "./SignedIn";
import SignedOut from "./SignedOut";
import {useHistory} from "react-router";
import {Link} from "react-router-dom";
import {DASHBOARD} from "../constants/routes";

export default function Navi() {
    const [isAuthenticated, setIsAuthenticated] = useState(true);
    const history = useHistory();

    function handleSignOut() {
        setIsAuthenticated(false);
        history.push("/");
    }

    function handleSignIn() {
        setIsAuthenticated(true);
    }

    return (
        <Menu inverted fixed='top'>
            <Container>
                <Menu.Item as={Link} to={DASHBOARD}
                    name='home'
                />
                <Menu.Item
                    name='messages'
                />

                <Menu.Menu position='right'>
                    <CartSummary/>
                    {isAuthenticated ? <SignedIn signOut={handleSignOut}/> : <SignedOut signIn={handleSignIn}/>}


                </Menu.Menu>
            </Container>
        </Menu>
    );
}
