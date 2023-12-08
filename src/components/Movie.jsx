import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { When } from 'react-if'

function Movie(props) {
    console.log(props.movies)
    return (
        <When condition={props.movies}>
            {props.movies.map((movie, idx) => {
                return <Card key={idx} style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={movie.image || 'https://placehold.co/600x400?text=No+Image+Found'} />
                    <Card.Body>
                        <Card.Title>{movie.title}</Card.Title>
                        <Card.Text>
                            {movie.overview}
                        </Card.Text>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                        <ListGroup.Item>{movie.releaseDate}</ListGroup.Item>
                    </ListGroup>
                </Card>

            })}
        </When>
    );
}

export default Movie;