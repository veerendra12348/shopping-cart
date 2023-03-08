import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';

const Product = (props) => {
    const{product} = props;
    console.log(product);
    const {thumbnail ,brand,title,description,price,rating} =product;

    return (
        <Card sx={{ maxWidth: 345 }}>
            <CardMedia
                sx={{ height: 140 }}
                image={thumbnail}
                title="green iguana"
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {brand}
                </Typography>
                <Typography gutterBottom variant="h6" component="div">
                    {title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {description}
                </Typography>
                <Typography gutterBottom variant="span" component="div">
                  <strong>Price</strong>: RS {price}
                </Typography>
                <Rating name="read-only" value={rating} readOnly />
            </CardContent>
            <CardActions>
                <Button size="small">Add to cart</Button>
            </CardActions>
        </Card>
    );
};

export default Product;