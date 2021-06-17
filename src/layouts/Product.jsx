import React from 'react';
import {Card} from 'semantic-ui-react';
import {Link} from "react-router-dom";

export const Product = ({
                            product: {
                                productId,
                                // categoryId,
                                productName,
                                unitsInStock,
                                unitPrice,
                                quantityPerUnit,
                            }
                            , styles
                        }
) => {

    return (
        <Card style={styles}>
            {/*<Image*/}
            {/*    src='https://lh3.googleusercontent.com/proxy/rORJZDW7jD7YqZSaGMYPLcyD8Zu4gRwqOXQgddC2k-7xL08iLfVYo6y2b_RKIDU5kTIZqNUXjntw1yOQAA0Dh_Q1L-L-pYIH3_1BniVSNt2-zX_Z2Mc2jUsvkV6Bgi7UYC8'*/}
            {/*    wrapped ui={false}/>*/}
            <Card.Content>
                <Card.Header as={Link} to={`/product/${productId}`}>{productName}</Card.Header>
                <Card.Meta><span>{unitPrice}</span></Card.Meta>
                <Card.Description>{quantityPerUnit}</Card.Description>
            </Card.Content>
            <Card.Content>
                <span>{unitsInStock} pcs in stock</span>
            </Card.Content>
        </Card>)
}
