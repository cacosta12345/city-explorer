import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


function CityForm(props) {
    const [typedCity, setTypedCity]= useState('');
    const [showHead, setShowHead]= useState(false);

    function handleChange(e){
        setShowHead(false);
        setTypedCity(e.target.value);
    }
    function handleSubmit(e){
        e.preventDefault();
        setShowHead(true);
        props.handleChangeCity(typedCity);
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={handleChange} placeholder="Seattle, WA" />
                    <Button variant='primary' type='submit' onSubmit={handleSubmit}>Explore!</Button>
                </Form.Group>
                {
                    showHead && props.city && <h2>{props.city} {props.latitude} {props.longitude}</h2>
                }

            </Form>
        </>
    )
}

export default CityForm;