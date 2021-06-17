import React from "react";
import Categories from "./Categories";
import ProductList from "../pages/ProductList";
import {Grid} from "semantic-ui-react";
import {Route} from "react-router";
import ProductDetail from "../pages/ProductDetail";
import CartDetail from "../pages/CartDetail";
import {CART, DASHBOARD, PRODUCT, PRODUCT_ID, PRODUCTS_BY_CATEGORY_ID} from "../constants/routes";

export default function Dashboard() {
    return (
        <div>
            <Grid>
                <Grid.Row>
                    <Grid.Column width={4}>
                        <Categories/>
                    </Grid.Column>
                    <Grid.Column width={12}>
                        <Route exact path={DASHBOARD} component={ProductList}/>
                        <Route exact path={PRODUCT} component={ProductList}/>
                        <Route exact path={PRODUCT_ID} component={ProductDetail}/>
                        <Route path={CART} component={CartDetail}/>
                        <Route exact path={PRODUCTS_BY_CATEGORY_ID} component={ProductList}/>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </div>
    );
}
