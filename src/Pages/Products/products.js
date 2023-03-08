import React, { useEffect, useState } from 'react';
import { Grid } from '@mui/material';
import Product from '../../Components/product';
import { getAllProductsService, getProductCategories, getProductsByCategory } from '../../Services/productsAPI';

const Products = () => {
    const [productsList, setProductsList] = useState([]);
    const [Categories, setCategories] = useState([]);
    const [selectedCategory, setSeletedCategory] = useState([""]);

    useEffect(() => {
        getAllProductsService()
            .then(res => {
                setProductsList(res.data.products);
            });
    }, []);


    useEffect(() => {
        getProductCategories()
            .then(res => {
                setCategories(res.data);
            });
    }, []);

    useEffect(() => { 
        if (selectedCategory) {
        getProductsByCategory(selectedCategory).then (res => {
            setProductsList(res.data.products);
        });
    }
    }, [selectedCategory]);


    return (
        <div className='products'>
            <Grid container spacing={1}>
                {Categories.map(item => {
                        return (
                            <Grid item xs={2}>
                            <span className='category' onClick={() => setSeletedCategory(item)}>
                                {item}
                            </span>
                            </Grid>
                        );
                    })}
                </Grid>
                <Grid container spacing={2}>
                {productsList.map(product => {
                    return (
                        <Grid item xs={3}>
                            <Product product={product} />
                        </Grid>
                    );
                })}
            </Grid>
        </div>
    )
};

export default Products;