import React from 'react';
import { Card, ListGroup, ListGroupItem } from 'react-bootstrap';

const Members = ({member}) => {
    const {name,img,desig,fb,twitter} = member;
    return (
        <div className='col-md-4'>
           
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={img} />
  <Card.Body>
    <Card.Title>{name}</Card.Title>
    
  </Card.Body>
  <ListGroup className="list-group-flush">
    <ListGroupItem>{desig}</ListGroupItem>
    
  </ListGroup>
  <Card.Body>
    <Card.Link href={fb}>Facebook</Card.Link>
    <Card.Link href={twitter}>Twitter</Card.Link>
  </Card.Body>
</Card>
        </div>
    );
};

export default Members;