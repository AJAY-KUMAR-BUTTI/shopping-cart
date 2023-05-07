import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux'
import { add } from '../redux/cartSlice';
import { getProducts } from '../redux/productSlice';

function Products() {
    const {data : products, loading, error } = useSelector(state => state.products);
    console.log(loading)
   const dispatch = useDispatch();

   const addToCart = (product) => {
        dispatch(add(product));
   }

    useEffect(() => {
        dispatch(getProducts())
    }, [])
    if(loading) {
        return <h2>loading...</h2>
    }
    if(!loading && error) {
        return <h2>something went wrong</h2>
    }
    const cards = products.map(product => (
        <div className='col-md-3' key={product.id} >
            <Card className='h-100' style={{ marginBottom : '10px'}}>
                <div className='text-center'>
                    <Card.Img variant="top" src={product.image} style={{ width : '150px', height : '150px'}} />
                </div>
                <Card.Body>
                    <Card.Title>{product.title}</Card.Title>
                    <Card.Text>
                        INR : {product.price}
                    </Card.Text>
                </Card.Body>
                <Card.Footer style={{ background : 'white'}}>
                    <Button variant="contained" onClick={() => addToCart(product)}>Add To Cart</Button>
                </Card.Footer>
            </Card>
        </div>
    ))
  return (
    <div>
      <h1 className='header'>Ajay shopping app :</h1> <br />
        <div className='row'>    
             {cards}     
        </div>
    </div>
  )
}

export default Products;
