import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Item = ({item}) => {
    const {_id,name,price,img} = item;
    return (
        <div className='col-md-4'>
       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{item.name}</Card.Title>
    <Card.Text>
      Some quick example text to build on the card title and make up the bulk of
      the card's content.
    </Card.Text>
    <Button variant="primary">Go somewhere</Button>
  </Card.Body>
</Card>
          
        </div>
    );
};

export default Item;