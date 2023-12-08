import { useState } from 'react';
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';


function CityForm(props) {
    const [showHead, setShowHead]= useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setShowHead(true);
        props.handleGetLocation();
    }
    return (
        <>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                    <Form.Label>City</Form.Label>
                    <Form.Control onChange={props.updateCity} placeholder="Seattle, WA" />
                    <Button variant='primary' type='submit'>Explore!</Button>
                </Form.Group>
                {
                    showHead && props.city && <h2>{props.city}</h2>
                }

            </Form>
        </>
    )
}

export default CityForm;