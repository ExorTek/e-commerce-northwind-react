import React, {useEffect, useState} from 'react';
import {Menu} from "semantic-ui-react";

import CategoriesService from "../services/categoriesService";

export default function Categories() {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        let categoriesService = new CategoriesService();
        categoriesService.getCategories().then(result => setCategories(result.data.data))
    }, [])
    return (

        <div>
            <Menu className='main' pointing vertical>
                {
                    categories.map(categories => (
                    <Menu.Item name={categories.categoryName}/>
                    ))
                }


            </Menu>
        </div>
    );
}
