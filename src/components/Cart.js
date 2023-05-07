import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { Button } from '@mui/material';
import { remove } from '../redux/cartSlice';

function Cart() {
  const dispatch = useDispatch();
  const products = useSelector(state => state.cart);

const removeToCart = id => {
  dispatch(remove(id));
}

  const cards = products.map((product, index) => (
    <div className='col-md-12' key={index} >
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
                <Button variant="contained" color='error' onClick={() => removeToCart(index)}>Remove</Button>
            </Card.Footer>
        </Card>
    </div>
))
  return (
    <div>
      <div className='row'>
        <h2>cart component</h2>
          {cards}
      </div>
    </div>
  )
}

export default Cart
