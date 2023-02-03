import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import CardGroup from 'react-bootstrap/CardGroup';

function UseState() {
    const [count, setCount] = useState(0)
    function handleIncrement() {
        setCount(count + 1)

    }

    function handleDecrement() { setCount(count - 1) }

    return (
        <CardGroup id='usestate'>
            <Card className='m-3'>
                <Card.Body>
                    <Card.Title className='fs-3 text-center text-decoration-underline'>useState</Card.Title>
                    <Card.Text className='fs-4 fst-italic ' style={{ textAlign: 'justify' }}>
                        useState is a hook in React that allows functional components to have state, which is a way to manage data that can change and affect the component's behavior and render.

                        useState returns an array with two elements: the current state and a function to update it. The state is initialized when the component is first rendered, and it can be updated by calling the update function.{' '}
                    </Card.Text>
                </Card.Body>

            </Card>
            <Card className='m-3'>
                <Card.Title className='fs-3 text-center text-decoration-underline'>Example</Card.Title>
                <Card.Body className='text-center'>
                    <Card.Text className='fs-3 text-center m-5 text-success-emphasis' >{count}</Card.Text>
                    <Button className='fs-3 text-center text-decoration-underline m-5' variant="primary" onClick={handleIncrement}>InCrement</Button>
                    <Button className='fs-3 text-center text-decoration-underline m-5' variant="secondary" onClick={handleDecrement}>Decrement</Button>
                </Card.Body>

            </Card>


        </CardGroup>
    );
}

export default UseState;