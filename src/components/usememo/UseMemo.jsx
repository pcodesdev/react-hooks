import React, { useState, useContext, useMemo } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import CardGroup from "react-bootstrap/CardGroup";
import { ThemeContext } from "../usecontext/ThemeContext";

function UseMemo() {
    const { theme } = useContext(ThemeContext);
    const [items, setItems] = useState([
        { name: 'Item 1', price: 10 },
        { name: 'Item 2', price: 20 },
        { name: 'Item 3', price: 30 },
    ]);

    const totalPrice = useMemo(() => {
        console.log('Calculating total price...');
        return items.reduce((sum, item) => sum + item.price, 0);
    }, [items]);

    return (
        <CardGroup
            id="usememo"
            style={{ backgroundColor: theme.backgroundColor, color: theme.textColor }}
        >
            <Card
                className="m-3"
                style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.textColor,
                }}
            >
                <Card.Body>
                    <Card.Title className="fs-3 text-center text-decoration-underline">
                        useMemo
                    </Card.Title>
                    <Card.Text
                        className="fs-4 fst-italic "
                        style={{ textAlign: "justify" }}
                    >
                        Imagine you have a component that displays a list of items, each with its own price. You want to display the total price of all items in the list. The calculation of the total price can be expensive, taking into account various factors such as the number of items, the prices of each item, and any discounts or taxes that may apply.

                        You can use the useMemo hook to memoize the calculation of the total price, so that it is only re-calculated when the items or their prices change. In this example, when the user adds an item to the list, the totalPrice is only re-calculated if the list of items has changed. This can improve the performance of the component and prevent unnecessary re-calculations.{" "}
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card
                className="m-3"
                style={{
                    backgroundColor: theme.backgroundColor,
                    color: theme.textColor,
                }}
            >
                <Card.Title className="fs-3 text-center text-decoration-underline">
                    Example
                </Card.Title>
                <Card.Body className="text-center">
                    <Card.Text className="fs-3 text-center m-5 text-success-emphasis">

                        <ul>
                            {items.map(item => (
                                <li key={item.name}>{item.name} ({item.price})</li>
                            ))}
                        </ul>
                        <p>Total price: {totalPrice}</p>
                        <Button variant="primary" size="lg" onClick={() => setItems([...items, { name: 'Item 4', price: 40 }])}>
                            Add item
                        </Button>

                    </Card.Text>

                </Card.Body>
            </Card>
        </CardGroup>
    );
}

export default UseMemo;
