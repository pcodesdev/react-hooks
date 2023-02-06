import React, { useState, useContext, useCallback } from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import ChildComponent from "./ChildComponent";
import { ThemeContext } from "../usecontext/ThemeContext";

function UseCallBack() {
    const { theme } = useContext(ThemeContext);
    const [count, setCount] = useState(0);
    const [value, setValue] = useState('');

    const handleCount = useCallback(() => {
        setCount(c => c + 1);
    }, [setCount]);

    return (
        <CardGroup
            id="usecallback"
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
                        useCallback
                    </Card.Title>
                    <Card.Text
                        className="fs-4 fst-italic "
                        style={{ textAlign: "justify" }}
                    >
                        Let's say you have a parent component that renders a child component. The child component receives a callback function from the parent as a prop, and the child component re-renders every time the parent component re-renders, even if the callback prop has not changed. This can lead to unnecessary re-renders and decreased performance.

                        To avoid this, we can use the useCallback hook in the parent component to memoize the callback, so that it only changes if one of its dependencies changes. In this example, when the value of the input is changed, the parent component re-renders, but the child component does not re-render because handleCount has not changed. This can significantly improve performance in larger and more complex applications. {" "}
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


                        <ChildComponent count={count} handleCount={handleCount} />
                        <input className="m-5 p-3 rounded-pill border-dark-subtle border border-start-0" type="text" value={value} onChange={e => setValue(e.target.value)} />
                    </Card.Text>
                </Card.Body>
            </Card>
        </CardGroup>
    );
}

export default UseCallBack;
