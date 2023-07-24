import React, { useContext } from 'react'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Toast from './Toast'
import ProductContext from '../Contexts/ProductsContext';
import './Product.css'

export default function Product(props) {
    const contextData = useContext(ProductContext)
    const addToCartHandler = () => {
        handleOpen()
        let userCart = [...contextData.ShoppingCart]
        let isInCart = userCart.some(product => {
            if (product.title == props.title) {
                product.count += 1
                contextData.setCart(userCart)
                return true
            }
        })
        if (!isInCart) {
            let newProduct = {
                title: props.title,
                price: props.price,
                img: props.img,
                count: props.count,
            }
            contextData.setCart(prev => [...prev, newProduct])
        }
    }
    // console.log(props);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
    return (
        <Card className='ProductCard'>
            <CardMedia
                component="img"
                alt="green iguana"
                height="240"
                image={props.img}
            />
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {props.title}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    Lizards are a widespread group of squamate reptiles, with over 6,000
                    species, ranging across all continents except Antarctica
                </Typography>
                <h4>{props.price}</h4>
                <span>Stock : {props.stock}</span>
            </CardContent>
            <CardActions>
                <Button size="small" color='error' variant="contained"
                    onClick={addToCartHandler}>
                    Add to Cart
                </Button>
                <Button size="small"  >Learn More</Button>
            </CardActions>
            <Toast open={open} handleClose={handleClose} title={props.title} />
        </Card>
    )
}