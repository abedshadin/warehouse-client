import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Item = ({item}) => {
    const {_id,name,price,img,s_desc,s_name,quantity} = item;
    const navigate = useNavigate();

    const navigateToItemDetail = id =>{
        navigate(`/inventory/${id}`);
    }
    return (
        <div className='col-md-4 '>
       <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    <Card.Title>{price} TK</Card.Title>
    <Card.Title>{s_name} </Card.Title>
    <Card.Text>
   {s_desc.slice(0,100)}......
    </Card.Text>
    <Button  onClick={() => navigateToItemDetail(_id)} variant="primary">Update</Button>
  </Card.Body>
</Card>
          
        </div>
    );
};

export default Item;