import React, {useEffect, useState} from 'react';
import {Menu} from "semantic-ui-react";

import CategoriesService from "../services/categoriesService";
import {useHistory} from "react-router";
import {DASHBOARD} from "../constants/routes";

export default function Categories() {
    const [categories, setCategories] = useState([]);
    const history = useHistory();
    const [state, setCurrentCategory] = useState(undefined);

    function handleChangeCategory(categoryId) {
        if (categoryId) {
            history.push(`/products/${categoryId}`);
        } else {
            history.push(DASHBOARD);
        }
        setCurrentCategory(categoryId);

    }

    useEffect(() => {
        let categoriesService = new CategoriesService();
        categoriesService.getCategories().then(result => setCategories(result.data.data))
    }, [])
    return (

        <div>
            <Menu className='main' pointing vertical>
                <Menu.Item className={state === undefined && "currentCategory"}
                           onClick={() => handleChangeCategory()}>All Product</Menu.Item>
                {
                    categories.map(categories => (
                        <Menu.Item className={state === categories.categoryId && "currentCategory"}
                                   onClick={() => handleChangeCategory(categories.categoryId)}
                                   name={categories.categoryName}/>
                    ))
                }

            </Menu>
        </div>
    );
}
