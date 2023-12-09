/* eslint-disable react/prop-types */
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { When } from 'react-if';

// Nested component to render a single movie card
function MovieCard({ movie }) {
    return (
        <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" alt='movie-poster' src={movie.image || 'https://placehold.co/600x400?text=No+Image+Found'} />
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
    );
}

function Movie(props) {
    return (
        <div className='movies-container'>
            <When condition={props.movies}>
                {props.movies.map((movie, idx) => (
                    <MovieCard key={idx} movie={movie} />
                ))}
            </When>
        </div>
    );
}

export default Movie;
