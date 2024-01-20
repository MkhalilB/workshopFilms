import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import Rating from '@mui/material/Rating';
const CardMovie=( {el})=>{
    return(
        <div>
            <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={el.posterURL} />
      <Card.Body>
        <Card.Title>{el.name}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>{el.title}</ListGroup.Item>
        <Rating name="read-only" value={el.rating} readOnly />
      </ListGroup>
      
    </Card>
        </div>
    )
}

export default CardMovie